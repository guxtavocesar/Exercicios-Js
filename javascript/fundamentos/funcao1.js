// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3) // Soma normal
imprimirSoma(2) // Not a number pois somará 2 com algo undefided
imprimirSoma(2, 5, 6, 8) // Soma os dois primeiros números e ignora o resto
imprimirSoma() // Not a number pois as duas variáveis são Undefided

// Funcao com retorno
function soma(a, b = 1){
    return  a + b
}
    console.log(soma(2, 3))
    console.log(soma(2))