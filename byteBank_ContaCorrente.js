import {Cliente} from "./byteBank_clientes.js";
export class ContaCorrente{
    //dados púlicos
    agencia;
    tipoDeConta;
    _cliente;
    //dados privado
    saldo = 0;

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        } 
    }     

    depositar(valor){
        if(valor <= 100){
        return;
        }
        this._saldo += valor;
    }

    
    //função para a realização de transferência de valores entre as contas
    transferir(valor, conta){
        conta.cidade = 'São Paulo';
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
         
    } 
} 

