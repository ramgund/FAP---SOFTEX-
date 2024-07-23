const rl = require("readline-sync");

let tarefas = [];

// menu inicial do programa
const menuInicial = () => {
  return parseInt(
    rl.question(
      "Selecione uma opção:\n=== Menu ===\n1 - Cadastrar uma tarefa\n2 - Alterar uma tarefa\n3 - Excluir uma tarefa\n4 - Listar tarefas\n5 - Sair"
    )
  );
};

// cadastro de tarefas
const cadastrarTarefa = () => {
  var idTarefa = parseInt(rl.question("Digite o id da tarefa: "));
  var descricaoTarefa = rl.question("Digite a descrição da tarefa: ");

  // procura um id existente na tarefa
  let hasId = tarefas.find((tarefa) => tarefa.id == idTarefa);

  if (hasId) {
    console.log("Tarefa já existe!");
  } else {
    tarefas.push({
      id: idTarefa,
      descricao: descricaoTarefa,
    });
    console.log("Tarefa Adicionada!");
  }
};

const alterarTarefa = () => {
  var pesquisarTarefa = parseInt(
    rl.question("Digite o id da tarefa que deseja alterar: ")
  );
  // pesquisa o id do input na tarefa
  const procurarId = tarefas.find((tarefa) => tarefa.id == pesquisarTarefa);

  if (procurarId) {
    var opcoes = parseInt(rl.question("1 - Alterar id\n2 - Alterar descricao"));
  }
  if (opcoes == 1) {
    var novoId = parseInt(rl.question("Digite o novo id: "));
    tarefas[procurarId].id = novoId;
  } else if (opcoes == 2) {
    var novaDescricao = rl.question("Digite a nova descricao: ");
    tarefas[procurarId].descricao = novaDescricao;
  } else {
    console.log("Opcao invalida");
  }
};

const excluirTarefas = () => {
  var idExcluido = parseInt(
    rl.question("Digite o id da tarefa a ser excluida: ")
  );
  var existeId = tarefas.find((tarefa) => tarefa.id == idExcluido);
  if (existeId) {
    tarefas.splice(existeId, 1);
    console.log("Tarefa excluida com sucesso!");
  } else {
    console.log("Tarefa não encontrada.");
  }
};

const listarTarefas = () => {
  console.table(tarefas);
};

module.exports = {
  menuInicial,
  cadastrarTarefa,
  alterarTarefa,
  excluirTarefas,
  listarTarefas,
};
