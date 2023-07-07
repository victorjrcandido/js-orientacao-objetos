import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
const contaRicardo = new ContaCorrente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

contaRicardo.agencia = 1001;
contaRicardo.sacar(10);
contaRicardo.depositar(133);

const valorSacado = contaRicardo.sacar(10);


console.log(`⚡ - valorSacado:`, valorSacado);
console.log(`⚡ - contaRicardo:`, contaRicardo._saldo);


