Number.prototype.entre = function (inicio, fim){ // Number.prototype permite adicionar novas funcionalidades a instancias do tipo number, nesse caso, caso seja passado um valor Number chamando a função, ela executará essa função no number
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9,10)) {
        console.log("Quadro de honra")
    } else if(nota.entre(7, 8.99)){
        console.log("Aprovado")
    } else if(nota.entre(4, 6.99)){
        console.log("Recuperação")
    } else if(nota.entre(0, 3.99)){
        console.log("Reprovado")
    } else {
        console.log("Nota inválida")
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-2)
imprimirResultado(11)

Number.prototype.multi = function (){ // Number.prototype permite adicionar novas funcionalidades a instancias do tipo number, nesse caso, caso seja passado um valor Number chamando a função, ela executará essa função no number
    return this * 10
}

// Number.prototype permite adicionar função ou metodos em instancias do tipo number, isso caso chamarmos
// a função. Nesse exemplo estamos usando o Number.prototype para adicionar a funcao multi a valores number
// e ela sera executada corretamente caso implementação da notação . em um valor number, no caso do exemplo
// numero.multi(), aqui, apenas conseguimos implementar a função multi no numero gracas a estenção que o 
// Number.prototype fornece.

let numero = 50;
let string = 10;

console.log(numero.multi())
console.log(numero)
console.log(string.multi())