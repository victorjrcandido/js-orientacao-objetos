export class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor
        } else console.log('Saldo insuficiente');
        return valor;
    }

    depositar(valor) {
        if (valor <= 0) {
            console.log('Não é possível depositar valores negativos');
            return;
        }
        this._saldo += valor
    }
}