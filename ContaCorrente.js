export class ContaCorrente {
    static quantidadeDeContas = 0;
    agencia;
    #cliente;
    totalDepositado = 0;

    #saldo = 0;

    get saldo() {
        return this.#saldo;
    }

    get cliente() {
        return this.#cliente;
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.#cliente = cliente;
        ContaCorrente.quantidadeDeContas += 1;
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor
        } else console.log('Saldo insuficiente');
        return valor;
    }

    depositar(valor) {
        if (valor <= 0) {
            console.log('Não é possível depositar valores negativos');
            return;
        }
        this.totalDepositado += valor;
        this.#saldo += valor
    }

    transferir(valor, contaAlvo) {
        if (valor <= 0) {
            console.log('Não é possível transferir esse valor');
            return;
        }
        this.sacar(valor);
        contaAlvo.depositar(valor);
        console.log(`Depositado: ${valor} na ${contaAlvo}`)
    }
}