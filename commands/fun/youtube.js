const Discord = require('discord.js');
const search = require('youtube-search');
const queryString = require('querystring');
const { config } = require('dotenv');
const options = {
  maxResults: 5,
  key: process.env.YOUTUBE_API,
  type: 'video'
}
module.exports = {
  name: 'youtube',
  usage: '!youtube <search term>',
  args: true,
  execute: async(message, args) => {
    if (!args.length) {
      return message.reply('No argument provided!');
    }
    let query = args.join(' ');
    let embed = new Discord.MessageEmbed()
      .setColor('#5cddbf')
      .setTitle('Youtube Search')
      .setDescription('Enter a search');
    message.channel.send(embed);
    message.channel.send(query);

    search(query, options, function(err, results) {
      if (err) return console.log
      console.dir(results);
    })
  }
}