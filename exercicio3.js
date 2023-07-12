// Faça um programa que receba um número inteiro do usuário e informe
// se este número é positivo ou negativo.

let prompt = require("prompt-sync")();


let numero = parseFloat(prompt("Digite um número: "))

if(numero >= 0){

    console.log("Este número é positivo")

}else{
    console.log("Este número é negativo")
}

