interface ProdutoInterface {
  nome: string;
  preco: number;
 descricao: string;
 QuantidadeEstoque: number;

 retornarProduto(): void


}

class Produto implements ProdutoInterface {
    
    nome!: string;
    preco!: number;
    descricao!: string;
    QuantidadeEstoque!: number;

    constructor(){

    }

    retornarProduto(): void {
        console.log(`Nome: ${this.nome}\nPreco: ${this.preco}\nDescricao: ${this.descricao}\n Quantidade: ${this.QuantidadeEstoque}`)
    }

    setNovoProduto(nome: string, preco: number, descricao: string, QuantidadeEstoque: number) : void {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.QuantidadeEstoque = QuantidadeEstoque;
    }


}

const produto: Produto = new Produto();

produto.setNovoProduto("treloso", 20, "biscoito treloso", 30);

console.log(produto.retornarProduto());

