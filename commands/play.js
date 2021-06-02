module.exports = {
    name: "play",
    description: "Play a song from YouTube",

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send("please join a voice channel first!");

        let search = args.join(" ");

        if (!search) return message.channel.send('Please provide a search query');

        client.player.play(message, search)
    }
}