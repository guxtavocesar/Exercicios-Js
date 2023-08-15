function binarySearch(arr, target) { // Aqui criamos a função que recebera uma Array e um valor como parametro
    let left = 0; // Declaração do indice minimo da lista
    let right = arr.length - 1; // Declarando o indice maximo da lista, o atributo length pega o indice maximo da array
  
    while (left <= right) { // Enquanto o minimo for menor do que o maximo
      let mid = Math.floor((left + right) / 2); // Variavel meio recebe o minimo mais maximo dividido por 2
  
      if (arr[mid] === target) { // Verifica se a lista recebida recebendo o meio como parametro é igual ao valor procurado
        return mid; // elemento encontrado, retorna o índice
      } else if (arr[mid] < target) {
        left = mid + 1; // descarta a metade esquerda
      } else {
        right = mid - 1; // descarta a metade direita
      }
    }
  
    return -1; // elemento não encontrado
  }
  
  // Exemplo de uso:
  const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
  const target = 2;
  const result = binarySearch(arr, target);
  
  if (result !== -1) {
    console.log(`O elemento ${target} foi encontrado no índice ${result}.`);
  } else {
    console.log(`O elemento ${target} não foi encontrado no array.`);
  }