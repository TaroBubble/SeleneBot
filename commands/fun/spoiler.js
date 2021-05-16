module.exports = {
  name: 'spoiler',
  description: 'spoiler message',
  usage: '!spoiler <term>',
  args: false,
  execute(message) {
    message.channel.send(`|| you have nothing better to do huh ||`);
  }
}