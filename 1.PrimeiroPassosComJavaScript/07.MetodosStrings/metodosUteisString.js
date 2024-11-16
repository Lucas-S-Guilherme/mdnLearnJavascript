// saber o comprimento de uma string
let browserType = "mozilla";
console.log(browserType.length);

//recuperar um caractere de string específico

console.log(browserType[0]); // primeiro elemento da string
console.log(browserType[browserType.length - 1]); // ultimo elemento

// Encontrando uma substring dentro de uma string e extraindo-a

// dá como resultado a posição em que se inicia a substring
console.log(browserType.indexOf("zilla"));
// retorna -1 quando não acha a substring


// encontrar todas as substrings que contém 'mozilla'

if (browserType.indexOf("mozilla") !== -1) {
    // faz coisas com a string
}

// usado para extrair caracteres, segundo parâmetro é a posição seguinte do último caractere a ser extraído.
console.log(browserType.slice(0, 3)); // retorna: moz

// para extrair tudo a partir de um caractere
console.log(browserType.slice(2)); // zilla

//Mudando entre maiúsculas e miniúsculas

let textoQualquer = "Space Marine 2";
textoQualquer.toLowerCase();
textoQualquer.toUpperCase();

// Atualizando partes de uma string

console.log(browserType.replace("moz", "van")); // vanilla

//para atualizar o valor da variável, faça como abaixo:
browserType = browserType.replace("moz", "van");

// Filtrando mensagem de saudação 

var greetings = ['Happy Birthday!',
    'Merry Christmas my love',
    'A happy Christmas to all the family',
    'You\'re all I want for Christmas',
    'Get well soon'];

for(var i = 0; i < greetings.length; i++) {
var input = greetings[i];
if(greetings[i].indexOf('Christmas') !== -1) {
var result = input;
console.log(result);
}}

// Corrigindo a capitalização

var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
  var lower = input.toLowerCase();
  var firstLetter = lower.slice(0,1);
  var capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
  var result = capitalized;
  console.log(result);

}

// Fazendo novas strings a partir de partes antigas

var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for(var i = 0; i < stations.length; i++) {
var input = stations[i];
var code = input.slice(0,3);
var semiC = input.indexOf(';'); //pega o indice do ;
var nameStation = input.slice(semiC + 1);
var result = code + ': ' + nameStation;
console.log(result);
}



