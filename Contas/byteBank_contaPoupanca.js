export class ContaPoupanca{
    constructor(SaldoInicial, cliente, agencia){
        this._saldo = SaldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    sacar(valor){
        taxa = 1.1 * valor;
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
    
    transferir(valor, conta){
        conta.cidade = 'São Paulo';
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
         
    } 
} 






