const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.length)

console.log(valores.pop()) // Mostra e deleta o ultimo elemento da array
delete valores[0] // Deleta valores de indice especifico

console.log(typeof valores) // Mostra o tipo da Array, que é um objeto

console.log(valores)