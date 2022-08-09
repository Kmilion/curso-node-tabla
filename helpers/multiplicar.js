
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

// const crearArchivo = (base = 5) => {
//     try {
//         return new Promise((resolve) => {
//             console.log('=================');
//             console.log(`   Tabla del ${base}   `);
//             console.log('=================');

//             let salida = '';
//             for (let i = 1; i < 11; i++) {
//                 salida += `${base} x ${i} = ${base * i}\n`;
//             }
//             console.log(salida);
//             fs.writeFileSync(`tabla-${base}.txt`, salida);
//             resolve(`tabla-${base}.txt`);
//         })
//     } catch (error) {
//         throw error;
//     }
// }

const crearArchivo = async (base = 5, listar, hasta) => {
    try {
        let salida = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        if (listar) {
            console.log('================='.bgCyan);
            console.log(`   Tabla del ${base}   `.bgRed);
            console.log('================='.bgCyan);
            console.log(salida.rainbow);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}