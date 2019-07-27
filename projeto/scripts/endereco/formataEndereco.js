function formataEndereco(enderecoPraFormatar) {
    if (
        enderecoPraFormatar.substring(0, 7) !== "http://" &&
        enderecoPraFormatar.substring(0, 8) !== "https://"
    ) {
        enderecoPraFormatar = "http://" + enderecoPraFormatar
    }
    return enderecoPraFormatar
}

export { formataEndereco }