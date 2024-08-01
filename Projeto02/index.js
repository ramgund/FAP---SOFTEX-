const rl = require("readline-sync");

let medicos = [];
let pacientes = [];

const menuInicial = () => {
  return parseInt(
    rl.question(
      "===MENU===\n1 - Cadastrar Médico\n2 - Cadastrar Paciente\n3 - Excluir Medico/Paciente\n4 - Atualizar Medico/Paciente\n5 - Mostrar Dados\n0 - SAIR "
    )
  );
};

const cadastrarMedico = () => {
  let idMedico = parseInt(rl.question("Digite o id do médico: "));

  let medicoExiste = medicos.some((m) => m.id == idMedico);

  if (medicoExiste) {
    console.log(`Medico com id ${idMedico} já existe.`);
    return;
  } else {
    let nomeMedico = rl.question("Digite o nome do medico: ");

    let medicoAtendeu = rl
      .question("Médico atendeu algum paciente? y/n ")
      .toUpperCase();

    if (medicoAtendeu === "Y") {
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
    return;
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
    rl.question("1 - Excluir medico\n2 - Excluir Paciente\nEscolha: ")
  );

  if (escolha == 1) {
    let id = parseInt(rl.question("Digite o id do médico: "));

    let index = medicos.findIndex((m) => m.id == id);

    if (index !== -1) {
      medicos.splice(index, 1);
      console.log("Médico excluído com sucesso!");
    } else {
      console.log("ID não encontrado. Tente novamente.");
    }
  } else if (escolha == 2) {
    let id = parseInt(rl.question("Digite o id do paciente: "));

    let index = pacientes.findIndex((p) => p.id == id);

    if (index !== -1) {
      pacientes.splice(index, 1);
      console.log("Paciente excluído com sucesso!");
      menuInicial();
    } else {
      console.log("ID não encontrado. Tente novamente.");
      return;
    }
  }
};

const atualizarMedico_Paciente = () => {
  let escolha = parseInt(
    rl.question("1 - Atualizar medico\n2 - Atualizar Paciente\nEscolha: ")
  );

  if (escolha == 1) {
    let opcao = parseInt(
      rl.question("1 - Alterar id\n2 - Alterar nome\nEscolha: ")
    );

    if (opcao == 1) {
      let idAlterar = parseInt(
        rl.question("Digite o id do médico que deseja alterar: ")
      );

      let index = medicos.findIndex((m) => m.id == idAlterar);

      if (index !== -1) {
        let novoId = parseInt(rl.question("Digite o novo id: "));
        medicos[index].id = novoId;
        console.log("ID do médico alterado com sucesso!");
        menuInicial();
      } else {
        console.log("ID não encontrado. Tente novamente.");
        return;
      }
    } else if (opcao == 2) {
      let idAlterar = parseInt(
        rl.question("Digite o id do médico que deseja alterar: ")
      );

      let index = medicos.findIndex((m) => m.id == idAlterar);

      if (index !== -1) {
        let novoNome = rl.question("Digite o novo nome: ");
        medicos[index].nome = novoNome;
        console.log("Nome do médico alterado com sucesso!");
        menuInicial();
      } else {
        console.log("ID não encontrado. Tente novamente.");
        return;
      }
    }
  } else if (escolha == 2) {
    let opcaoPaciente = parseInt(
      rl.question("1 - Atualizar nome\n2 - Atualizar diagnostico\nEscolha: ")
    );

    if (opcaoPaciente == 1) {
      let idPaciente = parseInt(rl.question("Digite o id do paciente: "));

      let index = pacientes.findIndex((p) => p.id == idPaciente);

      if (index !== -1) {
        let novoNome = rl.question("Digite o novo nome: ");
        pacientes[index].nome = novoNome;
        console.log("Nome do paciente atualizado com sucesso!");
        menuInicial();
      } else {
        console.log("ID não encontrado. Tente novamente!");
        return;
      }
    } else if (opcaoPaciente == 2) {
      let idPaciente = parseInt(rl.question("Digite o id do paciente: "));

      let index = pacientes.findIndex((p) => p.id == idPaciente);

      if (index !== -1) {
        let novoDiag = rl.question("Digite o novo diagnostico: ");
        pacientes[index].diagnostico = novoDiag;
        console.log("Diagnostico do paciente atualizado com sucesso!");
        menuInicial();
      } else {
        console.log("ID não encontrado. Tente novamente.");
        return;
      }
    }
  }
};

const mostrarDados = () => {
  console.log("=== MEDICOS ===");
  for (const medico of medicos) {
    console.log(
      `ID: ${medico.id}, Nome: ${medico.nome}, Histórico: ${
        medico.historico ? JSON.stringify(medico.historico) : "N/A"
      }`
    );
  }

  console.log("=== PACIENTES ===");
  for (const paciente of pacientes) {
    console.log(
      `ID: ${paciente.id}, Nome: ${paciente.nome}, Diagnóstico: ${paciente.diagnostico}`
    );
  }
};

let opcao = menuInicial();

while (opcao !== 0) {
  switch (opcao) {
    case 1:
      cadastrarMedico();
      break;
    case 2:
      cadastrarPaciente();
      break;
    case 3:
      excluirMedico_Paciente();
      break;
    case 4:
      atualizarMedico_Paciente();
      break;
    case 5:
      mostrarDados();
      break;
    default:
      console.log("Opção inválida. Tente novamente.");
  }

  opcao = menuInicial();
}

console.log("Saindo...");
