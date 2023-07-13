
// Faça um programa receba dois valores e imprima qual é o maior
// número digitado.

let prompt = require("prompt-sync")();

let num1 = parseFloat(prompt("Digite o primeiro número: "))
let num2 = parseFloat(prompt("Digite o segundo numero: "))

if(num1 > num2 ){
    console.log("Número 1 é o maior número")
}else{
    console.log("Número 2 é o maior número")
}