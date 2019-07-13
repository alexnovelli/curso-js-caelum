import aceitouSalvar from "/scripts/storage/aceitouSalvar.js"
import paginaInicial, {
    setPaginaInicial
} from "/scripts/storage/paginaInicial.js"

if (aceitouSalvar === true) {
    let paginaInicialPadrao = paginaInicial;
    
    if (!paginaInicialPadrao) {
        paginaInicialPadrao = prompt('Escolha uma página inicial');
    }
    
    if (paginaInicialPadrao) {
        if (
            paginaInicialPadrao.substring(0,7) !== 'http://' &&
            paginaInicialPadrao.substring(0,8) !== 'https://'
        ) {
            paginaInicialPadrao = 'http://' + paginaInicialPadrao;
        }

        $janelaPrincipal.src = paginaInicialPadrao;
        $inputEndereco.value = paginaInicialPadrao;

        setPaginaInicial(paginaInicialPadrao);
    }
}
