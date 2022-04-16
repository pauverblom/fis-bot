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
  if (message.content.toLowerCase() === "!examen ife")
  {
    let dia_examenes = new Date("05/27/2022");
    let tiempo_hasta_examenes = TiempoHasta(dia_examenes);

    var dias = tiempo_hasta_examenes / 86400000;
    var horas = (dias - Math.floor(dias)) * 24;
    var minutos = (horas - Math.floor(horas)) * 60;
    var segundos = (minutos - Math.floor(minutos)) * 60;

    message.reply(`quedan ${Math.floor(dias)} días, ${Math.floor(horas)} horas, ${Math.floor(minutos)} minutos y ${Math.floor(segundos)} segundos hasta el examen de ife 🤢🤮`);
  }
  if (message.content.toLowerCase() === "!examen álgebra ii")
  {
    let dia_examenes = new Date("06/09/2022");
    let tiempo_hasta_examenes = TiempoHasta(dia_examenes);

    var dias = tiempo_hasta_examenes / 86400000;
    var horas = (dias - Math.floor(dias)) * 24;
    var minutos = (horas - Math.floor(horas)) * 60;
    var segundos = (minutos - Math.floor(minutos)) * 60;

    message.reply(`quedan ${Math.floor(dias)} días, ${Math.floor(horas)} horas, ${Math.floor(minutos)} minutos y ${Math.floor(segundos)} segundos para el examen. Qué coño es un tensor? 😵‍`);
  }
  if (message.content.toLowerCase() === "!examen física ii")
  {
    let dia_examenes = new Date("05/31/2022");
    let tiempo_hasta_examenes = TiempoHasta(dia_examenes);

    var dias = tiempo_hasta_examenes / 86400000;
    var horas = (dias - Math.floor(dias)) * 24;
    var minutos = (horas - Math.floor(horas)) * 60;
    var segundos = (minutos - Math.floor(minutos)) * 60;

    message.reply(`quedan ${Math.floor(dias)} días, ${Math.floor(horas)} horas, ${Math.floor(minutos)} minutos y ${Math.floor(segundos)} segundos hasta que Zuñiga te viole el ano con la ecuación de un oscilador forzado 🥵`);
  }
  if (message.content.toLowerCase() === "!examen física iii")
  {
    let dia_examenes = new Date("06/06/2022");
    let tiempo_hasta_examenes = TiempoHasta(dia_examenes);

    var dias = tiempo_hasta_examenes / 86400000;
    var horas = (dias - Math.floor(dias)) * 24;
    var minutos = (horas - Math.floor(horas)) * 60;
    var segundos = (minutos - Math.floor(minutos)) * 60;

    message.reply(`quedan ${Math.floor(dias)} días, ${Math.floor(horas)} horas, ${Math.floor(minutos)} minutos y ${Math.floor(segundos)} segundos hasta que Guirado te ponga a cuatro sobre la mesa 😵‍💫`);
  }
  if (message.content.toLowerCase() === "!examen cálculo ii")
  {
    let dia_examenes = new Date("05/24/2022");
    let tiempo_hasta_examenes = TiempoHasta(dia_examenes);

    var dias = tiempo_hasta_examenes / 86400000;
    var horas = (dias - Math.floor(dias)) * 24;
    var minutos = (horas - Math.floor(horas)) * 60;
    var segundos = (minutos - Math.floor(minutos)) * 60;

    message.reply(`quedan ${Math.floor(dias)} días, ${Math.floor(horas)} horas, ${Math.floor(minutos)} minutos y ${Math.floor(segundos)} segundos hasta que te pongamos una integral cuádruple con 17 diferenciales y 8 cambios de variable, para que la disfrutes 😋`);
  }
if (message.content.toLowerCase() === '!apruébame')
{
message.reply("Sabés lo que son los números negativos boludo? Pues así se quedará tu examen, si??");
}
 if (message.content.toLowerCase() === '!jijijija')
{
  message.channel.send('https://www.youtube.com/watch?v=d6s3iMsfPDo');
}
});

client.login(process.env.TOKEN);

function TiempoHasta(dia_examenes) {
    var hoy = new Date();
    var fecha = hoy.getFullYear()+'-'+(hoy.getMonth()+1)+'-'+hoy.getDate();
    let tiempo_hasta_examenes = (dia_examenes.getTime() - hoy.getTime());
    return tiempo_hasta_examenes;
}
