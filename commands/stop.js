const { execute } = require("./help");

module.exports = {
    name: "stop",
    description: "leaves vc",

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send("Please join a voice channel to play music!");

        client.player.stop(message);
    }
}