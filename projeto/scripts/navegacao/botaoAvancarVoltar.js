import { carregar } from "/scripts/navegacao/carregar.js"
import * as historico from "/scripts/navegacao/historico.js"

$janelaPrincipal.addEventListener("load", function salvaPaginaAtual() {
    const endereco = $janelaPrincipal.contentWindow.location.href
    historico.adiciona(endereco)
})

$botaoVoltar.addEventListener("click", function(){
    const enderecoVolta = historico.volta()
    if(enderecoVolta !== undefined)
        carregar(enderecoVolta)
})

$botaoAvancar.addEventListener("click", function(){
    const enderecoAvanca = historico.avanca()
    if(enderecoAvanca !== undefined)
        carregar(enderecoAvanca)
})