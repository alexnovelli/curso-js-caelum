import * as storagePaginaInicial from "/scripts/storage/storage.js"
import * as storageAceitouSalvar from "scripts/storage/aceitouSalvar.js"
import { Endereco } from "/scripts/endereco/Endereco.js"
import { CakeEnderecoInvalidoError } from "/scripts/erros/CakeEnderecoInvalidoErrorClasse.js"

$inputPaginaInicial.value = storagePaginaInicial.paginaInicial;
$inputPermitiuSalvar.checked = storagePaginaInicial.aceitouSalvar;

$botaoSalvar.onclick = salvar

function salvar() {
    const funcaoEscolhida =
        $inputPermitiuSalvar.checked === true
            ? storageAceitouSalvar.setAceitou
            : storageAceitouSalvar.setNaoAceitou

    funcaoEscolhida()

    try {
        const enderecoCompleto = new Endereco($inputPaginaInicial.value)

        $inputPaginaInicial.value = enderecoCompleto.toString()
        storagePaginaInicial.setPaginaInicial(enderecoCompleto)
    } catch (error) {
        if (error instanceof CakeEnderecoInvalidoError) {
            console.dir(error)
            console.log('É CakeEnderecoInvalidoError', error instanceof CakeEnderecoInvalidoError)
            console.log('É erro', error instanceof Error) $inputPaginaInicial.value = ''
            console.warn(error.toString())
            alert(error.message)
        } else {
            throw error
        }
    }

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