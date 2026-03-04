const prompt = require('prompt-sync')();

let num = prompt("Digite o valor: ")

if (num <= 20 && num >= 10)
    return console.log(num)
else
    return console.log("O valor deve estar entre 10 e 20")