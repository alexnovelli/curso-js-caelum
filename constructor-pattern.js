console.log("=== CONSTRUCTOR PATTERN ===");

function Conta(tipo = "CC", saldo = 0, titular = null) {
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular;
    /* this.depositar = function (valor = 0) {
        if (valor >= 0) {
            return this.saldo += valor;
        }
    } */
}

Conta.prototype.depositar = function (valor = 0) {
    if (valor > 0) {
        this.saldo += valor;
    }
    return this.saldo;
}

Conta.prototype.sacar = function(valor=0) {
    if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
    } else {
        console.log("Vá se fuder maluco!");
    }
    return this.saldo
}

Conta.prototype.transferir = function(valor=0, contaDestino) {
    if (valor > 0 && this.saldo >= valor && contaDestino instanceof Conta) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

let contaJoao = new Conta("CP", 2000, "João da Silva");
let contaMaria = new Conta("CC", 3000, "Maria da Silva");
let contaBurro = new Conta();

console.log(contaJoao);
console.log(contaMaria);
console.log(contaBurro);
