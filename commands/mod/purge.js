module.exports = {
  name: "purge",
  description: "delete messages",
  usage: "<amount>",
  args: true,
  execute(message, args) {
    if (!args.length) {
      return message.reply("No specified amount. Type !help for more info");
    }
    const deleteAmount = parseInt(args[0], 10);
    if (message.member.hasPermission("ADMINISTRATOR")) {
      if (deleteAmount >= 1 && deleteAmount <= 25) {
        message.channel
          .bulkDelete(deleteAmount + 1)
          .then((messages) => {
            message.channel.send(`Purged ${messages.size} messages.`);
          })
          .catch((error) => {
            console.log(error);
            message.reply("Error in purge command");
          });
      } else {
        return message.reply("Purge count must be between 1-25 inclusive");
      }
    }
  },
};
