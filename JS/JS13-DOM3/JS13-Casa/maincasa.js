// Utilizando o DOM crie um programa que, calcule o novo salário de um funcionário, com um aumento de 17% em cima do valor atual, mais um reajuste anual de 215 reais.

function calcularNovoSalario() {

    let salarioAtual = parseFloat(document.getElementById('salario').value);
    
    if (!salarioAtual || salarioAtual <= 0) {
        alert('Digite um salário válido.');
        return;
    }
    let novoSalario = salarioAtual * 1.17 + 215;
    
    // Você deve ter um botão para chamar a função e calcular o novo salário do usuário e um campo input para o usuário inserir o salário atual.
    document.getElementById('resultado').innerText = 
    `O novo salário será: R$ ${novoSalario.toFixed(2)}`;
}

    