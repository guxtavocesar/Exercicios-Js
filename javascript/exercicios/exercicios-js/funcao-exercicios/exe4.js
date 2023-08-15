/* Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

function div(dividendo, divisor) {

    if (divisor === 0) {
        console.error("Erro: O divisor não pode ser igual a zero.");
        return;
      }

    resultado = Math.floor(dividendo / divisor)
    resto = dividendo % divisor

    console.log(`Resultado da divisão é: ${resultado}`)
    console.log(`Resto da divisão é: ${resto}`)
}

div(5, 2)
div(10, 3)