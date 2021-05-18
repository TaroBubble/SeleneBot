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
      .then(response => response.json());

    if (!result) {
      return message.reply(`No results found for word ${term}`);
    }

    let randIndex = Math.floor(Math.random() * result.results.length);
    console.log(result.results[randIndex].media[0]);
    console.log(result.results[randIndex].media[0].tinygif.url);
    let gifRes = result.results[randIndex].media[0].tinygif.url;
    
    try {
      const embedGif = new Discord.MessageEmbed()
        .setColor('#5cddbf')
        .setTitle(term)
        .setURL(gifRes)
        .setImage(gifRes);
      message.channel.send(embedGif);
    } catch(error) {
      console.log(error);
      message.channel.send('Error in gif embed');
    }
  }
}