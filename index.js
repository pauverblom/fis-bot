const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const prefix = '!';
require("dotenv").config();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", message => {
  if (message.content === "!si") 
  {
    message.reply("si");
  }
})

client.login(process.env.TOKEN)
