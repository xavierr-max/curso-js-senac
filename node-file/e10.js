const prompt = require('prompt-sync')();

let num1 = prompt("Entre com primeiro valor: ")
let num2 = prompt("Entre com segundo valor: ")

if (num1 > num2)
    return console.log(`${num1} > ${num2}`)
else if (num1 < num2)
    return console.log(`${num1} < ${num2}`)
else
    return console.log(`${num1} = ${num2}`)
