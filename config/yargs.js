const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            demandOption: true,
            type: 'number',
            describe: 'Es la base de la tabla de multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Este es el número hasta donde quieres la tabla'
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b))
            throw 'La base tiene que ser un número'
        if (isNaN(argv.h))
            throw 'El valor máximo tiene que ser un número'
        return true;
    })
    .argv;

module.exports = argv;