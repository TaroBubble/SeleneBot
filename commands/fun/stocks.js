module.exports = {
  name: 'stocks',
  description: 'Get stock info given the stock sign',
  usage: '!stocks <stock sign>',
  args: true,
  execute: async(message, args) => {
    const fetch = require('node-fetch');
    const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
    message.channel.send(file);
  }
}