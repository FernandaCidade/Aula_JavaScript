// Cálculo de desconto progressivo
// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
// pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
// aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.


let prompt = require("prompt-sync")();


let calTotal = parsefloat(prompt("Digite o total da compra: "))
let parcela = calTotal


if(calTotal <= 100){
    console.log("Cliente não tem direito a descontos")
}else if(calTotal >= 100.01 || calTotal <= 200){

    let parcela = parcela * 1.1

    let desconto =  calTotal - parcela

    console.log("Cliente com direito a desconto de 10%, o novo total da compra ficou: "+desconto)

}