console.log("=== ASYNC AWAIT ===");

// console.log(fetch("https://viacep.com.br/ws/09090440/json/")); ==> Promise

async function getAddress(url) {
    try {
        let response = await fetch(url);
        let endereco = await response.json();
        console.log(endereco.logradouro);
    } catch (exception) {
        console.log("Deu merda", exception);
    }
}

getAddress("https://viacep.com.br/ws/09090440/json/");