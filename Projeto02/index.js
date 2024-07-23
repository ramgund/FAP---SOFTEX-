const rl = require('readline-sync');

let medicos = [];
let pacientes = [];

// ====CADASTRO DE MEDICOS====

const CadastrarMedico = () => {
    let nome = rl.question("Digite o nome do médico: ")
    
    let id = parseInt(r.question("Digite o id do medico: "))

    medicos.push({
        idMedico: id,
        nomeMedico: nome,

    })

    if (typeof id !== Number) {
        console.log("Digite apenas numeros.") 
        CadastrarMedico()
    } else {
        console.log("Médico Cadastrado")
        menuInicial();
    }
}

// ====CADASTRO DE PACIENTES====
const cadastrarPaciente = () => {
    let nome = rl.question("Digite o nome do paciente: ")
    
    let id = parseInt(rl.question("Digite o id do paciente: "));

    pacientes.push({
        nomePaciente: nome,
        IdPaciente: id,
    })



    if (typeof id !== Number) {
        console.log("Digite apenas numeros.") 
        cadastrarPaciente();
    } else {
        console.log("Paciente cadastrado com sucesso!")
        menuInicial();
    }
}

const getById = () => {
    let id = parseInt(rl.question("Digite o id procurado: ")); 

    return  medicos.some(m => m.id === id);

}

// ====EXCLUIR PACIENTE====

const ExcluirPaciente = () => {
    
    const HasId = getById()

    if (HasId) {
        pacientes.splice
    }

    
}

// ====MENU INICIAL====
const menuInicial = () => {
    return opcoes = parseInt(rl.question("===MENU===\nSelecione uma opcao: 1 - Cadastrar um médico\n2 - Cadastrar um paciente\n3 - Excluir um paciente\n4 - Alterar paciente\n5 - SAIR"))

}

while (menuInicial() !== 5) {
    if(menuInicial() == 1) {
        CadastrarMedico();
    } else if (menuInicial() == 2) {
        cadastrarPaciente();
    } else if (menuInicial() == 3) {

    }
}

menuInicial()