// array criado na inicializacao da aplicacao
let arrayNumbers = []

function Add()
{
    // vincula ao input de numero
    let inputNum = Number(document.getElementById("value")).value
    // vincula a lista 
    let p = document.getElementById("list")

    // a lista recebe uma string vazia
    p.innerText = " "
    // incrementa o input a lista arrayNumbers
    arrayNumbers.push(inputNum)
    
    // guarda o numero de itens do arrayNumbers 
    let count = arrayNumbers.length
    
    // deve criar uma linha para cada item do arrayNumbers
    for (let i = 0; i < arrayNumbers.length; i++)
    {
        // cria e guarda o molde do objeto 
        let item = document.createElement("li")

        // incrementa um conteudo ao molde da linha
        item.textContent = arrayNumbers[i]

        // cria a linha já preenchida
        p.appendChild(item)
    }

    // variavel inspirada em DTO
    let response = `${count} números foram incrementados a lista`

    // retorna para o html o response
    document.getElementById("result").innerText = response

    // limpa o input
    document.getElementById("value").value = " "
}