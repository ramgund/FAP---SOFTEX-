const rl = require('readline-sync')

let opcao = true;

function soma(a , b) {
    a = parseFloat(rl.question("Digite o primeiro numero: "));
    b = parseFloat(rl.question("Digite o segundo numero: "));
    var soma = a + b;
    console.log(`A soma dos numeros ${a} e ${b} foi: ${soma}`);
}

while (opcao) {

    var escolha = parseInt(rl.question("Selecione uma opção:\n1 - Somar\n2 - Realizar outra soma\n3 - Sair"))

    if (escolha == 1) {
        soma()
} else if (escolha == 2) {
    soma()
} else if (escolha == 3) {
    opcao = false;
    console.log("Programa finalizado com sucesso!")
}

}
