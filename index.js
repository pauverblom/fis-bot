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
    
  class examen {
    constructor(nombre, fecha) {
     this.nombre = nombre;
     this.fecha = fecha;
    }
  };
  //const prueba = new examen('Física de la atmósfera 2ª convocatoria', new Date("2023-06-19:T15:00:00.000+02:00"));
  const examenes = [
    new examen('Física de la atmósfera 2ª convocatoria',   new Date("2023-06-19T15:00:00.000+02:00")),
    new examen('Termodinámica 2ª convocatoria',            new Date("2023-06-13T09:00:00.000+02:00")),
    new examen('Oscilaciones y ondas 2ª convocatoria',     new Date("2023-06-26T15:00:00.000+02:00")),
    new examen('Métodos Matemáticos II 2ª convocatoria',   new Date("2023-06-27T15:00:00.000+02:00")),
    new examen('Mecánica II 2ª convocatoria',              new Date("2023-06-29T15:00:00.000+02:00"))
  ];
 
  if (mensaje === "!examenes")
  {
    let respuesta = '';
    for (let i = 0; i < examenes.length ; i++)
    { 
      let totalmilis = TiempoHasta(examenes[i].fecha)
      let dias = Math.floor(totalmilis / 86400000);
      let horas = Math.floor((dias - Math.floor(dias)) * 24);
      let minutos = Math.floor((horas - Math.floor(horas)) * 60);
      let segundos = Math.floor((minutos - Math.floor(minutos)) * 60);
      
      respuesta = respuesta + '\n' + examenes[i].nombre + ': ' + dias + 'D ' + horas + 'h ' + minutos + 'min ' + segundos + 's.';
      //dias[i] = tiempo_hasta_examenes[i] / 86400000;
      //horas[i] = (dias[i] - Math.floor(dias[i])) * 24;
      //minutos[i] = (horas[i] - Math.floor(horas[i])) * 60;
      //segundos[i] = (minutos[i] - Math.floor(minutos[i])) * 60;
    }
    
    //message.reply(`
    //${Math.floor(dias[0])} D, ${Math.floor(horas[0])} h, ${Math.floor(minutos[0])} min y ${Math.floor(segundos[0])} s -> Física de la Atmósfera. 
    //${Math.floor(dias[1])} D, ${Math.floor(horas[1])} h, ${Math.floor(minutos[1])} min y ${Math.floor(segundos[1])} s -> Métodos Matemáticos II.
    //${Math.floor(dias[2])} D, ${Math.floor(horas[2])} h, ${Math.floor(minutos[2])} min y ${Math.floor(segundos[2])} s -> Oscilaciones y Ondas.
    //${Math.floor(dias[3])} D, ${Math.floor(horas[3])} h, ${Math.floor(minutos[3])} min y ${Math.floor(segundos[3])} s -> Mecánica II.
    //`);
    message.reply(respuesta);
  } //Podría hacer todo esto con un struct y sería más fácil pero soy masoca
});

client.login(process.env.TOKEN);

function TiempoHasta(dia_examenes) {
    var hoy = new Date();
    var fecha = hoy.getFullYear()+'-'+(hoy.getMonth()+1)+'-'+hoy.getDate();
    let tiempo_hasta_examenes = (dia_examenes.getTime() - hoy.getTime());
    return tiempo_hasta_examenes;
}
