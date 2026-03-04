function ToCalculateImc()
{
    // 1. variaveis que recebem o request
    let userWeight = Number(document.getElementById('weight').value);
    let userHeight = Number(document.getElementById('height').value);
    
    let response;

    // 2. calculo do imc
    let imc = Number((userWeight/userHeight**2)).toFixed(2);
    response = `Seu IMC é: ${imc}. `

    // 3. validacoes
    if(imc < 18.5)
        response += "Está abaixo do peso"
    else if (imc < 25)
        response += "Peso normal"
    else
        response += "Está acima do peso"

    // 4. retorno da requisicao
    document.getElementById('result').innerText = response
}