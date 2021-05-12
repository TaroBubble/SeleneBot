module.exports = {
  name: 'argsError',
  description: 'Info on the arguments of command',
  args: true,
  execute(message, args) {
    if (args[0] === 'foo') {
      return message.channel.send('bar');
    }

    message.channel.send(`Arguments: ${args}\nArgument leng: ${args.length}`);
  }
}