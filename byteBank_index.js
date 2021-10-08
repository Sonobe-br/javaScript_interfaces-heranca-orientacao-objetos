import{Cliente} from "./byteBank_clientes.js";
import{Gerente} from "./Funcionarios/byteBank-gerente.js";
import{Diretor} from "./Funcionarios/byteBank-diretor.js";
import{SistemaAutenticacao} from "./byteBank-SistemaAutenticacao.js";

const diretor = new Diretor ("Daniel", 10000, 12345678900);
diretor.cadastrarSenha("123456");

const gerente = new Gerente ("Pedro", 5000, 23456476964);
gerente.cadastrarSenha("654321");
const cliente = new Cliente ("Anita", 27696875643, "080508"); 

const diretorLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteLogado = SistemaAutenticacao.login(gerente, "654321");

const clienteLogado = SistemaAutenticacao.login(cliente, "080508");

console.log(diretorLogado,gerenteLogado, clienteLogado); 


