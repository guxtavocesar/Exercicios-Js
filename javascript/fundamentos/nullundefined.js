let valor // Nao inicializada
console.log(valor);

valor = null; // ausência de valor
console.log(valor);

const produto = {};
console.log(produto.preco);

const hero = {
    nome: 'batman',
    editora: 'dc'
};

console.log(hero);

const hero2 = hero;
 hero2.editora = "Marvel";

 console.log(hero2, hero);

 // Quando você iguala duas variaveis ou constantes que estão apontando para um objeto na memoria, como
 // no exemplo acima, onde foi criada a const hero e atribuida a ela atributos e valores do objeto e após 
 // isso você iguala a variavel hero = hero2 e muda o valor do objeto pela variavel hero2 que aponta para
 // o mesmo objeto da hero, o resultado sera a mesma para os dois, pois voce muda o objeto e não o
 // direcionamento, assim, como a hero e hero2 estão guardados apenas o caminho para o objeto, e o obejto
 // é alterado por qualquer uma delas, elas exibirão o mesmo valor por terem o mesmo caminho para o objeto.
 // Assim, mudanca de valor de atributo em objeto, independente da varivel, mudara para todas as variaveis
 // que possuem o caminho para aquele mesmo objeto.

 