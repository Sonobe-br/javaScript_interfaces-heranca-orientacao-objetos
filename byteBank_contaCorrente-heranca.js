import {Cliente} from "./byteBank_clientes.js";
import { Conta } from "./byteBank_conta-heranca.js";
export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    
    constructor(cliente,agencia){
        super(0, cliente,agencia);
        ContaCorrente.numeroDeContas += 1; 
    }
/* O super é uma referência para classe pai.    
Declarando o método sacar aqui na classe conta corrente, faço com que esse comportamento seja aplicado
somente nesta classe. */

    sacar(valor){
        let taxa = 1.15;
        const valorSacado = taxa * valor; 
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        } 
    }     

} 