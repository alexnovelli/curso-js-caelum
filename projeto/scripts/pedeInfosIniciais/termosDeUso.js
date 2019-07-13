const aceitouOsTermosAntes = localStorage.getItem('aceitouOsTermos');

if (aceitouOsTermosAntes === null) {
    const nome = prompt("Olá, qual o seu nome?");
    const aceitouOsTermos = confirm(`
        Olá ${nome}!
        Antes de usar o Cake, precisamos que
        você aceite nossos termos de uso:
    
        - Você aceita que este software foi
            feito por pessoas que participaram
            do curso de Javascript.
    
        - Você aceita essa porra toda?
    `);
    if (!aceitouOsTermos) {
        alert(nome + ', para continuar é necessário que você aceite os termos de uso.')
        window.close();
    } else {
        localStorage.setItem('aceitouOsTermos', true);
    }
}
