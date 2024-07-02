const rl = require('readline-sync');

let lista = [];

function adicionar(res) {
    lista.push(res)
    console.log("Adicionado com sucesso;")
}

function remover(res) {
    lista.pop(res)
    console.log("Removido com sucesso!")
}


do {
    var opcao = parseInt(rl.question("1 - Adicionar\n2 - Remover\n3 - Listar\n4 - Sair"))

    if (opcao == 1) {
       let nAdd = parseInt(rl.question("Digite o numero que deseja adicionar: "));
        adicionar(nAdd)
    } else if (opcao == 2) {
        let nRemov = parseInt(rl.question("Digite o numero que deseja remover: "))
        remover(nRemov);
    } else if (opcao == 3) {
        console.log(lista)
    } else if (opcao == 4) {
        console.log("Saindo...")
    }
}while (opcao != 4);