const rl = require("readline-sync");

var rodadas = 0;
var pontJ1 = 0;
var pontJ2 = 0;
var palitosJ1 = 0;
var palitosJ2 = 0;

function iniciarJogo() {
  while (pontJ1 < 3 && pontJ2 < 3) {
    // inicio do jogo

    console.log("Bem vindo ao jogo");
    rodadas++;
    console.log(`Rodada ${rodadas}`);

    // gerando resultados para os dois jogadores
    palitosJ1 = Math.floor(Math.random() * 4);
    palitosJ2 = Math.floor(Math.random() * 4);

    // imprimindo quantos palitos cada jogador possui
    console.log(`Palitos do jogador 1: ${palitosJ1}`);
    console.log(`Palitos do jogador 2: ${palitosJ2}`);

    // soma total dos palitos
    var soma = palitosJ1 + palitosJ2;

    // palpite digitado por cada jogador
    var palpitej1 = parseFloat(
      rl.question("Digite a quantidade da soma de palitos (jogador1): ")
    );
    var palpitej2 = parseFloat(
      rl.question("Digite a quantidade da soma de palitos (jogador2): ")
    );

    // usando if para definir quem ganhou o jogo
    if (palpitej1 == soma) {
      console.log("Jogador 1 ganhou!");
      // atribuindo 1 ponto ao jogador 1
      pontJ1++;
      console.log(`Pontuação J1: ${pontJ1} | Pontuação J2: ${pontJ2}`);
    } else if (palpitej2 == soma) {
      console.log("Jogador 2 ganhou.");
      // atribuindo 1 ponto ao jogador 2
      pontJ2++;
      console.log(`Pontuação J1: ${pontJ1} | Pontuação J2: ${pontJ2}`);
    }
  }

  if (pontJ1 >= 3) {
    console.log("Jogador 1 ganhou!");
  } else {
    console.log("Jogador 2 ganhou!");
  }
}
iniciarJogo();
