
//exemplo continue

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) { 
        continue; // Se "i" for par, pula para a próxima iteração
    }
    console.log(i); // Só imprime números ímpares
}

//while

const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = 'My cats are called ';
var i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    info += "and " + cats[i] + ".";
  } else {
    info += cats[i] + ", ";
  }

  i++;
  console.log(info)
}

var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

var i = 0;

while(people.length){
  
}