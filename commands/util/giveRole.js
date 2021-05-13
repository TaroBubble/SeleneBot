module.exports = {
  name: 'giverole',
  description: 'Gives user and role',
  args: true,
  usage: '<user> <role>',
  execute(message, args) {
    message.channel.send('Test');
  },
};