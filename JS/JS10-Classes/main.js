class Aluno {
    constructor (nome, ano, altura, isCracha, isCamisa, cor) {
nome: nome;
ano: ano;
altura: altura;
isCracha: isCracha;
isCamisa: isCamisa;
cor: cor;
    }
}

//Instancias == cópias

let aluno1 = Aluno("Manasses", 27, 1,90, true, true, "Black") ;


let aluno2 = new Aluno ("Jeferson", 19, 1.75, true, true, "AllWhite" )
console.log (aluno1)
console.log (aluno2)