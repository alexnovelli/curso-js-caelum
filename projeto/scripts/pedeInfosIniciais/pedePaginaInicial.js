import { aceitouSalvar as storageAceitouSalvar } from "/scripts/storage/aceitouSalvar.js"
import {
    paginaInicial,
    setPaginaInicial
} from "/scripts/storage/paginaInicial.js"

import { formataEndereco } from "/scripts/endereco/formataEndereco.js"

if (storageAceitouSalvar === true) {
    let paginaInicialPadrao = paginaInicial;
    
    if (!paginaInicialPadrao) {
        paginaInicialPadrao = prompt('Escolha uma página inicial');
    }
    
    if (paginaInicialPadrao) {
        const enderecoCompleto = formataEndereco(paginaInicialPadrao)

        $janelaPrincipal.src = enderecoCompleto;
        $inputEndereco.value = enderecoCompleto;

        setPaginaInicial(enderecoCompleto);
    }
}
