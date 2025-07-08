let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

alert("Resultado da soma: " + (num1 + num2));

var global = "variavel global";
console.log(global);

function exemplo2(){
    var local = "varivael local";
    console.log(local);
}

exemplo2();

let x = 10;

if (x>5) {
    let y = 20;
    console.log("valor de y: ", y);
}

console.log(x);
console.log(y);



function saudacao(){
    alert("Bem vindo ao nosso site");
}