// Crie uma classe chamada contaBancaria, no método constructor crie atributos nome, idade, salário, sexo, agência, conta, numeroConta.
//Crie os métodos contaPoupança, contaCorrente e contaEstudante.As regras paras as contas são a seguinte:

class contaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, numeroConta) {
      this.nome = nome;
      this.idade = idade;
      this.salario = salario;
      this.sexo = sexo;
      this.agencia = agencia;
      this.conta = conta;
      this.numeroConta = numeroConta;
    }
  
    // - Conta poupança com taxa de 1,5% ao mês.
    contaPoupanca() {
        let taxaPoupanca = 0.015; 
        return this.salario - (this.salario * taxaPoupanca);
      }

    // - Conta corrente com taxa de 3,6% ao mês.
    contaCorrente() {
      let taxaCorrente = 0.036; 
      return this.salario - (this.salario * taxaCorrente);
    }
  
    // - Conta estudante com taxa de 1,2% ao mês.
    contaEstudante() {
      let taxaEstudante = 0.012; 
      return this.salario - (this.salario * taxaEstudante);
    }
  }
  
  // Instanciando 3 objetos com os dados de cada tipo de conta
  let contaPoupancaUser = new contaBancaria("Luis Carlos", 34, 3000, "Masculino", "1234", "Poupança", "98765");
let contaCorrenteUser = new contaBancaria("Giovanna Miranda", 20, 1500, "Feminino", "1235", "Corrente", "56789");
let contaEstudanteUser = new contaBancaria("Mauro Ramos", 50, 5500, "Masculino", "1236", "Estudante", "2123344");
  

  // Imprimir no console os dados do usuário e o novo salário com o desconto aplicado para cada conta
  console.log("Cliente 1: ", contaPoupancaUser.nome, "Salário Novo (Poupança): R$", contaPoupancaUser.contaPoupanca().toFixed(2));
  console.log("Cliente 2: ", contaCorrenteUser.nome, "Salário Novo (Corrente): R$", contaCorrenteUser.contaCorrente().toFixed(2));
  console.log("Cliente 3: ", contaEstudanteUser.nome, "Salário Novo (Estudante): R$", contaEstudanteUser.contaEstudante().toFixed(2));
  