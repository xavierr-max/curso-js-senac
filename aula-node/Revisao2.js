const prompt = require('prompt-sync')();

// const nome = prompt('Digite seu nome:');

// console.log(nome)

// function OlaMundo()
// {
//     return console.log('Olá')
// }

// OlaMundo();

// function Saudacao(nome)
// {
//     return console.log("Olá " + nome);
// }

// Saudacao("Maxwell");

// function Soma(a, b)
// {
//     return a + b;
// }

// let resultado = Soma(4, 8);
// console.log(resultado)

// function verificarIdade(idade)
// {
//     return idade >= 18 ? "Maior de idade" : "Menor de idade";
// }

// let user = prompt("Digite a idade: ");
// console.log(verificarIdade(user));

//import { Dobro } from './teste.js'

// function Dobro(num)
// {
//     return num * 2;    
// }

// function MostrarDobro(valor)
// {
//     return (Dobro(valor));
// }

// let input = prompt("Entre com um valor: ");
// console.log(MostrarDobro(input));

function Imc(weight, height)
{
    if (weight == 0 || height == 0)
        return "O valor não pode ser zero."
        
    const res = (weight / (height*height)).toFixed(2);

    if (res < 18.5)
        return "Abaixo do peso " + res
    else if (res > 25)
        return "Acima do peso " + res
    else
        return "Peso normal " + res
}

let ToCallImc = (value1, value2) =>
{
    return Imc(value1, value2);
}

let input1 = prompt("Insira o peso: ");
let input2 = prompt("Insira a altura: ");
console.log(ToCallImc(input1, input2));




