
/*
* el .options({}) me permite configurar argumentos directamente en la raíz de la aplicación o del comando, ejemplo:
* node app -d "Caracas"
*/

//Requieres
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc : 'Dirección de la ciudad para obtener el clima',
        demand: true

    }
}).argv;

module.exports = {
    argv
}
