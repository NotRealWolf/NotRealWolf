module.exports = {
    name: 'clear',
    description: "Clears messages!",
    async execute(message, args) {
        if(!args[0]) return message.reply("Please enter the amount of messages that you want to be deleted.");
        if(isNaN(args[0])) return message.reply("Please enter an number.");

        if (args[0] > 1000) return message.reply("Sorry but you can not remove more than 1000 messages.");
        if(args[0] < 1) return message.reply("Sorry but you must delete at least 1 message.");

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
        message.channel.bulkDelete(messages)
        })
    }
}