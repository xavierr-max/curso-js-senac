function Criar()
{
    let inputVar = Number(document.getElementById('numero').value)
    let pVar = document.getElementById('resultado')

    pVar.innerHTML = " "

    for (let i = 1; i <= 10; i++)
    {
        let item = document.createElement('li')

        item.textContent = `${inputVar} x ${i} = ${inputVar * i}`

        pVar.appendChild(item)
    }

    document.getElementById('numero').value = " "
}