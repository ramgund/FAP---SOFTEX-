const rl = require("readline-sync");

let a = parseInt(rl.question("Digite um numero: "));

let b = parseInt(rl.question("Digite outro numero: "));

let multiplos3StrA = "";
let multiplos5StrA = "";

for (var i = 0; i <= a; i++) {
  if (i % 5 == 0) {
    multiplos5StrA = ", " + i;
  } else if (i % 3 == 0) {
    multiplos3StrA = ", " + i;
  }
  for (var j = 0; j <= b; j++) {
    if (j % 5 == 0) {
      multiplos5StrB = ", " + j;
    } else if (j % 3 == 0) {
      multiplos3StrB = ", " + j;
    }
  }
}

console.log(`Divisores: ${multiplos5StrA} ${multiplos3StrA} ${multiplos5StrB} ${multiplos3StrB}`)