const rl = require('readline-sync')

let numeroM = parseInt(rl.question("Digite o numero da tabuada: "));

for (var i = 0; i <= 10; i++) {
    let resultado = numeroM * i
    console.log(`${numeroM} x ${i} = ${resultado} `)
}