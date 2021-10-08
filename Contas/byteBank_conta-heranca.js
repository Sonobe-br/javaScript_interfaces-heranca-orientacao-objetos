//Classe abstrata
export class Conta {
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error ("Você não deveria instanciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata");            
        }
        
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;  
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

    //método abstrato    
    sacar(valor){
        throw new console.error('O método sacar desta conta é abstrata');        
    }     
    
    _sacar(){
        const valorSacado = taxa * valor; 
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        } else {
            return 0;
        }
    }

    depositar(valor){ 
        this._saldo += valor;
    }
    
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
         
    }
}