import {Cliente} from './byteBank_Clientes.js'
import {ContaCorrente} from './byteBank_ContaCorrente.js'
import {ContaPoupanca} from './byteBank_contaPoupança.js';

let numeroDeContas = 0;

const cliente1 = new Cliente('Daniel', 276869748-63, 'Rua das Ostras, 27'  );
const contaCorrenteDaniel = new ContaCorrente(cliente1, 1001);
contaCorrenteDaniel.depositar(5000);
contaCorrenteDaniel.sacar(100);
numeroDeContas++;

const contaPoupanca = new ContaPoupanca(500, cliente1, 1001)


//output
console.log(contaPoupanca);
console.log(contaCorrenteDaniel);



