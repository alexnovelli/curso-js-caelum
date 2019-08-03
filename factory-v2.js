function Conta(numero) {
    this.numero = numero || 0;
    console.log("==>", this, this instanceof Conta);
    if (!(this instanceof Conta)) {
        return new Conta(numero);   
    }
}

console.log(new Conta);
console.log(new Conta(2));
console.log(Conta());

