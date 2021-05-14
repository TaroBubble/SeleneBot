module.exports = {
  name: 'removerole',
  definition: 'removes role from use',
  usage: '!removerole <user> <role>',
  args: true,
  execute(message, args) {
    const user = message.mentions.users.first();
    const roleToRemove = message.guild.roles.cache.find(role => role.name == args[1]);
    if (message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('MANAGE_ROLES') || message.member.hasPermission('MANAGE_GUILD')) {
      if (!roleToRemove) {
        return message.channel.send(`${args[1]} role does not exist`);
      }
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.roles.remove(roleToRemove);
        } else {
          return message.channel.send('User isn\'t in server');
        }
      } else {
        return message.channel.send('You didn\'t specify a user to kick. Type !help for command help');
      }
    } else {
      return message.channel.send('You do not have permission to remove roles');
    }
  },
};