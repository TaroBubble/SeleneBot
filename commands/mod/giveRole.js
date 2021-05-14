module.exports = {
  name: 'giverole',
  description: 'Gives user and role',
  args: true,
  usage: '<user> <role>',
  execute(message, args) {
    const user = message.mentions.users.first();
    const role = message.guild.roles.cache.find(role => role.name == args[1]);
    if (message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('MANAGE_ROLES') || message.member.hasPermission('MANAGE_GUILD')) {
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.roles.add(role);
        } else {
          return message.channel.send('User isn\'t in server');
        }
      } else {
        return message.channel.send('You didn\'t specify a user to kick. Type !help for command help');
      }
    } else {
      return message.channel.send('You do not have permission to give roles');
    }
  },
};