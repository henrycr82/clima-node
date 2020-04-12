//requieres
const axios = require('axios');

//
const getLugarLatLng = async( dir ) => {

    //Para escapar los carácteres de espacio en blanco de (dir) y poder construir una URL amigable
    const encodedUlr = encodeURI( dir );

    //instancio axios con una configuración personalizada.
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
        headers: {'X-RapidAPI-Key': 'YOUR_API_KEY'}
      });

    const resp = await instance.get();

    //Si no consigo resultados
    if (  resp.data.Results.length === 0 ) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    //armos los datos que voy a retornar
    const data      = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    //retorno los datos
    return {
        direccion,
        lat,
        lng
    }
}

//Exporto
module.exports = {
    getLugarLatLng
}
