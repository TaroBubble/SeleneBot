module.exports = {
  name: 'ping',
  description: 'Command to see latency',
  usage: '!ping',
  args: false,
  execute(message, args) {
    message.channel.send('Calculating Ping').then ((msg) => {
      const ping = msg.createdTimestamp - message.createdTimestamp;
      msg.edit(`🏓Your ping is ${ping}ms`);
    });
  },
};