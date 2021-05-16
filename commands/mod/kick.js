module.exports = {
  name: 'kick',
  description: '!kick <user>',
  execute(message, args) {
    const user = message.mentions.users.first();
    if (message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('KICK_MEMBERS')) {
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
          .kick()
          .then(() => {
            message.reply(`Kicked user: ${user.tag}`);
          })
          .catch(err => {
            message.reply(`Error kicking user`);
            console.error(err);
          })
        }
        else {
          message.reply('User isn\'t in server');
        }
      }
      else {
        message.reply('You didn\'t specify a user to kick. Type !help for command help');
      } 
    } else {
      message.channel.send('You do not have permission to kick');
    }
  },
};