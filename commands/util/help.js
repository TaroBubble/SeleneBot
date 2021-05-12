module.exports = {
  name: 'help',
  description: 'A list of commands',
  args: false,
  execute(message) {
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
    `);
  },
};