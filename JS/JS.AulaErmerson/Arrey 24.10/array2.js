// let carros = ["Carros", 'Fusca', `Prisma`, 'HB20']

// let car1 = carros.pop()
// console.log (carros);

// carros.unshift (car1);
// console.log (carros);

// let car2 = carros.join (' * ')
// console.log (car2.toUpperCase ());
// console.log ('===========');
// console.log ('===========');

// let notas = [
//     [2, 6, 9,10], //0
//     [3, 4, 5, 8] // 1
// //   0  1  2  3
// ]
// delete notas [1] [2]
// console.log (notas [1][2]=10);
// console.log (notas);


// Crie um array com 5 frutas. 
// Remova o último elemento do seu array
// Agora., adicione a fruta ''Banana'' no último elemento do array
//Remova o segundo elemento do array [1]  ----------
// Passe seu array para string com o método join utilizando o " - "
// Apresente em tela o LOG



let frutas = ['Kiwi', "Banana", `Morango`, 'Abacaxi', 'Manga'];

frutas.pop();

frutas.push("Banana");
console.log(frutas);

// let removerElemento = valores.shift ()

//  console.log (valores);
//  console.log (removerElemento);

let resultado = frutas.join(' - ');
console.log(frutas);
