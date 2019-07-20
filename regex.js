console.log("=== REGEX ===");

// ^[0-9]{5}\-?[0-9]{3}$ ou ^\d{5}\-?\d{3}$ - Regex do CEP

// ^[A-z\d]{1,}\@\w+\.\w{2,}(\.\w{2,3})? - Regex email

// ^\+\d{1,3}\s\(\d{2}\)\s9?\d{4}\-\d{4}$ = Regex telefone celular

let cepUsuario = "09090-440" //prompt("Digite seu cep");

console.log(
    /^\d{5}\-?\d{3}$/.test(cepUsuario)
);

console.log(
    "exec = " + /^\d{5}\-?\d{3}$/.exec(cepUsuario)
);

console.log(
    "match = " + cepUsuario.match(/^\d{5}\-?\d{3}$/)
);