const rl = require("readline-sync");

let medicos = [];
let paciente = [];

// menu inicial

const menuInicial = () => {
  return parseInt(
    rl.question(
      "===MENU===\n1 - Cadastrar medico\n2 - Cadastrar paciente\n3 - Remover medico\n4 - Remover paciente\n5 - Atualizar paciente\n6 - Atualizar medico\n0 - Sair"
    )
  );
};

// cadastrar medicos

const CadastrarMedico = () => {
  let id = parseInt(rl.question("Digite o id do medico: "));
  let nome = rl.question("Digite o nome do médico: ");

  if (typeof id !== Number || id == null || nome == null) {
    console.log("Você inseriu alguma informação errada. Tente novamente.");
    CadastrarMedico();
  } else {
    medicos.push({
      id: id,
      nome: nome,
      historicos: [],
    });
    console.log("Medico cadastrado com sucesso!");
  }
};

// cadastro de pacientes

const CadastrarPaciente = () => {
  let id = parseInt(rl.question("Digite o id do paciente: "));
  
  let nome = rl.question("Digite o nome do paciente: ");
  
  let idmedico = parseInt(rl.question("Digite o id do medico que atendeu: "));

  let hasId = 


};
