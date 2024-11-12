class Aluno {
    constructor (nome, idade, altura, isCracha, isCamisa, cor) {
nome: nome;
idade: idade;
altura: altura;
isCracha: isCracha;
isCamisa: isCamisa;
cor: cor;
    }
}

//Instancias == cópias

let aluno1 = Aluno("Manasses", 27, 1,90, true, true, "Black") ;


let aluno2 = new Aluno ("Jeferson", 19, 1.75, true, true, "AllWhite" )
console.log (´´