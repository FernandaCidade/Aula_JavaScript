//Uma empresa decide dar aumento de 30% aos funcionários cujo
//salário é inferior a 500 reais. Escreva um programa que receba o
//salário de um funcionário e imprima o valor do salário reajustado ou
//uma mensagem caso o funcionário não tenha direito a aumento.

let prompt = require("prompt-sync")();

let nome = prompt("Digite o nome do funcionário: ")

let salario = parseFloat(prompt("Digite o salario de " + nome + ": "))

if(salario < 500){
    let aumento = salario * 1.3

    console.log("Após o reajuste, o salario ficou: " + aumento)
}else{
    console.log("O funcionário não tem direito a reajuste")
}