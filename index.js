const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
require('dotenv').config();

const prefix = process.env.PREFIX;
const utopia = new Discord.Client();
utopia.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);

  let commandFiles = files.filter(f => f.split('.').pop() === 'js');
})

client.once('ready', () => {
  console.log('Ready');
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', message => {
  if (message.content === '!ping') {
    message.channel.send('Pong');
  }
});

client.login(process.env.TOKEN);