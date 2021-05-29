module.exports = {
  name: 'mv',
  usage: '<user>',
  args: true,
  execute(message, args) {
    let user = message.guild.member(message.mentions.users.first());
    if(!user) {
      return message.reply('No such user');
    } else {
      if(message.member.hasPermission('ADMINISTRATOR')) {
        try {
          user.voice.setMute(true);
        } catch (error) {
          console.log(error);
          return message.reply('Error Muting');
        }
      }
    }
  }
}