//Faça um programa que receba o nome, cargo e salário de um funcionário. Se o funcionário ganhar abaixo de 1000 reais, calcule o salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário desse funcionário.

let prompt = require("prompt-sync")();

let nome = prompt("Digite o nome do funcionário: ")

let cargo = prompt("Digite o cargo de "+nome +": ")

let salario =  parseFloat(prompt("Digite o salário de " + nome + ": "))

if(salario < 1000){
    let aumento = salario * 1.1

    console.log("Novo salário de "+ nome +" para o cargo de "+ cargo +" é "+aumento)

    }else{
       console.log("O funcionário não atende os requisitos do aumento de salário")
       console.log(nome+" " + cargo +" " + salario.toFixed(2))
    }