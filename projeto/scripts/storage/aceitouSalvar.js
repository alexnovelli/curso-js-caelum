export let aceitouSalvar = JSON.parse(localStorage.getItem("aceitouSalvar"));

function setAceitouSalvar(valor) {
    aceitouSalvar = valor
    localStorage.setItem("aceitouSalvar", valor);
}

export function setSimAceitouSalvar() {
    setAceitouSalvar(true)
}
export function setNaoAceitouSalvar() {
    setAceitouSalvar(false)
}