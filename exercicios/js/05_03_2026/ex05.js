function Media(arr)
{
    let resposta = (arr[0] + arr[1] + arr[2]) / arr.length

    let message = `A nota do aluno foi ${resposta.toFixed(2)}. `
     
    if (resposta >= 7)
        return message + "O aluno está aprovado."
    else if (resposta < 3)
        return message + "O aluno está reprovado."
    else
    {
        let rec = (resposta * 2 - 15) * -1  
        let retorno = `O aluno precisa de ${rec.toFixed(2)} na PF.`

        return message + "O Aluno está em recuperação. " + retorno
    }   
}

function Calcular()
{
    let n1 = Number(document.getElementById('nota1').value)
    let n2 = Number(document.getElementById('nota2').value)
    let n3 = Number(document.getElementById('nota3').value)
    
    let notas = [n1, n2, n3]

    let med = Media(notas)

    document.getElementById('resultado').innerText = med
}