let nomes = ["ana", "douglas", "joão", "Fábio", "Pedro", "Erick"]

function MostrarNomes()
{
    // vincula o conteudo do ul no html com o id com DOM
    let lista = document.getElementById("listaNomes")

    // o conteudo html do ul recebe uma string vazia
    lista.innerHTML = ""

    // cria linhas para a lista percorrendo todos os nomes do array nomes
    for (let i = 0; i < nomes.length; i++)
    {
        // cria o molde do objeto linha de ul com DOM
        let item = document.createElement("li")

        // o conteudo da linha recebe os nomes por vez que o laço percorrer 
        item.textContent = nomes[i]

        // cria o objeto
        lista.appendChild(item)
    }
}