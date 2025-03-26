// criando um objeto
var nomeDoObjeto = {
    nomeMembro1: valorMembro1,
    nomeMembroN: valorN
};

//
var pessoa1 = {};


// criando um objeto literal - conteúdo escrito confome criado
var pessoa = {
    nome: ['lucas', 'guilherme'], // array de dados - propriedades do objeto
    idade: 30,
    sexo: 'masculino',
    interesses: ["musica", 'jogos'],
    bio: function () { // método do objeto
        alert(
            this.nome[0] +
            " " +
            this.nome[1] +
            " tem " +
            this.idade +
            " anos de idade. Ele gosta de " +
            this.interesses[0] +
            " e " +
            this.interesses[1] +
            "."
        );
    },
    saudacao: function () {
        alert("Oi! Eu sou " + this.nome[0] + ".");
    },
};

//Testando exemplo sub-namespace - objeto dentro de um objeto

const pessoa2 = {
    nome: {
        primeiro: 'batman',
        ultimo: 'morcego'
    }
};

//para acessar: pessoa.nome.primeiro;

// usando notação de colchetes para acessar propriedades de objetos
pessoa["idade"];
pessoa2["nome"]["primeiro"];

// também é possível criar novos membros
pessoa["olhos"] = 'castanho';
pessoa.despedida = function () {
    alert("Adeus a todos!");
};