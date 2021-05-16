module.exports = {
  name: 'ban',
  description: 'ban given user from server',
  usage: '!ban <user>',
  args: true,
  execute(message, args) {
    const user = message.mentions.users.first();
    if (message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('BAN_MEMBERS')) {
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .ban()
            .then(() => {
              message.reply(`Banned user: ${user.tag}`);
            })
            .catch(err =>{
              message.reply('Error banning user');
              console.log(err);
            })
        } else {
          message.reply('User not found in server');
        } 
      } else {
        message.reply('You didn\'t specify a user to ban. Type !help for command help');
      }
    }
  }
}