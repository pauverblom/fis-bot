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
        new examen('Física de la atmósfera 2ª convocatoria', new Date("2023-06-19T15:00:00.000+02:00")),
        new examen('Termodinámica 2ª convocatoria', new Date("2023-06-13T09:00:00.000+02:00")),
        new examen('Oscilaciones y ondas 2ª convocatoria', new Date("2023-06-26T15:00:00.000+02:00")),
        new examen('Métodos Matemáticos II 2ª convocatoria', new Date("2023-06-27T15:00:00.000+02:00")),
        new examen('Mecánica II 2ª convocatoria', new Date("2023-06-29T15:00:00.000+02:00"))
    ];

    if (mensaje === "!examenes") {
        let respuesta = '';
        for (let i = 0; i < examenes.length; i++) {
            let totalmilis = TiempoHasta(examenes[i].fecha)

            let dias = totalmilis / 86400000;
            let horas = (dias - Math.floor(dias)) * 24;
            let minutos = (horas - Math.floor(horas)) * 60;
            let segundos = (minutos - Math.floor(minutos)) * 60;

            let diasf = Math.floor(dias);
            let horasf = Math.floor(horas);
            let minutosf = Math.floor(minutos);
            let segundosf = Math.floor(segundos);
            respuesta = respuesta + '\n' + examenes[i].nombre + ': ' + diasf + 'D ' + horasf + 'h ' + minutosf + 'min ' + segundosf + 's.';
        }
        message.reply(respuesta);
    }
    if (mensaje === "!viaje") {
            let respuesta = '';
            let totalmilis = TiempoHasta(new Date ("2023-08-26T17:00:00.000+02:00"));
            let dias = totalmilis / 86400000;
            let horas = (dias - Math.floor(dias)) * 24;
            let minutos = (horas - Math.floor(horas)) * 60;
            let segundos = (minutos - Math.floor(minutos)) * 60;
            let diasf = Math.floor(dias);
            let horasf = Math.floor(horas);
            let minutosf = Math.floor(minutos);
            let segundosf = Math.floor(segundos);
            respuesta = "Quedan " + '\n' + examenes[i].nombre + ': ' + diasf + 'D ' + horasf + 'h ' + minutosf + 'min ' + segundosf + 's.' + " hasta el TRINIVIAJEEEEEEEEEEEEEEE";
            message.reply(respuesta);
    }
    
});

client.login(process.env.TOKEN);

function TiempoHasta(dia_examenes) {
    var hoy = new Date();
    var fecha = hoy.getFullYear() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getDate();
    let tiempo_hasta_examenes = (dia_examenes.getTime() - hoy.getTime());
    return tiempo_hasta_examenes;
}
