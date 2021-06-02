const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client();

client.commands = new Discord.Collection();

client.events = new Discord.Collection();

const fs = require('fs');

const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const commands = require(`./Commands/${file}`);

    client.commands.set(commands.name, commands);
}

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
    } else if (command == 'ping'){
        client.commands.get('ping').execute(client, message, args);
    } else if (command == 'play'){
        client.commands.get('play').execute(client, message, args);
    } else if (command == 'stop'){
        client.commands.get('stop').execute(client, message, args);
    } else if (command == 'skip'){
        client.commands.get('skip').execute(client, message, args);
    } else if (command == 'clear'){
        client.commands.get('clear').execute(message, args);
    } 
});

const distube = require('distube');

const player = new distube(client);

player.on('playSong', (message, queu, song) => {
    message.channel.send(`${song.name} has started playing!`)
})

client.player = player;

client.once('ready', () => {
    console.log('Dilligassp Bot Is Online!!!');
})

const prefix = process.env.Prefix;
client.login(process.env.Bot_Token);