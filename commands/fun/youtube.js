const Discord = require('discord.js');
const search = require('youtube-search');
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

    let result = await search(query, options).catch(err => console.log(err));
    if (result) {
      let youtubeList = result.results;
      let i = 0;
      let songTitle = youtubeList.map(result => {
        i++;
        return i+'. '+ result.title;
      })
      message.channel.send({
        embed: {
          title: 'Select a video',
          description: songTitle.join('\n')
        }
      }).catch(err => console.log(err));
      
      const filter = m => (m.author.id === message.author.id) && m.content >= 1 && m.content <= youtubeList.length;

      let number = await message.channel.awaitMessages(filter, {max: 1});
      let choice = youtubeList[number.first().content - 1];

      embed = new Discord.MessageEmbed()
        .setTitle(choice.title)
        .setColor('#5cddbf')
        .setURL(choice.link)
        .setDescription(choice.description)
        .setThumbnail(choice.thumbnails.default.url)
      
      message.channel.send(embed).catch(err => console.log(err));
    }
    
  }
}