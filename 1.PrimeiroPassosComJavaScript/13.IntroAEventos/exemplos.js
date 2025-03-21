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