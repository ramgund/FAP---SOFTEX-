const rl = require('readline-sync')


var rodadas = 0;
var pontJ1 = 0;
var pontJ2 = 0; 
var palitosJ1 = 0;
var palitosJ2 = 0;




function iniciarJogo () {
    
    while (pontJ1 < 3 || pontJ2 < 3) {
        console.log("Bem vindo ao jogo")
        rodadas++;
        console.log(`Rodada ${rodadas}`)

        palitosJ1 = Math.floor(Math.random() * 4)
        palitosJ2 = Math.floor(Math.random() * 4)

        console.log(`Palitos do jogador 1: ${palitosJ1}`);
        console.log(`Palitos do jogador 2: ${palitosJ2}`)

        var soma = palitosJ1 + palitosJ2

        var palpitej1 = parseFloat(rl.question("Digite a quantidade da soma de palitos (jogador1): "))
        var palpitej2 = parseFloat(rl.question("Digite a quantidade da soma de palitos (jogador2): "))

        if (palpitej1 == soma) {
            console.log("Jogador 1 ganhou!")
            pontJ1++
            console.log(`Pontuação J1: ${pontJ1} | Pontuação J2: ${pontJ2}`)
        } else if (palpitej2 == soma) {
            console.log("Jogador 2 ganhou.")
            pontJ2++
            console.log(`Pontuação J1: ${pontJ1} | Pontuação J2: ${pontJ2}`)
        } 

    }

   
    if (pontJ1 > pontJ2) {
        console.log("Jogador 1 ganhou!")
    } else {
        console.log("Jogador 2 ganhou!")
    }   
}
 iniciarJogo()