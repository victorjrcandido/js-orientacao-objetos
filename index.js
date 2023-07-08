import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
const contaRicardo = new ContaCorrente();

const cliente2 = new Cliente();
const contaCarlos = new ContaCorrente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
contaRicardo.agencia = 1001;
contaRicardo.cliente = cliente1;
contaRicardo.depositar(100);
// contaRicardo.transferir(5, contaCarlos);

cliente2.nome = "Carlos";
cliente2.cpf = 11111111111;
contaCarlos.agencia = 102;
contaCarlos.cliente = cliente2;


console.log(`⚡ - cliente1:`, contaRicardo.saldo);

