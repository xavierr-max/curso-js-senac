let arrayNumbers = []

function Add()
{
    let inputNum = Number(document.getElementById("value")).value
    let p = document.getElementById("list")

    
    arrayNumbers.push(inputNum)
    
    let count = arrayNumbers.length
    
    p.innerText = ""
    
    for (let i = 0; i < arrayNumbers.length; i++)
    {
        let item = document.createElement("li")

        item.textContent = arrayNumbers[i]

        p.appendChild(item)
    }

    let response = `${count} números foram incrementados a lista`

    document.getElementById("result").innerText = response
}