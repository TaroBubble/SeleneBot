module.exports = {
  name: 'help',
  description: 'A list of commands',
  usage: '!help or !help <command name>',
  args: false,
  execute(message, args) {
    const data = [];
    const { commands } = message.client;
    const { usage }
    console.log(commands);

    if (!args.length) {
      data.push('List of Commands: ');
      data.push(commands.map(command => '!'+command.name+ ' '+command.usage).join('\n'));
      data.push(`\nYou can type !help <command> for more usage information`);

      return message.reply(data, { split: true })
        .then(() => {
          message.reply('Sent list of commands');
        })
        .catch(error => {
          console.log(error);
          message.channel.send('Error in command');
        });
    } else {
      const commandObject = commands.get(args[0]);
      data.push(commandObject.name+' '+commandObject.usage);
      return message.reply(data, {split: true})
        .then(() => {
          message.reply('Sent Command Info');
        })
        .catch(err => {
          console.log(err);
          message.channel.send('Error in command');
        })
    } 
  },
};