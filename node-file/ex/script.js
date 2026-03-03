// function mudarTexto()
// {
//     let elemento = document.getElementById('titulo');
//     elemento.innerText = 'Olá mundo!';
//     elemento.style.color = 'blue';
// }

function verificarIdade()
{
    let idade = document.getElementById('idade').value;
    let mensagem = idade;

    idade >= 18 
    ? mensagem = "Maior de idade"
    : mensagem = "Menor de idade";

    document.getElementById('resultado').innerText = mensagem
}

// let user = prompt("Digite a idade: ");
// console.log(verificarIdade(user));