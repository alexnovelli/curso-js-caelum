import { paginaInicial } from "/scripts/storage/paginaInicial.js"
import { carregar } from "/scripts/navegacao/carregar.js"

$botaoHome.addEventListener("click", function vaiParaHome(){
    carregar(paginaInicial)
})