//sintaxe literal - menos expressivo / implícito
let empresa = "Caelum"
console.log(empresa, typeof empresa, empresa.constructor)

//sintaxe OOP - mais expressivo / explícito
let company = new String("Caelum")
console.log(company, typeof company, company.constructor)

console.dir(String.prototype)
console.dir(Number.prototype)
console.dir(Boolean.prototype)

console.log(empresa.toUpperCase(), company.toUpperCase())