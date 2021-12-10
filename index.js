const Discord = require('discord.js');
const client = new Discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
const prefix = '!';
require("dotenv").config();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", message => {
  if (message.content === "!si") 
  {
    for (let i = 0; i < 10; i++)
    {
      message.reply("si");
    }
  }
})

client.login(process.env.TOKEN)
