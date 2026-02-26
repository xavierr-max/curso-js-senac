const prompt = require('prompt-sync')();

let value = prompt("Insira um valor: ")
if (value % 2 == 0)
    return console.log("Par")
else
    return console.log("Impar")