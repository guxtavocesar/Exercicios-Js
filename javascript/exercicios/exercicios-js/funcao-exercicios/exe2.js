// Criar uma função para classificar triângulos utilizando as condições matemáticas para 
// um trinângulos existir.

function classTriangulo (l1, l2, l3) {

    if(l1 < l2 + l3 && l2 < l1 + l3 && l3 < l1 + l2){
        if(l1 && l2 && l3 == l1){
            return "O triângulo informado é classificado como EQUILÁTERO pois possui todos os lados iguais"
        } 
        else if(l2 != l1 && l3 != l1 && l3 != l2) {
            return "O triângulo informado é classificado como ESCALENO pois possui todos os lados diferentes"
        }
        else {return "O triangulo informado é classificado como ISÓSELES pois possui dois lados iguais"}
    }
    else {return "Os valores informados para o triângulo não são válidos!"}

}

console.log(classTriangulo(5, 5, 5))
console.log(classTriangulo(5, 5, 3))
console.log(classTriangulo(5, 4, 3))

console.log(classTriangulo(10, 4, 3))
console.log(classTriangulo(4, 10, 3))
console.log(classTriangulo(3, 4, 10))