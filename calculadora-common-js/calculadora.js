// COMMON JS

const soma = require("./soma");
const multiplicar = require("./multiplicacao");

console.log(soma(10,35));
console.log(multiplicar(2,8));

const total = require("./soma")(5,25);

console.log(total);