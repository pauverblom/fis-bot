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
  if (mensaje === "!todo")
  {
    let dias_examenes = [];
    let dias = [];
    let minutos = [];
    let segundos = [];
    
    dias_examenes[0] = new Date("2023-05-26T09:00:00.000+02:00");
    dias_examenes[1] = new Date("2023-06-01T09:00:00.000+02:00");
    dias_examenes[2] = new Date("2023-06-05T15:00:00.000+02:00");
    dias_examenes[3] = new Date("2023-06-08T09:00:00.000+02:00");
    
    let tiempo_hasta_examenes = [];
    for (let i = 0; i < 4 ; i++)
    { 
      tiempo_hasta_examenes[i] = TiempoHasta(dias_examenes[i]);
      dias[i] = tiempo_hasta_examenes[i] / 86400000;
      horas[i] = (dias[i] - Math.floor(dias[i])) * 24;
      minutos[i] = (horas[i] - Math.floor(horas[i])) * 60;
      segundos[i] = (minutos[i] - Math.floor(minutos[i])) * 60;
    }
    
    message.reply(`quedan ${Math.floor(dias[0])} días, ${Math.floor(horas[0])} horas, ${Math.floor(minutos[0])} minutos y ${Math.floor(segundos[0])} segundos para el examen de Física de la Atmósfera.`);
    message.reply(`quedan ${Math.floor(dias[1])} días, ${Math.floor(horas[1])} horas, ${Math.floor(minutos[1])} minutos y ${Math.floor(segundos[1])} segundos para el examen de Métodos Matemáticos II`);
    message.reply(`quedan ${Math.floor(dias[2])} días, ${Math.floor(horas[2])} horas, ${Math.floor(minutos[2])} minutos y ${Math.floor(segundos[2])} segundos para el examen de Oscilaciones y Ondas`);
    message.reply(`quedan ${Math.floor(dias[3])} días, ${Math.floor(horas[3])} horas, ${Math.floor(minutos[3])} minutos y ${Math.floor(segundos[3])} segundos para el examen de Mecánica II`);
  } //Podría hacer todo esto con un struct y sería más fácil pero soy masoca
});

client.login(process.env.TOKEN);

function TiempoHasta(dia_examenes) {
    var hoy = new Date();
    var fecha = hoy.getFullYear()+'-'+(hoy.getMonth()+1)+'-'+hoy.getDate();
    let tiempo_hasta_examenes = (dia_examenes.getTime() - hoy.getTime());
    return tiempo_hasta_examenes;
}
