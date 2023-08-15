var teste = 5

console.log(teste)

let pessoa = {
    nome: 'Matheus',
    idade: 29,
    falar: function() {
        console.log('Olá, tudo bem?')
    },
    dizerNome: function(){
        console.log('O meu nome é ' + this.nome)
    },
    aniversario: function(){
        this.idade += 1
    },
}

pessoa.dizerNome()

console.log(pessoa.idade)

pessoa.aniversario()
pessoa.aniversario()
pessoa.aniversario()

console.log(pessoa.idade)