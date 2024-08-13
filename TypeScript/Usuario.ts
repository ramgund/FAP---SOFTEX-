class Usuario {
    private nome: string;
    private id: bigint;
    private email: string;

    constructor(nome: string, id: bigint, email: string) {
        this.nome = nome;
        this.id = id;
        this.email = email;
    }

    setNome(nome: string) {
        this.nome = nome;
    }

    getNome() {
        return this.nome;
    }

    setEmail(email: string) {
        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    getId() { // 
        return this.id;
    }
}
