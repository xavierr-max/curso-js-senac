// function mudarTexto()
// {
//     let elemento = document.getElementById('titulo');
//     elemento.innerText = 'Olá mundo!';
//     elemento.style.color = 'blue';
// }

// let user = prompt("Digite a idade: ");
// console.log(verificarIdade(user));

// function verificarIdade()
// {
//     let idade = document.getElementById('idade').value;
//     let mensagem = idade;

//     idade >= 18
//     ? mensagem = "Maior de idade"
//     : mensagem = "Menor de idade";

//     document.getElementById('resultado').innerText = mensagem
// }

function ValueType() 
{
  let valueType = document.getElementById('type').value;
  let message;

  let res = valueType % 2 === 0 
  ? "Par" 
  : "Impar";
  
  if (valueType == 0)
    res = "o valor é zero"

  message = res;

  document.getElementById('result').innerText = message;
}
