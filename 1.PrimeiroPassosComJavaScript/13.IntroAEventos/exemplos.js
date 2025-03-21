// Exemplo 1
var btn = document.querySelector("button"); //guarda uma referência ao botão(html) na variável btn

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.onclick = function () { //manipulador de eventos onclick
    var rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    document.body.style.backgroundColor = rndCol;
};

//Exemplo acima reescrito, utilizando addEventListener() e removeEventListener()

var btn = document.querySelector("button");

function bgChange() {
    var rndCol = 
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    document.body.style.backgroundColor = rndCol;
}

btn.addEventListener("click", bgChange); // 2 parâmetros, o nome do evento para o qual registramos esse manipulador, e o código que compreende a função do manipulador que queremos executar em resposta a ele (bgChange)

//Também é apropriada colocar todo o código denrto da função addEventListener(), em uma função anônima:

btn.addEventListener("click", function (){
    var rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    document.body.style.backgroundColor = rndCol;
});


