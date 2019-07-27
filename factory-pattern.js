console.log("=== FACTORY PATTERN ===");

function Carro(modelo, ano) {
    this.modelo = modelo || "Padrão"
    this.ano = ano || 0
}

// criando um objeto
var meuCarro = new Carro()

console.log(meuCarro);

// var outroCarro = Carro()
// console.log(outroCarro); // reference error

function VeiculoFactory() {}

// adicionando propriedade
VeiculoFactory.prototype.veiculoClass = Carro;

// adicionando métodos
VeiculoFactory.prototype.criarVeiculo = function(car) {
    return new this.veiculoClass(car.model, car.year);
}

var veiculo = new VeiculoFactory().criarVeiculo({ model:"Ka", year:1997 });
console.log(veiculo);
