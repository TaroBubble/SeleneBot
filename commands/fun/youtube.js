const Discord = require('discord.js');
const fetch = require('node-fetch');
const queryString = require('querystring');
module.exports = {
  name: 'youtube',
  usage: 'links first youtube link',
  args: true,
  execute: async(message, args) => {
    if (!args.length) {
      return message.reply('No argument provided!');
    }

    const query = queryString.stringify({term: args.join(' ')});
    
  }
}