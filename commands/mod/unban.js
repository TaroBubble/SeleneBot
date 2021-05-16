module.exports = {
  name: 'unban',
  description: 'unban user',
  usage: '!unban <userID>',
  args: true,
  execute(message, args) {
    const memberID = args[0];
    if (message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('BAN_USERS')) {
      if (!memberID) {
        message.channel.send('Enter a valid user id');
      }
      try {
        message.guild.members.unban(memberID);
        message.channel.send(`Unbanned ${memberID}`);
      } catch(err) {
        console.log(err);
        message.channel.send('Error unbanning');
      }
    } 
  }
}