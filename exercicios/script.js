//1 -  soma simples
function somar(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    document.getElementById("res1").innerText = "Resultado: " + (num1 + num2);
}

function verificarIdade(){

    let idade = Number(document.getElementById("idade").value);
    let res;

    if(idade >= 18){
        res = "Maior de Idade"
    }
    else{
        res = "Menor de idade"
    }

    document.getElementById("res2").innerText = "Resultado: " + res;
}

function parImpar(){

    let numero = Number(document.getElementById("numero").value);
    let res;

    if(numero % 2 == 0){
        res = "O número é par"
    }
    else{
        res = "O número é ímpar"
    }

    document.getElementById("res4").innerText = "Resultado: " + res;
}