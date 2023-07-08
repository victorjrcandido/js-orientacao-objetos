export class ContaCorrente {
    agencia;
    cliente;


    #saldo = 0;

    get saldo() {
        return this.#saldo;
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