const rl = require("readline-sync");

let tarefas = [];

const menuInicial = () => {
  return parseInt(
    rl.question(
      "Selecione uma opção:\n=== Menu ===\n1 - Cadastrar uma tarefa\n2 - Alterar uma tarefa\n3 - Excluir uma tarefa\n4 - Listar tarefas\n5 - Sair"
    )
  );
};

const cadastrarTarefa = () => {
  var idTarefa = parseInt(rl.question("Digite o id da tarefa: "));
  var descricaoTarefa = rl.question("Digite a descrição da tarefa: ");
  tarefas.push({
    id: idTarefa,
    descricao: descricaoTarefa,
  });
  const hasId = tarefas.some((tarefa) => tarefa.id == idTarefa);

  if (hasId) {
    console.log("Tarefa já cadastrada");
  } else {
    console.log("Tarefa cadastrada com sucesso!");
  }
};

const alterarTarefa = () => {
  var pesquisarTarefa = parseInt(
    rl.question("Digite o id da tarefa que deseja alterar: ")
  );
  const index = tarefas.findIndex((tarefa) => tarefa.id == pesquisarTarefa);

  if (index != -1) {
    var opcoes = parseInt(rl.question("1 - Alterar id\n2 - Alterar descricao"));
  }
  if (opcoes == 1) {
    var novoId = parseInt(rl.question("Digite o novo id: "));
    tarefas[index].id = novoId;
  } else if (opcoes == 2) {
    var novaDescricao = rl.question("Digite a nova descricao: ");
    tarefas[index].descricao = novaDescricao;
  } else {
    console.log("Opcao invalida");
  }
};

const excluirTarefas = () => {
  var idExcluido = parseInt(
    rl.question("Digite o id da tarefa a ser excluida: ")
  );
  var index = tarefas.findIndex((tarefa) => tarefa.id === idExcluido);
  if (index !== -1) {
    tarefas.splice(index, 1); // Utiliza splice para remover a tarefa no índice 'index'
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
