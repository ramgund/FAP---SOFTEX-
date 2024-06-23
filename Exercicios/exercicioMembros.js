const rl = require("readline-sync");

let membros = [];

let tarefas = [];

function adicionarMembro() {
  let nomeMembro = rl.question("Digite o nome do membro: ");

  let idMembro = parseInt(rl.question("Digite o id do membro: "));

  membros.push({
    nome_membro: nomeMembro,
    id_membro: idMembro,
    tarefas: [],
  });
}

function adicionarTarefa() {
  let idMembro = parseInt(
    rl.question("Digite o id do membro ligado a tarefa: ")
  );
  let idTarefa = parseInt(rl.question("Digite o id da tarefa: "));
  let descricaoTarefa = rl.question("Digite a descricao da tarefa: ");

  let tarefa = membros.some((m) =>
    m.tarefas.some((t) => t.id_tarefa === idTarefa)
  );

  if (tarefa) {
    console.log("A tarefa já está ligada a outro membro.");
  } else {
    let membro = membros.find((m) => m.id === idMembro);

    if (membro) {
      membros.tarefas.push({
        id_tarefa: idTarefa,
        descricao_tarefa: descricaoTarefa,
      });
      console.log(`Tarefa adiciona para o membro: ${membro.nome_membro}`);
    } else {
      console.log("Membro não encontrado.");
    }
  }
}

adicionarMembro();

let resp = parseInt(
  rl.question(
    "Selecione uma opção: 1 - Adicionar uma tarefa\n2 - Adicionar membro\n 3 - Sair "
  )
);

if (resp === 1) {
  adicionarTarefa();
} else if (resp === 2) {
  adicionarMembro();
} else if (resp === 3) {
  console.log(tarefasMembros);
}
