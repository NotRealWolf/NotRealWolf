module.exports = {
    name: "help",
    description: "Where you can find ALL the commands for the server",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#000000')
            .setTitle('Help Page')
            .setDescription('This is where you can find all the server commands')
            .addFields(
                { name: '!dhelp', value: '`Main Help Page!`' },
                { name: '!dping', value: '`PONG!`' }
            )
            .setFooter('© Copyright 2021 Dilligassp');

        message.channel.send(newEmbed);
    }
}