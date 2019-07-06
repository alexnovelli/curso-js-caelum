//sintaxe literal
let carros = []
//console.log(carros, carros.constructor)

//sintaxe OOP
let cars = new Array()
//console.log(cars, cars.constructor)

//console.log(Array.prototype)


carros.push("Gol", "Fox", "Celta")
carros.unshift("Spin")
carros.splice(2, 0, "Uno")
//carros.splice(1,1)
carros.splice(3,1,"Vectra")
carros.sort()
carros.reverse()
//carros.pop()
//carros.shift()

carros.forEach(function(carro, posicao) {
    console.log("called", arguments)
    console.log(carro, posicao)
})

console.log(carros)