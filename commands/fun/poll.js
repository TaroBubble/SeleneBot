const Discord = require('discord.js');

module.exports = {
  name: 'poll',
  usage: '!poll <question>',
  args: true,
  execute: async(message, args) => {
    if (!args.length) {
      return message.reply('No arguments provided.');
    }
    let pollEmbed = new Discord.MessageEmbed()
      .setColor('#5cddbf')
      .setTitle(args.join(' '))
    
    let pollRes = await message.channel.send(pollEmbed);
    await pollRes.react('👍')
      .then(() => pollRes.react('👎'))
      .catch(err => {
        console.log(err);
        message.reply('Error with message reaction');
      })
    
    setTimeout(function() {
      const reactions = pollRes.reactions.cache;
      const thumbsUp = reactions.get('👍').count;
      const thumbsDown = reactions.get('👎').count;
      return thumbsUp > thumbsDown ? message.channel.send('People are for it!') : message.channel.send('People are against it!');
    }, 600000);
    
  }
}