// ? 1. retorna a quantidade de elementos no array
// console.log(alunos.length);

// ? 2. retorna o indice do elemento
// console.log(alunos.indexOf("Max"));

// ? 3. incrementa mais um elemento no final do array (vulgo Add)
// alunos.push("Joao");
// console.log(alunos);

// ? 4. incrementa mais um elemento no inicio do array (vulgo Add)
// alunos.unshift("Oliveira")
// console.log(alunos)

// ?. remove o ultimo elemento do array
// alunos.pop(alunos)
// console.log(alunos)

// ?. remove o primeiro elemento do array
// alunos.shift()
// console.log(alunos)

// console.log(alunos[5])
// console.log(alunos[1])
// console.log(alunos)

// let notas = [10,20,30,50];
// console.log(notas[1]);

// let alunos = [
//   "Francisco",
//   "Max",
//   "Mikael",
//   "Vinicius",
//   "Leandro",
//   "Erick",
//   "Costa",
//   "Adson",
// ];

// function ToShowFirstStudent(list)
// {
//     console.log(list[0])
// }

// ToShowFirstStudent(alunos);

// let result;

// if (alunos.length > 5)
//     result = "Turma grande";
// else
//     result = "Turma pequena";

// console.log(result);

// let notas = [5,2,3]

// if (notas[0] >= 7)
//     console.log("Aprovado")
// else
//     console.log("Reprovado")

let alunos = [];

function AdicionarAluno() 
{
    let nome = document.getElementById("aluno").value;

    if (nome == "")
        document.getElementById("lista").innerText =
        "o valor não pode ser nulo ou vazio";
    else 
        alunos.push(nome);

    document.getElementById("lista").innerText = alunos;
}
