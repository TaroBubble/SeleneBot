module.exports = {
  name: 'kick',
  description: 'Kick user',
  execute(message, args) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
        .kick()
        .then(() => {
          message.reply(`Kicked user ${user.tag}`);
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
      message.reply('You didn\t specify a user to kick. !help for command help');
    }
  },
};