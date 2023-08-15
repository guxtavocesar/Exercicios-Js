class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

// Função Construtora
function Pessoa2(nome) {

    this.nome = nome
    this.falar = () => console.log(`Meu nome é ${this.nome}`) //console.log(`Meu nome é ${nome}`) 

}
const p2 = new Pessoa2('João')
p2.falar()

// document.getElementsByTagName('body')[0].onclick = p2.falar
