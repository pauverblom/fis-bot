const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in...`);
});

client.on('message', message => {

  if (message.author.id === client.user.id) return; //ignorar mensajes propios

  if (message.content.toLowerCase() == '!si')
  {
     message.reply('\nsi\nsi\nsi\nsi\nsi\nsi\nsi\nsi\nsi\nsi\n');
  }

  if (message.content.toLowerCase().endsWith('que'))
  {
    message.edit(message.content + "so");
  }

  if (message.content.toLowerCase() == ":yes:")
  {
    message.reply(":yes:")
  }
});


client.login(process.env.TOKEN);
