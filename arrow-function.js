console.log("=== ARROW FUNCTION ===");

let carros = [
    carro1 = {
        "modelo" : "Uno",
        "preco" : 25000
    },
    carro2 = {
        "modelo" : "Fox",
        "preco" : 32000
    },
    carro3 = {
        "modelo" : "Ka",
        "preco" : 7000
    }
]

console.table(carros);

/* let filtrada = carros.filter(
    function (carro) {
        if (carro.preco < 30000) {
            return carro;
        }
    }
); */

let filtrada = carros.filter(carro => carro.preco < 30000);

console.table(filtrada);