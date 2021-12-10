const Discord = require('discord.js');
const client = new Discord.Client();
require("dotenv").config();

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
    message.channel.send("so");
  }

  if (message.content.toLowerCase() == "<:yes:918940374221881356>")
  {
    message.channel.send("<:yes:918940374221881356>")
  }

  if (message.content.toLowerCase() === "!examen química")
  {
    var hoy = new Date();
    var fecha = hoy.getFullYear()+'-'+(hoy.getMonth()+1)+'-'+hoy.getDate();
    var dia_examenes = new Date("01/13/2022");
    var tiempo_hasta_examenes = (dia_examenes.getTime() - hoy.getTime());

    var dias = tiempo_hasta_examenes / 86400000;
    var horas = (dias - Math.floor(dias)) * 24;
    var minutos = (horas - Math.floor(horas)) * 60;
    var segundos = (minutos - Math.floor(minutos)) * 60;

    message.reply(`quedan ${Math.floor(dias)} días, ${Math.floor(horas)} horas, ${Math.floor(minutos)} minutos y ${Math.floor(segundos)} segundos hasta tu cita con Modesto 😳`);
  }
  if (message.content.toLowerCase() === "!examen física")
  {
    var hoy = new Date();
    var fecha = hoy.getFullYear()+'-'+(hoy.getMonth()+1)+'-'+hoy.getDate();
    var dia_examenes = new Date("01/20/2022");
    var tiempo_hasta_examenes = (dia_examenes.getTime() - hoy.getTime());

    var dias = tiempo_hasta_examenes / 86400000;
    var horas = (dias - Math.floor(dias)) * 24;
    var minutos = (horas - Math.floor(horas)) * 60;
    var segundos = (minutos - Math.floor(minutos)) * 60;

    message.reply(`quedan ${Math.floor(dias)} días, ${Math.floor(horas)} horas, ${Math.floor(minutos)} minutos y ${Math.floor(segundos)} segundos hasta que Chantal y yo te destrocemos el culo 😎`);
  }
  if (message.content.toLowerCase() === "!examen álgebra")
  {
    var hoy = new Date();
    var fecha = hoy.getFullYear()+'-'+(hoy.getMonth()+1)+'-'+hoy.getDate();
    var dia_examenes = new Date("01/28/2022");
    var tiempo_hasta_examenes = (dia_examenes.getTime() - hoy.getTime());

    var dias = tiempo_hasta_examenes / 86400000;
    var horas = (dias - Math.floor(dias)) * 24;
    var minutos = (horas - Math.floor(horas)) * 60;
    var segundos = (minutos - Math.floor(minutos)) * 60;

    message.reply(`quedan ${Math.floor(dias)} días, ${Math.floor(horas)} horas, ${Math.floor(minutos)} minutos y ${Math.floor(segundos)} segundos hasta que Susana deje de caerte bien 😔`);
  }
  if (message.content.toLowerCase() === "!examen informática")
  {
    var hoy = new Date();
    var fecha = hoy.getFullYear()+'-'+(hoy.getMonth()+1)+'-'+hoy.getDate();
    var dia_examenes = new Date("01/17/2022");
    var tiempo_hasta_examenes = (dia_examenes.getTime() - hoy.getTime());

    var dias = tiempo_hasta_examenes / 86400000;
    var horas = (dias - Math.floor(dias)) * 24;
    var minutos = (horas - Math.floor(horas)) * 60;
    var segundos = (minutos - Math.floor(minutos)) * 60;

    message.reply(`quedan ${Math.floor(dias)} días, ${Math.floor(horas)} horas, ${Math.floor(minutos)} minutos y ${Math.floor(segundos)} segundos hasta que Ariadna te haga un bonito examen con ficheros 🥵`);
  }
  if (message.content.toLowerCase() === "!examen cálculo")
  {
    var hoy = new Date();
    var fecha = hoy.getFullYear()+'-'+(hoy.getMonth()+1)+'-'+hoy.getDate();
    var dia_examenes = new Date("01/24/2022");
    var tiempo_hasta_examenes = (dia_examenes.getTime() - hoy.getTime());

    var dias = tiempo_hasta_examenes / 86400000;
    var horas = (dias - Math.floor(dias)) * 24;
    var minutos = (horas - Math.floor(horas)) * 60;
    var segundos = (minutos - Math.floor(minutos)) * 60;

    message.reply(`quedan ${Math.floor(dias)} días, ${Math.floor(horas)} horas, ${Math.floor(minutos)} minutos y ${Math.floor(segundos)} segundos hasta sino di ecsssss 🇧🇷`);
  }
});


client.login(process.env.TOKEN);
