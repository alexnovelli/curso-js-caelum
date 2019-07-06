/* function soma() {
    console.log(arguments)
    let result = arguments[0] + arguments[1]
    return result
} */

// default parameter (ES6) - atribuir valores padrões aos parametros
function soma(a = 0, b = 0) {
    let result = a + b
    return result
}

//função anonima
let sum = function (x=0, y=0) {
    return x + y
}