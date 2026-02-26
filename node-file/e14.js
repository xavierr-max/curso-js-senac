const prompt = require('prompt-sync')();

let phrase = prompt("Insira um texto: ")
let removeSpaces = phrase.trim().length;
console.log(removeSpaces)
