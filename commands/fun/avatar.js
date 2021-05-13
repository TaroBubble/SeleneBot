const Discord = require('discord.js');
module.exports = {
  name: 'avatar',
  description: 'Show user avatar',
  usage: 'Shows the user\'s avatar in embeded',
  args: true,
  execute(message, args) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        const avatarEmbeded = new Discord.MessageEmbed()
          .setTitle(member.displayName)
          .setImage(member.user.displayAvatarURL());
        message.channel.send(avatarEmbeded);
      }
      else {
        message.reply('No user in server')
      }
    }
    else {
      message.repy('You didn\t specify a user to kick. !help for command help');
    }
  }
}