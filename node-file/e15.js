const prompt = require('prompt-sync')();

let text = prompt("Digite um texto: ");
let isValid = true; 
let less = text.length - 1;

console.log(text.length / 2)

for (let i = 0; i < text.length / 2 ; i++) 
{
    if (text[i] !== text[less - i])
    {
        isValid = false;
        break;
    }
}

console.log(isValid);




