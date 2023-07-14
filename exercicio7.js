// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é &quot;admin&quot; e a senha é &quot;senha123&quot;. Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.


let prompt = require("prompt-sync")();

let username = prompt("Digite o usuário: ")

let senha = prompt("Digite a senha: ")

if (username == "admin" && senha == 1234){
    console.log(" Foi bixa")
} else{
    console.log("num foi")
    console.log (username, senha)
}