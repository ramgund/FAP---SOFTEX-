const rl = require("readline-sync");

const {
  menuInicial,
  cadastrarTarefa,
  alterarTarefa,
  excluirTarefas,
  listarTarefas,
} = require("./funcoes");

let tarefas = [];

var opcao = true;

while (opcao) {
  var menu = menuInicial();
  if (menu == 1) {
    cadastrarTarefa();
  } else if (menu == 2) {
    alterarTarefa();
  } else if (menu == 3) {
    excluirTarefas();
  } else if (menu == 4) {
    listarTarefas();
  } else if (menu == 5) {
    opcao = false;
    console.log("Saindo!");
  }
}
