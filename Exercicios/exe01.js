const rl = require('readline-sync');

// // DESAFIO DO MENU 

// let opcao = parseInt(rl.question("======MENU======\n1 - Listar Clientes\n2 - Cadastrar Clientes\n3 - Editar Cliente\n4 - Remover Cliente\n0 - Sair do Sistema\n======\nOpcao: __\n======"))

// console.log(opcao)

// 1 - EXERCICIO DAS MEDIAS

// let nota1 = parseFloat(rl.question("Digite a primeira nota: "))
// let nota2 = parseFloat(rl.question("Digite a segunda nota: "))
// let nota3 = parseFloat(rl.question("Digite a terceira nota: "))
// let nota4 = parseFloat(rl.question("Digite a quarta nota: "))

// let media = (nota1 + nota2 + nota3 + nota4) / 4;

// console.log(`A media foi: ${media}`)

// 2 - EXERCICIO DE CONVERSÃO 

// let valorConv = parseFloat(rl.question("Digite o valor a ser convertido para centimetros: "))

// let conver = valorConv * 100;

// console.log(`O valor convertido foi: ${conver}cm`)

// 3 - HORAS TRABALHADAS

let GanhoHora = parseFloat(rl.question("Digite quanto você ganha por hora: "))

let horasTrabalhadas = parseFloat(rl.question("Digite quantas horas você trabalhou no mês: "))

let salario = GanhoHora * horasTrabalhadas;

console.log(`O salário total foi: ${salario}`)