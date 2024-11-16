var cheese = "Cheddar";

// Qualquer valor que não seja false, undefined, null, 0, NaN, ou uma string vazia ('') retorna true quando testado como uma instrução condicional

if (cheese) { 
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}

//
var shoppingDone = false;

if (shoppingDone) { // não precisa comprar se é === true
  var childsAllowance = 10;
  console.log(childsAllowance);
} else {
  var childsAllowance = 5;
  console.log(childsAllowance);
}

// aninhando if ... else

let clima = "chuvoso";
let nuvens = "sem";

if (clima != "limpo"){
    if (clima === "sem"){
        console.log("Feche as janelas");
    }
}

// Instruções switch

// Aprendizado ativo: um calendário simples

