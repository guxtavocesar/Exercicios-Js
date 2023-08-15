// Factory simples
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

function criarPessoa2(nome, sobrenome){
    return {
        nome,
        sobrenome
    }
}

console.log(criarPessoa2("Gustavo", "César"))