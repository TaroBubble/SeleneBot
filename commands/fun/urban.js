const Discord = require('discord.js');
const fetch = require('node-fetch')
const queryString = require('querystring');
const trim = (str, max) => str.length > max ? `${str.slice(0, max - 3)}...` : str;
module.exports = {
  name: 'urban',
  description: 'urban dictionary',
  usage: 'search word in urban dictionary',
  args: true,
  execute: async(message, args) => {
    if (!args.length) {
      return message.reply('No word is provided!');
    }
    
    const query = queryString.stringify({term: args.join(' ')});
    const {list} = await fetch(`https://api.urbandictionary.com/v0/define?${query}`)
      .then(response => response.json());
    
    if (!list) {
      return message.reply(`No results found for word ${query}`);
    }

    const [answer] = list;
    const embedUrban = new Discord.MessageEmbed()
      .setColor('#5cddbf')
      .setTitle(answer.word)
      .setURL(answer.permalink)
      .addField(
        {name: 'Definition', value: trim(answer.definition, 1024)},
        {name: 'Example', value: trim(answer.example, 1024)},
        {name: 'Rating', value: `${answer.thumbs_up} 👍. ${answer.thumbs_down} 👎 `},
      );
    
      message.reply(embedUrban);
  }
}