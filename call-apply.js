console.log("=== CALL - APPLY ===");

function Product(nome = "", preco = 0) {
    this.nome = nome;
    this.preco = preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function Comida(nome, preco) {
    Product.call(this, nome, preco)
    this.categoria = "Alimentos"
}

function Bebida(nome, preco) {
    Product.apply(this, [nome, preco])
    this.categoria = "Bebidas"
}

console.table(new Comida("Maçã", 4.90));
console.table(new Bebida("Pitú", 4.20));