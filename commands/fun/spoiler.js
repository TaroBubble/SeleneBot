module.exports = {
  name: 'spoiler',
  description: 'spoiler message',
  args: false,
  execute(message) {
    message.channel.send(`|| you have nothing better to do huh ||`);
  }
}