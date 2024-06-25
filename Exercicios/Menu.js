const rl = require("readline-sync")

let opcao = parseInt(rl.question("Selecione uma opcao: \n1 - Cadastrar\n2 - Mostrar Usuário\n3 - Sair"));


let users = [];

let inserir;

do {
    switch (opcao) {
        case 1: 
        inserir = rl.question("Insira o nome do usuário: ")
        users.push(inserir);
        console.log("Cadastro efetuado!")
        
        break;

        case 2: 
        console.table(users);
        break;


        default: 
        console.log("Invalido")
    }    
    opcao = parseInt(rl.question("Selecione uma opcao: \n1 - Cadastrar\n2 - Mostrar Usuário\n3 - Sair"));
} while (opcao != 3);