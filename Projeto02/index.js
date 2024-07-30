const rl = require("readline-sync");

let medicos = [];
let pacientes = [];

const menuInicial = () => {
  return parseInt(
    rl.question(
      "===MENU===\n1 - Cadastrar Médico\n2 - Cadastrar Paciente\n3 - Excluir Médico\n4 - Excluir Paciente\n5 - Atualizar Médico\n6 - Atualizar Paciente"
    )
  );
};

const cadastrarMedico = () => {
  let idMedico = parseInt(rl.question("Digite o id do médico"));

  let medicoExiste = medicos.some((m) => m.id == idMedico);

  if (medicoExiste) {
    console.log(`Medico com id ${idMedico} já existe.`);
    cadastrarMedico();
  } else {
    let nomeMedico = rl.question("Digite o nome do medico: ");

    let medicoAtendeu = rl.question(
      "Médico atendeu algum paciente?y/n"
    ).toLocaleUpperCase;

    if (medicoAtendeu == "y") {
      let idPaciente = parseInt(rl.question("Digite o id do paciente: "));

      let pacienteExiste = pacientes.some((p) => p.id == idPaciente);

      if (pacienteExiste) {
        let dadosPaciente = pacientes.find((p) => p.id == idPaciente);

        medicos.push({
          id: idMedico,
          nome: nomeMedico,
          historico: dadosPaciente,
        });
      } else {
        console.log("Paciente não existe.");

        medicos.push({
          id: idMedico,
          nome: nomeMedico,
        });

        menuInicial();
      }
    } else {
      medicos.push({
        id: idMedico,
        nome: nomeMedico,
      });

      console.log("Medico cadastrado com sucesso!");
      menuInicial();
    }
  }
};

const cadastrarPaciente = () => {
  let idPaciente = parseInt(rl.question("Digite o id do paciente: "));

  let pacienteExiste = pacientes.some((m) => m.id == idPaciente);

  if (pacienteExiste) {
    console.log(`Paciente de id ${idPaciente} já existe.`);
    cadastrarPaciente();
  } else {
    let nomePaciente = rl.question("Digite o nome do paciente: ");

    let diagnostico = rl.question("Digite o diagnostico do paciente: ");

    pacientes.push({
      id: idPaciente,
      nome: nomePaciente,
      diagnostico: diagnostico,
    });
    console.log("Paciente adicionado com sucesso!");
    menuInicial();
  }
};

let opcao = menuInicial();

while (opcao !== 0) {
  if (opcao == 1) {
    cadastrarMedico();
  } else if (opcao == 2) {
    cadastrarPaciente();
  } else if (opcao == 3) {
  }
}
