console.log("Exemplo 3")

let prompt = require("prompt-sync")();


//snake_case
//PascalCase
//camelCase

//shift + alt + seta para baixo para duplicar a linha

let primeiraNota = parseFloat(prompt("Digite a primeira nota: "))
let segundaNota =  parseFloat(prompt("Digite a Segunda nota: "))

let soma = primeiraNota + segundaNota

let media = soma / 2

console.log("A media é: " + media)