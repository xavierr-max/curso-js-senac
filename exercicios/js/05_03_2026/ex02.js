function ToCalculate()
{
    // 1. declaracao das variaveis
    let firstGrade = Number(document.getElementById('grade1').value);
    let secondGrade = Number(document.getElementById('grade2').value);
    let response;

    // 2. operacao logica
    let average = Number((firstGrade + secondGrade) / 2);
    response = `A média do aluno é de ${average}`;

    // 3. retorno da requisicao
    document.getElementById('result').innerText = response
}