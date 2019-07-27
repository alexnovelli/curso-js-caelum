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

$botaoLimpaTudo.addEventListener("click", function () {
    const chavesPermanentes = [
        "aceitouSalvar",
        "aceitouTermos"
    ]

    const listaChavesLocalStorage = Object.keys(localStorage)
    for (let chave of listaChavesLocalStorage) {
        const isChavePermanente = chavesPermanentes.includes(chave)

        if (!isChavePermanente) {
            localStorage.removeItem(chave)
        }
    }

    const listaChavesSessionStorage = Object.keys(sessionStorage)
    for (let chave of listaChavesSessionStorage) {
        sessionStorage.removeItem(chave)
    }

    window.location.reload()
})