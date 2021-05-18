const Discord = require("discord.js");

module.exports = {
  name: 'help',
  description: 'A list of commands',
  usage: '!help or !help <command name>',
  args: false,
  execute(client, message, args) {
    const data = [];
    const { commands } = message.client;
    console.log(commands);

    if (!args.length) {
      data.push('List of Commands: ');
      data.push(commands.map(command => '!'+command.name+ ' '+command.usage).join('\n'));
      data.push(`\nYou can type !help <command> for more usage information`);

      return message.reply(data, { split: true })
        .then(() => {
          message.reply('Sent list of commands');
        })
        .catch(error => {
          console.log(error);
          message.channel.send('Error in command');
        });
    } else {
      const commandObject = commands.get(args[0]);
      data.push(commandObject.name+' '+commandObject.usage);
      const helpEmbed = new Discord.MessageEmbed()
        .setTitle(commandObject.name)
        .setThumbnail(message.client.displayAvatarURL())
        .setDescription(commandObject.usage);
      return message.channel.send(helpEmbed);
    } 
  },
};