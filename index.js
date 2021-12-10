const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in...`);
});

client.on('message', message => {
  if (message.content.toLowercase() == '!si')
  {
     message.reply('si\nsi\nsi\nsi\nsi\nsi\nsi\nsi\nsi\nsi\n');
  }
});

client.login(process.env.TOKEN);
