let shooping =  ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shooping);

var sequence = [1, 1, 2, 3, 5, 8, 13];
let random = ["tree", 123, [0, 1, 3]];
console.log(random);

// Acessando e modificando itens de uma array
console.log(shooping[0]);

// atribuir novo valor
shooping[0] = "tahini";
console.log(shooping[0]);

// Array multidimensional - array dentro de uma array
console.log(random[2][2]);

// Encontrando o comprimento de uma array
console.log(sequence.length);

//iterar sobre os itens de um array
for (let i = 0; i < sequence.length; i++) {
    console.log(sequence[i]);
}

//Convertendo entre strings e arrays
var myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

let myArray = myData.split(",");
console.log(myArray); //novo array organizado

// juntando os itens com um único separador - fazendo o inverso
let myNewString = myArray.join(",");
console.log(myNewString); // voltou ao que era antes

//outro jeito de converter um array em uma string
let dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
console.log(dogNames.toString());


//incluir um ou mais itens ao final do array
myArray.push("Cardiff");
console.log(myArray);
myArray.push("Bradford", "Brightoon");
console.log(myArray);

// O novo comprimento da array é retornado quando a chamada do método completa
// para armazenar o novo comprimento da array em uma variável:
let newLenght = myArray.push("Bristol");
console.log(myArray);
console.log(newLenght); //10

// remover o último item
console.log(myArray.pop());
// o item removido é retornado quando a chamada do método completa
// para armazená-lo
let removedItem = myArray.pop();
console.log(myArray);
console.log(removedItem);

//para inserir ou excluir itens no início do array

myArray.unshift("Edinburgh");
console.log(myArray);

let itemRemovido = myArray.shift();
console.log(itemRemovido);

// Aprendizado Ativo

//Imprimindo aqueles produtos
let total;
var products = ['Underpants:6.99',
    'Socks:5.99',
    'T-shirt:14.99',
    'Trousers:31.99',
    'Shoes:23.99'];
   
   for(var i = 0; i < products.length; i++) {
    var subArray = products[i].split(':'); // divide uma string em substring e retorna-os como um array
    console.log("Resultado do split: ");
    console.log(subArray); // cada nome e valor vira um item do array
    var productName = subArray[0];
    var price = Number(subArray[1]);
    total += price;
    itemText = productName + ' — $' + price;
    console.log(itemText);   
   }
   

