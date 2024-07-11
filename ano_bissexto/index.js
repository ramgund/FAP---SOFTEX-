const readline = require("readline-sync");

let ano = readline.question("DIgite o ano: ");

if ((ano % 100 !== 0 && ano % 4 === 0) || (ano % 400 === 0)) {
    console.log("O ano é bissexto!")
} else {
    console.log("O ano não é bissexto!")
}