const prompt = require('prompt-sync')();

let currentAge = prompt("Digite uma idade: ")

if (currentAge >= 18)
    return console.log("maior de idade")
else
    return console.log("menor de idade")