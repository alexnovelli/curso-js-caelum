console.log("=== FETCH ===");

/// fetch().then().catch() ==> METHOD CHAIN - funções atreladas e sequenciais semelhante jQuery

// THEN() = sucesso
// CATCH() = erro

fetch("https://viacep.com.br/ws/09090440/json/")
    .then( resposta => resposta.json() )
    .then( endereco => console.log(endereco.logradouro) )
    .catch( arguments => console.log("erro", arguments) )