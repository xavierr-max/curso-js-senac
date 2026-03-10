let prompt = require('prompt-sync')()

let v1 = Number(prompt("Insira o primeiro valor: "))
let v2 = Number(prompt("Insira o segundo valor: "))

let resultSum = v1 + v2 + " é a soma, "
let resultMul = v1 * v2 + " é o produto"

console.log(resultSum + resultMul)