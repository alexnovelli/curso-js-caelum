import { Endereco } from "/scripts/endereco/Endereco.js";

export function carregar(seiLah) {
    let endereco

    if (typeof seiLah === "string" || !seiLah) {
        endereco = new Endereco(seiLah)
    } else if (seiLah instanceof Endereco) {
        endereco = seiLah
    } else {
        throw new Error(`
            Você passou um endereço que não é nem string nem de Endereco:
                Valor: ${JSON.stringify(seiLah)}
                Tipo: ${typeof seiLah}
        `)
    }

    $janelaPrincipal.src = endereco.urlCompleta
    $inputEndereco.value = endereco.urlCompleta
}