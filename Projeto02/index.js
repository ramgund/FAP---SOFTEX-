const rl = require('readline-sync')

var medicos = [];

var pacientes = [];

var historico = [];


const menuInicial = () => {
    return parseInt(rl.question("===MENU===\n1 - Cadastrar medico\n2 - Cadastrar Paciente\n3 - Excluir paciente\n4 - Alterar paciente\n5 - Alterar médico\n6 - SAIR"));

}

// cadastro de medicos

const CadastrarMedico = () => {
    var idMedico = parseInt(rl.question("Insira o ID do médico: "));

    var nomeMedico = rl.question("Digite o nome do médico: ");

    var hasId = medicos.find(m => m.id == idMedico)

    if (hasId) {
        console.log("Médico já existe.")
    } else {
        medicos.push({
            id: idMedico,
            nome: nomeMedico,
        })
        console.log(`Medico ${nomeMedico} cadastrado com sucesso!`)
    }
}

const CadastrarPacientes = () => {
    var idPaciente = parseInt(rl.question("Digite o id do paciente: "));
    
    var nomePaciente = rl.question("Digite o nome do paciente: ");

    var hasId = pacientes.find(p => p.id == idPaciente);

    if (hasId) {
        console.log("Paciente já existe. Tente novamente");
        CadastrarPacientes();
    } else {
        pacientes.push({
            id: idPaciente,
            nome: nomePaciente,
        })
        console.log(`Paciente ${nomePaciente} Cadastrado com sucesso!`)
    }

}


const cadastrarHistorico = () => {

    var paciente = parseInt(rl.question("Digite o id do paciente que deseja cadastrar: "));

    var pacienteExiste = pacientes.find(p => p.id == paciente);

    var medico = parseInt(rl.question("Digite o id do medico: "))

    var medicoExiste = medicos.find(m => m.id == medico);

    if (pacienteExiste && medicoExiste) {
        historico.push({
            pacienteExiste,
            medicoExiste,
        })
    } else {
        
    }



    

}