module.exports = {
  name: 'help',
  description: 'A list of commands',
  usage: 'List of commands and how to use them',
  args: false,
  execute(message, args) {
    const data = [];
    const { commands } = message.client;

    if (!args.length) {
      data.push('List of Commands: ');
      data.push(commands.map(command => command.name).join('\n'));
      data.push(`\nYou can type !help <command> for more usage information`);

      return message.reply(data, { split: true })
        .then(() => {
          message.reply('Sent list of commands');
        })
        .catch(error => {
          console.log(error);
          message.channel.send('Error in command');
        });
    }
    /*
    const helpEmbed = {
      color: '#34ebba',
      title: 'Command List',
      description: 'List of commands',
      field: [
        {
          name: 'Moderation Commands', 
          value: `
            !kick <user>: Kicks user from server
            !role <role> <user>: 'Assigns role to user
          `,
          inline: true,
        },
        {
          name: 'Util Commands',
          value: `
            !help: List of commands
            !role <role> <user>: Assigns role to user
          `,
          inline: true,
        },
        {
          name: 'Fun Commands',
          value: `
            !avatar <user>: Shows user Avatar
            !ping: Shows latency
            !spoiler: Sends spoiler text
            !stocks <stockSign>: Gives stock information of stock
            !urban <phrase>: Gives urban dictionary definition  `,
          inline: true,
        },
      ],
      timestamp: new Date(),
    };
  
    message.channel.send({embed: helpEmbed}); 
    message.channel.send(` 
    **Mod Commands**
    => 1. !kick <user> => Kicks user from server
    **Util Commands**
    => 1. !help => List of commands 
    => 2. !role <role> <user> => Assigns <role> to <user>
    **Fun Commands**
    => 1. !ping => Current Ping to discord server
    => 2. !avatar <user> => Get <user>'s avatar
    => 3. !stocks <stockSign> => Get stock info
    => 4. !spoiler <message> => Creates spoiler on message
    `); */
  },
};