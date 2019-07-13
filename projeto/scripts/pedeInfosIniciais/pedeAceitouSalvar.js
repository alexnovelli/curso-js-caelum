const aceitouSalvarGlobal = (function () {
    'use strict';

    let aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar')); // o true grava como string e dá erro no (aceitouSalvar === true), por isso o parse

    if (aceitouSalvar === null) {
        aceitouSalvar = confirm('Aceita que as infos sejam salvas?');

        if (!aceitouSalvar) {
            alert('Você pode mudar isso em configurações (será mesmo?)');
        }
        localStorage.setItem('aceitouSalvar', aceitouSalvar);
    }

    return aceitouSalvar;

})();