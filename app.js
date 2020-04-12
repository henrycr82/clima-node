//requieres
const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

/*axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=YOUR_API_KEY`)
    .then(resp => {

        let location = resp.data.results[0];
        let coordenadas = location.geometry.location;

        console.log('Dirección:', location.formatted_address);
        console.log('Latitud:', coordenadas.lat);
        console.log('Longitud:', coordenadas.lng);
    })
    .catch(err => console.log('ERROR', err));*/

/*lugar.getLugarLatLng( argv.direccion )
    .then( console.log )
    .catch( console.log );*/

/*clima.getClima( 40.750000, -74.000000 )
    .then( console.log )
    .catch( console.log );*/

const getInfo = async( direccion ) => {
    //Usamos el try para manejar de una mejor forma los errores
    try {
        const coords = await lugar.getLugarLatLng( direccion );
        const temp   = await clima.getClima( coords.lat, coords.lng );
        return `El clima de ${ coords.direccion } es de ${ temp }.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }
}



getInfo( argv.direccion )
    .then( console.log )
    .catch( console.log );
