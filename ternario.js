console.log("=== OPERADOR TERNÁRIO ===");

let idade = prompt("Digite sua idade");

if (idade <= 12) {
    console.log(idade, "é criança");
} else if (idade < 18) {
    console.log(idade, "é adolescente");
} else {
    console.log(idade, "é adulto");
}

// (condição) ? true : false;

console.log(
    (idade < 18) ? "criança" : "adulto" // parenteses opcional - boa prática para legibilidade
);

console.log(
    (idade < 12) ? "criança" : //true
    (idade < 18) ? "adolescente" : "adulto" // false
);
