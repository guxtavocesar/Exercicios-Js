// Função em JS é First-Class Object (Citizens)
// Higher-order Function

// Criar uma função literal
function fun1() { }

// Armazenar em uma variável
const fun2 = function() {}

// Armazenar em uma array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}

obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passar função como parâmetro
function run(fun) {
    fun()
}

run(function () {console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma(a ,b) {
    return function (c){
        return function (d){
            console.log(a + b + c + d)
        }
    }
}

soma(5, 5)(9)(10)

const soma1 = soma(5, 5)
const soma2 = soma1(9)
const soma3 = soma2(10)