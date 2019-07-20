console.log("=== FOR OF e FOR IN ===");

function soma() {
    console.log(arguments);

    for (let i in arguments) { // IN = retorna o index do array
        console.log(i, arguments[i]);
    }

    let total = 0;
    for (let num of arguments) { // OF = retorna o valor de cada index do array
        total += num;
    }
    return total;
}

console.log(soma(15, 13, 11, 7));


console.log("=== CALLBACK ===");

function sum() {
    let total = 0;
    for (let x of arguments) {
        console.log(x, x.constructor === Number);
        if (x.constructor === Number) {
            total += x;
        }
    }
    // console.log(arguments[arguments.length - 1]);
    // return total;

    if (arguments[arguments.length - 1] instanceof Function) {
        arguments[arguments.length - 1](total);
    }
}
console.log(sum(1, 2, 3, function (valor) {
    console.log("Chamou callback", valor * 2);
}));
