const rl = require("readline-sync");

let num = parseInt(rl.question("Digite um numero n (inteiro): "));
let soma = 0;
let somaI = "";

for (var i = 1; i <= num; i += 2) {
  soma += i;

  if (num === 1) {
    somaI += i;
  } else {
    somaI += i + " + ";
  }
}

console.log(`${somaI} = ${soma}`);
