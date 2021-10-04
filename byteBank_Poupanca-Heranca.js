import { Conta } from "./byteBank_conta-heranca.js";

export class ContaPoupanca extends Conta{
    constructor(SaldoInicial, cliente, agencia){
        super(SaldoInicial, cliente, agencia);
    
    }

    sacar(valor){
        let taxa = 1.10;
        return this._sacar(valor, taxa); 
    }     
    
} 