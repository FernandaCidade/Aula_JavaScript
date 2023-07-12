let prompt = require("prompt-sync")();


let animal = prompt("Digite o nome do animal para saber o que ele tem a dizer: ")

switch(animal){
    case 'Cachorro': 
        console.log("au auuu")
    break;

    case 'Gato':
        console.log("Ma-ah aaaahh")
    break;

    case 'Vaca':
        console.log("Muuuhh")
    break;

    case 'Papagaio':
        console.log("Fia da puta")
    break;

    default:
        console.log("Conheço não mulher")
     break;
}