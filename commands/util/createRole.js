module.exports = {
  name: 'createrole',
  description: 'create a given role with color',
  usage: '<roleName> <roleColor>',
  args: true,
  execute(message, args) {
    const guild = message.guild;
    if (message.member.hasPermission('ADMINISTRATOR')) {
      message.channel.send('You are an admin');
      guild.roles.create({
        data: {
          name: `${args[0]}`,
          color: `${args[1]}`,
        },
      })
        .then(console.log)
        .catch(console.error);
    } else {
      return message.channel.send('You do not have permission for role creation');
    }
  }
};