export class ContaPoupanca{
    constructor(SaldoInicial, cliente, agencia){
        this._saldo = SaldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        } 
    }     
    
    depositar(valor){
        if(valor > 0)
        {
        
        }
        this._saldo += valor;
    }
    
    transferir(valor, conta){
        conta.cidade = 'São Paulo';
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
         
    } 
} 






