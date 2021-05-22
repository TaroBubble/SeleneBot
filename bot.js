const Discord = require('discord.js');
const fs = require('fs');
const search = require('youtube-search');
require('dotenv').config();

const prefix = process.env.PREFIX;
const utopia = new Discord.Client();
utopia.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		utopia.commands.set(command.name, command);
	}
}

console.log(utopia.commands);

utopia.once('ready', () => {
  console.log('Ready');
  console.log(`Logged in as ${utopia.user.tag}!`);
});


utopia.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) {
    return;
  }

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const commandName = args.shift().toLowerCase();

  if (!message.guild) {
    return;
  }
  
  if (!utopia.commands.has(commandName)) {
    message.channel.send("No Commands Found. Type !help for a list of commands");
    return;
  }

  const command = utopia.commands.get(commandName);

  if (command.args && !args.length) {
    return message.channel.send(`Didn't provide any arguments, ${message.author}!`);
  }

  try {
    command.execute(message, args);
  } catch (error) {
    console.log(error);
    message.reply('Error when executing command!');
  }

});

utopia.login(process.env.TOKEN);