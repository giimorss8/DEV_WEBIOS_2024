document.body.style.backgroundColor = "Purple"

//Tabuada de 1 a 10
//Pega o elemmento utilizando o ID
let valor = document.getElementById('recebeValor')
//Pega o elemento utilizando o atributo name
let resultado = document.getElementsById ('resultado')

const Tabuada = () => {
// value - guardar o valor que está sendo digitado dentro da varíavel
let guardaValor = valor.value;
for (i = 0; i <= 10; i++){
    // resultado = guardaValor *i
    // console.log (guardaValor *i)
    console.log(`O valor de ${guardaValor} x ${i} é igual a ${guardaValor *i}`);
} //innerHTML

}