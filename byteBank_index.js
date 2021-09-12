import{Cliente} from './byteBank_clientes.js';
import{ContaCorrente} from './byteBank_contaCorrente-heranca.js'
import{ContaPoupanca} from './byteBank_contaPoupanca-heranca.js'
import{Conta} from './byteBank_conta-heranca.js';

//let numeroDeContas = 0;

const cliente1 = new Cliente('Daniel', 276869748-63, 'Rua das Ostras, 27');

const contaCorrenteDaniel = new ContaCorrente(cliente1, 1001);
contaCorrenteDaniel.depositar(5000);
contaCorrenteDaniel.sacar(100);
//numeroDeContas++;

const contaPoupanca = new ContaPoupanca(500, cliente1, 1001)
contaPoupanca.sacar(50);

//output
console.log(contaPoupanca);
console.log(contaCorrenteDaniel);



