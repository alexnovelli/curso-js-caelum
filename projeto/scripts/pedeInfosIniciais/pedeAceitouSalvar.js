import * as storage from "/scripts/storage/aceitouSalvar.js"

//let aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar')); // o true grava como string e dá erro no (aceitouSalvar === true), por isso o parse

if (storage.aceitouSalvar === null) {
    const aceitou = confirm('Aceita que as infos sejam salvas?');

    if (!aceitou) {
        alert('Você pode mudar isso em configurações (será mesmo?)');
    }
    
    const setAceitouOuNao =
    aceitou === true ? storage.setSimAceitouSalvar : storage.setNaoAceitouSalvar

    setAceitouOuNao()
}
