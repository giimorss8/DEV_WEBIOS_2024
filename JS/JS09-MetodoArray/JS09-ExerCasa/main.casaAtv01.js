// Exerc 1: Crie um Array unidimensional com 8 posições contendo os seguintes valores 17, 43, 8, 4, 97, 56, 29 em cada posição irá conter um valor do tipo number.utilizando o método forEach crie uma função que receba cada valor do array e verifique se o número é par ou ímpar e exiba o resultado no console.log:

let valores = [17, 43, 8, 4, 97, 56, 29]
valores.forEach(ImparPar)

function ImparPar(valor) {

    if (valor % 2 == 0) {
        console.log(valor, "Par")
    }
    else {
        console.log(valor, "Impar")
    }
}



