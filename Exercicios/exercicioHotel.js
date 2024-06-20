const rl = require('readline-sync');

let escolhaQuarto = rl.question("Escolha o tipo de quarto:\n1 - STANDARD\n2 - LUXO\n3 - SUITE").toUpperCase();

let numeroDias = parseInt(rl.question("Digite o numero de dias que vai ficar:"))

let tipoQuarto = ['STANDARD', 'LUXO', 'SUITE'];

let index = tipoQuarto.indexOf(escolhaQuarto);

let calculoDiaria;

if (index !== -1) {
    if (index == 0) {
     calculoDiaria = 150 * numeroDias;
    } else if (index == 1) {
        calculoDiaria = 300 * numeroDias;
    } else if (index == 2) {
        calculoDiaria = 500 * numeroDias
    } else {
        console.log("Quarto não existe.")
    }
}

let mostrarQuarto = tipoQuarto[index];


console.log(`Tipo de quarto: ${mostrarQuarto}`);
console.log(`Quantidade de diárias: ${numeroDias}`)
console.log(`Valor total: ${calculoDiaria}`)
