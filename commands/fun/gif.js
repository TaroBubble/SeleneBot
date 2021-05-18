const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'gif',
  usage: '!gif <term>',
  args: true,
  execute: async(message, args) => {
    if (!args.length) {
      return message.reply('No argument provided');
    }
    const term = args.join(' ');
    const url = `https://g.tenor.com/v1/search?q=${term}&key=LIVDSRZULELA&limit=5`;

    const result = await fetch(url)
    const response = await result.json();

    if (!result) {
      return message.reply(`No results found for word ${term}`);
    }

    let randIndex = Math.floor(Math.random() * result.length);
    console.log(response);
    console.log(typeof(response));
    console.log(response.results.length);
    console.log(response.results[0]);
    /*
    try {
      const embedGif = new Discord.MessageEmbed()
        .setColor('#5cddbf')
        .setTitle(term)
        .setURL
    }*/
  }
}