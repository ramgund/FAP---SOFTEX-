class PessoaFisica extends Usuario {
    private contaFisica: bigint;

    constructor(nome: string, email: string, id: bigint, contaFisica: bigint) {
        super(nome, id, email); 
        this.contaFisica = contaFisica;
    }

    setContaFisica(contaFisica: bigint) {
        this.contaFisica = contaFisica;
    }
}