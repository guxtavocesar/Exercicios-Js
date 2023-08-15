function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade) // Por conta da função arrow e seu contexto léxico, o this se refere a função
    }, 1000)
}

new Pessoa