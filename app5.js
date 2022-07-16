// const { argv, options } = require('yargs');
const colors = require('colors');
const { crearArchivo1 } = require('./helpers/multiplicar1');
const argv = require('./config/yargs');               

console.clear();

// console.log(process.argv);
// console.log(argv);
// console.log('base: yargs', argv.b);

// const base = 10;

crearArchivo1 ( argv.b, argv.l, argv.h )
        .then( nombreArchivo => console.log(nombreArchivo, 'creado' .rainbow))
        .catch( err => console.log(err) );