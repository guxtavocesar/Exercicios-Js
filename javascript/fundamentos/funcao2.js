// Armazenando funcao em uma variavel
const imprimirSoma = function (a, b){ // Funcao anonima
    console.log(a +b)
}

imprimirSoma(2, 3)

// Armazenando funcao Arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))