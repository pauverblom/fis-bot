/*
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const prefix = '!';
require("dotenv").config();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'si') {
    await interaction.reply('si?');
  }
});

client.login(process.env.TOKEN)
*/

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in...`);
});

client.on('message', msg => {
  msg.reply('pong');
});

client.login(process.env.TOKEN);
