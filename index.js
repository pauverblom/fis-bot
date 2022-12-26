const Discord = require('discord.js');
const client = new Discord.Client();
var accents = require('remove-accents');
require("dotenv").config();

client.on('ready', () => {
  console.log(`Logged in...`);
});

client.on('message', message => {
  
  let mensaje = accents.remove(message.content.toLowerCase());
    
  if (message.author.id === client.user.id) return; //ignorar mensajes propios

  if (message.content.toLowerCase().endsWith('que'))
  {
    message.channel.send("so");
  }
  if (message.content.toLowerCase() === "!examen termo")
  {
    let dia_examenes = new Date("01/16/2023");
    let tiempo_hasta_examenes = TiempoHasta(dia_examenes);

    var dias = tiempo_hasta_examenes / 86400000;
    var horas = (dias - Math.floor(dias)) * 24;
    var minutos = (horas - Math.floor(horas)) * 60;
    var segundos = (minutos - Math.floor(minutos)) * 60;

    message.reply(`quedan ${Math.floor(dias)} días, ${Math.floor(horas)} horas, ${Math.floor(minutos)} minutos y ${Math.floor(segundos)} segundos para que 🍎 haga de las suyas`);
  }
  if (mensaje === "!examen mecanica" || mensaje === "!examen mec")
  {
    let dia_examenes = new Date("01/11/2023");
    let tiempo_hasta_examenes = TiempoHasta(dia_examenes);

    var dias = tiempo_hasta_examenes / 86400000;
    var horas = (dias - Math.floor(dias)) * 24;
    var minutos = (horas - Math.floor(horas)) * 60;
    var segundos = (minutos - Math.floor(minutos)) * 60;

    message.reply(`quedan ${Math.floor(dias)} días, ${Math.floor(horas)} horas, ${Math.floor(minutos)} minutos y ${Math.floor(segundos)} segundos para que PacoBell nos abra en canal`);
  }
  if (message.content.toLowerCase() === "!examen men")
  {
    let dia_examenes = new Date("01/20/2023");
    let tiempo_hasta_examenes = TiempoHasta(dia_examenes);

    var dias = tiempo_hasta_examenes / 86400000;
    var horas = (dias - Math.floor(dias)) * 24;
    var minutos = (horas - Math.floor(horas)) * 60;
    var segundos = (minutos - Math.floor(minutos)) * 60;

    message.reply(`quedan ${Math.floor(dias)} días, ${Math.floor(horas)} horas, ${Math.floor(minutos)} minutos y ${Math.floor(segundos)} segundos para que felicísimo nos deje tristísimos`);
  }
  if (message.content.toLowerCase() === "!examen métodos" || message.content.toLowerCase() === "!examen metodos" || message.content.toLowerCase() === "!examen metodos matematicos" || message.content.toLowerCase() === "!examen métodos matemáticos")
  {
    let dia_examenes = new Date("01/26/2023");
    let tiempo_hasta_examenes = TiempoHasta(dia_examenes);

    var dias = tiempo_hasta_examenes / 86400000;
    var horas = (dias - Math.floor(dias)) * 24;
    var minutos = (horas - Math.floor(horas)) * 60;
    var segundos = (minutos - Math.floor(minutos)) * 60;

    message.reply(`quedan ${Math.floor(dias)} días, ${Math.floor(horas)} horas, ${Math.floor(minutos)} minutos y ${Math.floor(segundos)} segundos paraa que 🐮 acabe con nosotros`);
  }
 
});

client.login(process.env.TOKEN);

function TiempoHasta(dia_examenes) {
    var hoy = new Date();
    var fecha = hoy.getFullYear()+'-'+(hoy.getMonth()+1)+'-'+hoy.getDate();
    let tiempo_hasta_examenes = (dia_examenes.getTime() - hoy.getTime());
    return tiempo_hasta_examenes;
}
