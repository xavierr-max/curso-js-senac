// ! necessita de um apagador de cache
let valoresArray = []

function Adicionar()
{
    let valorVar = Number(document.getElementById("valor").value)

    valoresArray.push(valorVar)
    
    document.getElementById("resultado").innerHTML = valoresArray 

    document.getElementById("valor").value = " "
}

function Calcular()
{
    let soma = 0;
    let media = 0;

    for (let i = 0; i < valoresArray.length; i++)
    {
        soma += valoresArray[i]
        media = soma / valoresArray.length
    }
    
    document.getElementById("resultado").innerHTML = media.toFixed(2)
}