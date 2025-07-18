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

function contarCaracteres(){

    let texto = document.getElementById("texto").value;
    let res;

    res = texto.length;

    document.getElementById("res3").innerText = "Resultado: " + res;
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

function caixaAlta(){

    let nome = document.getElementById("nome").value;
    let res;


    document.getElementById("res5").innerText = "Resultado: " + nome.toUpperCase();
}

function verificarMaior(){

    let nume1 = Number(document.getElementById("nume1").value);
    let nume2 = Number(document.getElementById("nume2").value);

    if(nume1 > nume2){
        document.getElementById("res6").innerText = "O primeiro número é o maior: " + nume1;
    }
    else{
        document.getElementById("res6").innerText = "O segundo número é o maior: " + nume2;

    }

}

function tabuada(){

    let numer = Number(document.getElementById("numer").value);
    let res = "";

    for(let i = 1; i <= 10; i++){
    
        res += numer + " X " + i + " = " + (numer * i) + "\n";
    }
    
    document.getElementById("res7").innerText = res;

}

function contador(){

    let res = "";

    for(let i = 1; i <= 10; i++){
        res += i + "\n";
    }

    document.getElementById("res8").innerText = res;

}

function mediaNotas(){

    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);

    let media = (nota1 + nota2 + nota3)/3;

    if(media >= 6){
        document.getElementById("res9").innerText = "Aluno Aprovado! \n Média: " + media.toFixed(2);
    }
    else{
        document.getElementById("res9").innerText = "Aluno Reprovado. \n Média: " + media.toFixed(2);
    }
}

function conversorTemperatura(){

    let graus = Number(document.getElementById("graus").value);
    let f =  (graus * 9/5) + 32;

    document.getElementById("res10").innerText = "Temperatura em Fahrenheit (°F): " + f;

}

function diaSemana(){

    let num = Number(document.getElementById("numeroo").value);
    let res = document.getElementById("res11");

      if (num === 1) {
        res.innerText = 'Domingo';
      } else if (num === 2) {
        res.innerText = 'Segunda-feira';
      } else if (num === 3) {
        res.innerText = 'Terça-feira';
      } else if (num === 4) {
        res.innerText = 'Quarta-feira';
      } else if (num === 5) {
        res.innerText = 'Quinta-feira';
      } else if (num === 6) {
        res.innerText = 'Sexta-feira';
      } else if (num === 7) {
        res.innerText = 'Sábado';
      } else {
        res.innerText = 'Erro: Digite um número válido entre 1 e 7.';
      }

}

function senhaSimples(){

    let senha = document.getElementById("senha").value;

    if(senha == "1234"){
        document.getElementById("res12").innerText = "Acesso Permitido!";
    }
    else{
        document.getElementById("res12").innerText = "Senha Incorreta.";
    }

}

function contagemRegressiva(){
    
    let res = "";

    for(let i = 10; i >= 1; i--){
        res += i + "\n";
    }

    document.getElementById("res13").innerText = res;
}