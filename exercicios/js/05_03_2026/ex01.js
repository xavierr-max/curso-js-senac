function VerificarNumero()
{
    let numero = document.getElementById('numero').value;
    let message;

    
    if(numero % 2 === 0)
        message = "Número é par";
    else 
        message = "Número é impar";
    
    if(numero == 0)
        message = "O valor é zero";

    document.getElementById('resultado').innerText = message;
}