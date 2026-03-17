// for (let i = 0; i < 5; i++)
// {
//     console.log("Repetição: " + i)
// }


// for (let i = 0; i <= 10; i++)
// {
//     if (i % 2 == 0)
//         console.log(i)
// }

// console.log(soma)

let numeros = [10, 150, 17, 450, 100, 50, 350]
let count = []

for (let i = 0; i < numeros.length; i++)
{
    if (numeros[i] % 2 === 0)
        count.push(numeros[i])
}

console.log(count.length)

