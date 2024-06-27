const rl = require('readline-sync')

let n = parseInt(rl.question("Digite um numero n: "))

let soma = 0;
let SomaStr = "";


for (var i = 1; i <= n; i++) {
    soma += i;
    i === n ? SomaStr += i + " = " : SomaStr += i +  " + ";
}

console.log(`${SomaStr}  ${soma}`)