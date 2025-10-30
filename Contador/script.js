function contar(){
    const num = parseInt(document.getElementById('numeroInput').value)

    if(isNaN(num)){
        document.getElementById('result').textContent = 'Informe um número válido'
        return
    }

    var resultadoStr = ""

    if(num <= 10000){
    for(var cont = 1; cont <= num; cont++){
        resultadoStr = resultadoStr + cont + "<br>"
    }
    document.getElementById('result').innerHTML = resultadoStr
}else{
    document.getElementById('result').innerHTML = 'Digite um número menor que 10.000'
}
}