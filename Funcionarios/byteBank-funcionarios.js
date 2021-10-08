export class Funcionarios {
    constructor(nome, salario, cpf) {
        this.nome = nome;
        this.salario = salario;
        this.cpf = cpf;

        this._bonificacao = 1;
    }
}