// Array constando os alunos:
let aluno = [
    { nome: 'Ana', idade: 17, nota: 8, ano: '2ºB' },
    { nome: 'Bruno', idade: 16, nota: 6, ano: '2ºC' },
    { nome: 'Veronica', idade: 16, nota: 9, ano: '2ºC' },
    { nome: 'Marta', idade: 15, nota: 5, ano: '3ºC' },
    { nome: 'Brenno', idade: 19, nota: 6, ano: '3ºC' },
    { nome: 'Maria', idade: 14, nota: 4, ano: '1ºF' }
];
  
  // 1 - Retorno com todo o array:
  console.log(aluno);
  
  // 2 - Informações do Bruno: 
console.log(aluno[2]);
  
  // 3 - Nota da Maria:
  console.log(aluno[5].nota);
  
  // 4 - Retorno do array em formato JSON:
let JsonAluno = JSON.stringify(aluno);
console.log(JsonAluno);

//JSON > OBJ = parse /// OBJ > JSON = Stringfy
  