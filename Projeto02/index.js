const rl = require("readline-sync");

let medicos = [];
let pacientes = [];

const menuInicial = () => {
  return parseInt(
    rl.question(
      "===MENU===\n1 - Cadastrar Médico\n2 - Cadastrar Paciente\n3 - Excluir Medico/Paciente\n4 - Atualizar Medico/Paciente\n0 - SAIR "
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

const excluirMedico_Paciente = () => {
  let escolha = parseInt(
    rl.question("1 - Excluir medico\n2 - Excluir Paciente")
  );

  if (escolha == 1) {
    let id = parseInt(rl.question("Digite o id do médico: "));

    let hasId = medicos.some((m) => m.id == id);

    if (hasId) {
      let index = medicos.findIndex((m) => m.id == id);

      if (index !== -1) {
        medicos.slice(index, 1);
        console.log("Médico excluido com sucesso!");
      } else {
        console.log("Index não encontrado. Tente novamente!");
        excluirMedico_Paciente();
      }
    } else {
      console.log("ID não encontrado. Tente novamente.");
      excluirMedico_Paciente();
    }
  } else if (escolha == 2) {
    let id = parseInt(rl.question("Digite o id do médico: "));

    let hasId_paciente = pacientes.some((p) => p.id == id);

    if (hasId_paciente) {
      let index_paciente = pacientes.findIndex((p) => p.id == id);

      if (index_paciente !== -1) {
        pacientes.slice(index_paciente, 1);
      } else {
        console.log("Index não encontrado. Tente novamente!");
        excluirMedico_Paciente();
      }
    } else {
      console.log("ID não encontrado. Tente novamente.");
      excluirMedico_Paciente();
    }
  }
};

const atualizarMedico_Paciente = () => {
  let escolha = parseInt(
    rl.question("1 - Atualizar medico\n2 - Atualizar Paciente")
  );

  if (escolha == 1) {
    let opcao = parseInt(rl.question("1 - Alterar id\n2 - Alterar nome"));

    if (opcao == 1) {
      let idAlterar = parseInt(
        rl.question("Digite o id do médico que deseja alterar: ")
      );

      let idExiste = medicos.some((m) => m.id == idAlterar);

      if (idExiste) {
        let index = medicos.findIndex((m) => m.id == idAlterar);

        if (index !== -1) {
          medicos[index].id == idAlterar;
        }
      } else {
        console.log("ID não existe. Tente novamente.");
        atualizarMedico_Paciente();
      }
    } else if (opcao == 2) {
      let nomeAlterar = parseInt(
        rl.question("Digite o id do médico que deseja alterar: ")
      );

      let idExiste = medicos.some((m) => m.id == nomeAlterar);

      if (idExiste) {
        let index = medicos.findIndex((m) => m.id == nomeAlterar);

        if (index !== -1) {
          medicos[index].nome == idAlterar;
        }
      } else {
        console.log("ID não existe. Tente novamente.");
        atualizarMedico_Paciente();
      }
    }
  } else if (escolha == 2) {
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
