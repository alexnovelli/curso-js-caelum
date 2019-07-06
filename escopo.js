console.log("===ESCOPO===")

//ES5
//var escopo = "global"

function testaEscopo(){
    escopo = "interno" //esqueceu de colocar var na variavel, vira global
    console.log(escopo)
}