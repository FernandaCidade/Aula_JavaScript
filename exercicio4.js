// Faça um programa que receba um número do usuário e informe
// se este número é par ou ímpar.


let prompt = require("prompt-sync")();

let num = parseFloat(prompt("Digite um número: "))
let total = num%2

if(total === 2 || total === 0 ){
    console.log("Par")
}else {
    console.log("Impar")
}

console.log(total)