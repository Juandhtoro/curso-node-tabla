const { crearArchivo1 } = require('./helpers/multiplicar1');

console.clear();

const [ , , arg3 ='base=5'] = process.argv
const [ , base = 5] = arg3.split('=');
// console.log( base );

// const base = 10;

crearArchivo1 ( base )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err) );