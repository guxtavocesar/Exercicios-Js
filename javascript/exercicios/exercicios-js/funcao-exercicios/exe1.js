// Criar uma função que recebe dois parâmetros e faz as 4 operações básicas da mátematica com eles

function operacoes (a, b) {
    soma = a + b
    sub = a - b
    div = a / b 
    mult = a * b

    return `Soma: ${soma}, Sub ${sub}, Divisao: ${div}, Mult: ${mult}`
}

console.log(operacoes(5, 10))
console.log(operacoes(45, 5))
console.log(operacoes(20, 10))
console.log(operacoes(50, 100))
