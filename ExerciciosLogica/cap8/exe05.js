const rl = require('readline-sync')


var rodadas = 0;
var pontJ1 = 0;
var pontJ2 = 0; 




function iniciarJogo () {
    
    while (pontJ1 < 3 || pontJ2 < 3) {
        console.log("Bem vindo ao jogo")
        rodadas++;
        console.log(`Rodada ${rodadas}`)

        pontJ1 = Math.floor(Math.random() * 4)
        pontJ2 = Math.floor(Math.random() * 4)

        var soma = pontJ1 + pontJ2

        var palpitej1 = parseFloat(rl.question("Digite a quantidade da soma de palitos (jogador1): "))
        var palpitej2 = parseFloat(rl.question("Digite a quantidade da soma de palitos (jogador2): "))

        if (palpitej1 == soma) {
            console.log("Jogador 1 ganhou!")
            rodadas++
            pontJ1++
        } else if (palpitej2 == soma) {
            console.log("Jogador 2 ganhou.")
            rodadas++
            pontJ2++
        } else if (palpitej1 != soma && palpitej2 != soma) {
            console.log("Empate")
            rodadas++
        }
    }
    
}
 iniciarJogo()