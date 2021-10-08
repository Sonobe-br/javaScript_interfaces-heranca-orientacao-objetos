export class Conta {
    constructor(tipo, saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        this._tipo = tipo;
    }

    set cliente(newValue){
        if(newValue instanceof Cliente){
            this._cliente = newValue;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        let taxa = 1;
        if(this._tipo == 'corrente'){
            taxa = 1.1;
        }

        if(this._tipo == 'salario'){
            taxa = 1.05;
        }

        if(this._tipo == 'empresarial'){
            taxa = 1.15;
        }

        const valorSacado = taxa * valor; 
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        } 
    }     
    
    depositar(valor){
        if(valor <= 100){
            return;
        }
        this._saldo += valor;
    }
    
    transferir(valor, conta){
        if(this._tipo == 'salario'){
            return;
        }

        conta.cidade = 'São Paulo';
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
         
    }
}