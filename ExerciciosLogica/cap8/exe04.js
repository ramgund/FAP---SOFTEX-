const rl = require('readline-sync')

let n = parseInt(rl.question("Digite um numero n: "))

let fat = 1;
let fatStr = "";

for (let i = 1; i <= n; i++) {
    fat *= i;
    i == n ? fatStr += i + " = " : fatStr += i + " x "
}

console.log(`${fatStr} ${fat}`)