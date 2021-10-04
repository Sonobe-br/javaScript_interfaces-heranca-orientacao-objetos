import{ Cliente } from './byteBank_clientes.js';
import{ ContaCorrente } from './byteBank_contaCorrente-heranca.js'
import{ ContaPoupanca } from './byteBank_Poupanca-Heranca.js'
import { Conta } from './byteBank_conta-heranca.js';
import { ContaSalario } from './byteBank_Salario-Heranca.js';

//let numeroDeContas = 0;

const cliente1 = new Cliente('Daniel', 276869748-63, 'Rua das Ostras, 27');

const contaCorrenteDaniel = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(500, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10); 

console.log(contaSalario);



