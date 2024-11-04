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
  let infoBruno = aluno.find(aluno => aluno.nome === 'Bruno');
console.log(infoBruno);
  
  // 3 - Nota da Maria:
  let notaMaria = aluno.find(aluno => aluno.nome === 'Maria').nota;
console.log(notaMaria);
  
  // 4 - Retorno do array em formato JSON:
  let jsonArray = JSON.stringify(aluno);
console.log(jsonArray);
  