module.exports = {
  name: 'spoiler',
  description: 'spoiler message',
  usage: '<term>',
  args: true,
  execute(message, args) {
    message.delete({ timeout: 1000 });
    let term = args.join(' ');
    message.channel.send(`|| ${term} ||`);
  }
}