import * as storage from "/scripts/storage/storage.js"
import { formataEndereco } from "/scripts/endereco/formataEndereco.js"

$inputPaginaInicial.value = storage.paginaInicial;
$inputPermitiuSalvar.checked = storage.aceitouSalvar;

$botaoSalvar.onclick = salvar

function salvar() {
    const setAceitouOuNao = 
    $inputPermitiuSalvar.checked === true
    ? storage.setSimAceitouSalvar
    : storage.setNaoAceitouSalvar

    setAceitouOuNao()

    const enderecoCompleto = formataEndereco($inputPaginaInicial.value)
    $inputPaginaInicial.value = enderecoCompleto

    storage.setPaginaInicial(enderecoCompleto)
}