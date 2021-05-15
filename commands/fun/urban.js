const Discord = require('discord.js');
const fetch = require('node-fetch');
const queryString = require('querystring');
const trim = (str, max) => str.length > max ? `${str.slice(0, max - 3)}...` : str;
module.exports = {
  name: 'urban',
  description: 'urban dictionary',
  usage: 'search word in urban dictionary',
  args: true,
  execute: async(message, args) => {
    if (!args.length) {
      return message.reply('No argument provided!');
    }
    
    const query = queryString.stringify({term: args.join(' ')});
    const {list} = await fetch(`https://api.urbandictionary.com/v0/define?${query}`)
      .then(response => response.json());
    
    if (!list) {
      return message.reply(`No results found for word ${query}`);
    }
    const [answer] = list;
    try {
      const embedUrban = new Discord.MessageEmbed()
      .setColor('#5cddbf')
      .setTitle(answer.word)
      .setURL(answer.permalink)
      .addFields(
        {name: 'Definition', value: trim(answer.definition, 1024)},
        {name: 'Rating', value: `${answer.thumbs_up} 👍  ${answer.thumbs_down} 👎 `},
      );
    
      message.channel.send(embedUrban);
    } catch(err) {
      console.log(err);
      message.channel.send('Error setting embed');
    }

  }
}