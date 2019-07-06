console.log("===HOISTING===")

//ES5

var scope = "global"

function testScope() {
    console.log(scope) //loga undefined pois o js reserva as variaveis antes de executar a função
    var scope = "local"
    console.log(scope)
}

testScope()


//ES6
let test = false
{
    let test = true
    console.log(test)
}
