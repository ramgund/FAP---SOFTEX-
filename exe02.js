const rl = require("readline-sync");

let TipoImovel = rl.question("Digite o tipo do imovel: ");

let ImovelArea = parseFloat(rl.question("Digite a área do imóvel: "));

let valorMetro = parseFloat(rl.question("Digite o valor do metro quadrado: "));

let calculoAluguel = ImovelArea * valorMetro;

console.log(
  `======Valor do Aluguel======\n${TipoImovel} - Área: ${ImovelArea}m2 - Valor Do Aluguel: R$ ${calculoAluguel}`
);
