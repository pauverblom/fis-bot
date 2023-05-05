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
  if (mensaje === "!examen atmo" || mensaje === "!examen atmosfera" || mensaje === "!examen fisica de la atmosfera" || mensaje === "!examen fisica atmosfera" || mensaje === "!examen fis atm")
  {
    let dia_examenes = new Date("2023-05-26T09:00:00.000+02:00");
    let tiempo_hasta_examenes = TiempoHasta(dia_examenes);

    var dias = tiempo_hasta_examenes / 86400000;
    var horas = (dias - Math.floor(dias)) * 24;
    var minutos = (horas - Math.floor(horas)) * 60;
    var segundos = (minutos - Math.floor(minutos)) * 60;

    message.reply(`quedan ${Math.floor(dias)} días, ${Math.floor(horas)} horas, ${Math.floor(minutos)} minutos y ${Math.floor(segundos)} segundos para que la meteomami nos destroce 🥵⛈️`);
  }
  if (mensaje === "!examen mecanica" || mensaje === "!examen mec" || mensaje === "!examen mecanica ii" || mensaje === "!examen mec ii" || mensaje === "!examen mecanica 2" || mensaje === "!examen mec 2" )
  {
    let dia_examenes = new Date("2023-06-08T09:00:00.000+02:00");
    let tiempo_hasta_examenes = TiempoHasta(dia_examenes);

    var dias = tiempo_hasta_examenes / 86400000;
    var horas = (dias - Math.floor(dias)) * 24;
    var minutos = (horas - Math.floor(horas)) * 60;
    var segundos = (minutos - Math.floor(minutos)) * 60;

    message.reply(`quedan ${Math.floor(dias)} días, ${Math.floor(horas)} horas, ${Math.floor(minutos)} minutos y ${Math.floor(segundos)} segundos para Jacob nos meta un hostión a v = c`);
  }
  if (mensaje === "!examen oyo" || mensaje === "!examen ondas" || mensaje === "examen oscilaciones" || mensaje === "!examen oscilaciones y ondas" || mensaje === "!examen owo")
  {
    let dia_examenes = new Date("2023-06-05T15:00:00.000+02:00");
    let tiempo_hasta_examenes = TiempoHasta(dia_examenes);

    var dias = tiempo_hasta_examenes / 86400000;
    var horas = (dias - Math.floor(dias)) * 24;
    var minutos = (horas - Math.floor(horas)) * 60;
    var segundos = (minutos - Math.floor(minutos)) * 60;

    message.reply(`quedan ${Math.floor(dias)} días, ${Math.floor(horas)} horas, ${Math.floor(minutos)} minutos y ${Math.floor(segundos)} segundos para que Llago nos meta el tensor de deformaciones a presión por el recto anal.`);
  }
  if (mensaje === "!examen metodos" || mensaje === "!examen metodos matematicos" || mensaje === "!examen met" || mensaje === "!examen met mat" || mensaje === "!examen metodos ii" || mensaje === "!examen metodos matematicos ii" || mensaje === "!examen met ii" || mensaje === "!examen met mat ii" || mensaje === "!examen metodos 2" || mensaje === "!examen metodos matematicos 2" || mensaje === "!examen met 2" || mensaje === "!examen met mat 2")
  {
    let dia_examenes = new Date("2023-06-01T09:00:00.000+02:00");
    let tiempo_hasta_examenes = TiempoHasta(dia_examenes);

    var dias = tiempo_hasta_examenes / 86400000;
    var horas = (dias - Math.floor(dias)) * 24;
    var minutos = (horas - Math.floor(horas)) * 60;
    var segundos = (minutos - Math.floor(minutos)) * 60;

    message.reply(`quedan ${Math.floor(dias)} días, ${Math.floor(horas)} horas, ${Math.floor(minutos)} minutos y ${Math.floor(segundos)} segundos para que Martín Martín nos vuele el culo.`);
  }
  if (mensaje === "testeando")
  {
    let dia_examenes = new Date("2023-05-05T17:20:00.000+02:00");
    let tiempo_hasta_examenes = TiempoHasta(dia_examenes);

    var dias = tiempo_hasta_examenes / 86400000;
    var horas = (dias - Math.floor(dias)) * 24;
    var minutos = (horas - Math.floor(horas)) * 60;
    var segundos = (minutos - Math.floor(minutos)) * 60;

    message.reply(`quedan ${Math.floor(dias)} días, ${Math.floor(horas)} horas, ${Math.floor(minutos)} minutos y ${Math.floor(segundos)} segundos para test`);
  }
 
});

client.login(process.env.TOKEN);

function TiempoHasta(dia_examenes) {
    var hoy = new Date();
    var fecha = hoy.getFullYear()+'-'+(hoy.getMonth()+1)+'-'+hoy.getDate();
    let tiempo_hasta_examenes = (dia_examenes.getTime() - hoy.getTime());
    return tiempo_hasta_examenes;
}
