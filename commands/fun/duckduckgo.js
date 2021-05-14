const Discord = require('discord.js');
const fetch = require('node-fetch');
const queryString = require('querystring');
module.exports = {
  name: 'duckduckgo',
  usage: 'get first image result from duckduckgo',
  args: true,
  execute: async(message, args) => {
    if (!args.length) {
      return message.channel.send('No args specified');
    }

    const query = queryString.stringify({term: args.join(' ')});
    const {picList} = await fetch(`https://duckduckgo.com/?q=${query}&t=hc&va=u&iax=images&ia=images`)
      .then(response => response.text());
    console.log(picList);
    if (!picList) {
      return message.reply('No result found');
    }
  }
}