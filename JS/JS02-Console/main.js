//Quando eu quero criar uma variavel, preciso inserir antes do nome as palavras reservada: var/let/const.


// var: Escopo de função global, hoisting (mas acessível como undefined antes da declaração):
var nomeAluno = 0

var nomeAluno = "Joaozinho"

// let: escopo de bloco, hoisting (Não poderão ser redeclaradas/repetidas):
let Teste = 0
console.log (Teste)

Teste = "Chuva"
console.log

// const: escopo de bloco, não pode ser reatribuído, hoisting (não acessível antes da declaração).Não podem ser redeclaradas e não podem ter seu valor alterado, uma vez inicializada o seu valor será o mesmo até o fim do programa:
const Bolinho = 0

// Em geral, let e const são recomendados na maioria dos casos devido ao seu escopo mais restrito e comportamentos mais previsíveis.

// Valores e tipos de dados:
// Valores: ''homer'' Quantidade de bits que representam a info
// Números especiais: Pág 12
// String: Representa TextDecoder, deverá estar dentro das aspas. PS: 'pipoca' ou ''lorem....'';