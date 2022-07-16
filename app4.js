// const { argv, options } = require('yargs');
const { crearArchivo1 } = require('./helpers/multiplicar1');
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })               
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false
                })                 
                .check( (argv, options) => {
                    if( isNaN( argv.b )){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv;
                

console.clear();

// console.log(process.argv);
console.log(argv);
// console.log('base: yargs', argv.b);

// const base = 10;

crearArchivo1 ( argv.b, argv.l )
        .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
        .catch( err => console.log(err) );