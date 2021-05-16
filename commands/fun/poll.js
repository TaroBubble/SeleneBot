module.exports = {
  name: 'poll',
  usage: '!poll <question>',
  args: true,
  execute: async(message, args) => {
    if (!args.length) {
      return message.reply('No arguments provided.');
    }
    const pollMsg = await message.channel.send(args.join(' '));
    await pollMsg.react('👍')
      .then(() => pollMsg.react('👎'))
      .catch(err => {
        console.log(err);
        message.reply('Error with message reaction');
      })
    const reactions = pollMsg.reactions.cache;

    return (reactions.get('👍') > reactions.get('👎') ? message.reply('The people are for it') : message.reply('The people are against it'));
    
  }
}