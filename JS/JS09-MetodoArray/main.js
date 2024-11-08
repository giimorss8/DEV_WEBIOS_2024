// Array

let frutas = ["Abacaxi",
     "Banana",
     "Morango",
     "Uva",
     "Limão",
     "Pitaya",
     "Maçã",
     "Kiwi"]

frutas.forEach(Percorrer)

function Percorrer(valor, indice) {
     console.log(valor); //conteúdo da posição
     console.log(indice) // número da posição
}

//      for (i = 0; i <= frutas.length ; i++) {
// console.log (frutas [i]);
//console.log (i)
//      }


//nome de usuário e pontuação
// array bid
let infoUsuario = [["Ana, 1346"],
["Pedro, 2335"],
["Caio", 566]
]

infoUsuario.forEach((valor, indice) => {
     console.log(indice[1])
}


)

//Math.currently / Math.max / Math.min /math.sqrt
let numeros = [4, 9, 16, 25, 78, 34]

//trazer um novo array atualizado com a raiz quadrado de cada número do array
let numerosDois = numeros.map(Math.sqrt)
let maiorNumero = Math.max.apply
let menorNumero = Math.min.apply(Math,)


//console.log (numeros)
//console.log (numerosDois)
console.log(maiorNumero)


//Crie um array de 8 números aleatórios > numerosTres

// let filtraNumero = numeros.filter ((valor)) => {
//      return
// }

let tarefa = [
     {
          tarefa: "Dormir",
          isFeita: true
     },
     {
          tarefa: "limpar",
          isFeita: false
     },
     {

          tarefa: "torcer",
          isFeita: true
     }
]

//retorne apenas as tarefas que estão marcadas como true
//find
tarefa.find ((item) => {

})