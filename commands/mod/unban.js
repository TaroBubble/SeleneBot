module.exports = {
  name: 'unban',
  description: 'unban user',
  usage: '!unban <userID>: Unbans user',
  args: true,
  execute(message, args) {
    const guildMemberID = args[0];
    if (message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('BAN_USERS')) {
      
    } 
  }
}