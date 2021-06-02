module.exports = {
    name: "stop",
    description: "Stops the queue",

    async run(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send("please join a voice channel first!");

        client.player.skip(message);
    }
}