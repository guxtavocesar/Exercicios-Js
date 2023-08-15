// Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004
// e retorne R$0,30 (observe a vírgula e o ponto)

function arredondar(numDecimal) {
    let numero = numDecimal;
    let valor = numero.toFixed(2);
    let resultado = valor.replace(".", ",");

    return console.log(`R$ ${resultado}`)
}

arredondar(0.30000000000000004)
arredondar(0.54862152520002553)
arredondar(0.20000000000000009)