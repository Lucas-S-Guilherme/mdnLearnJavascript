## Objetos Javascript

Um objeto possuí suas propriedades e seus métodos.
Propriedades também são chamados de membros, e possuem valores.

Objeto literal: seu conteúdo é escrito em sua criação.

### Notação de Ponto

O objeto atua como *namespace* ele deve ser digitado primeiro para que você acesse qualquer valor *encapsulado* dentro do objeto. Como exemplo abaixo:

`
pessoa.idade;
pessoa.interesse[1];
pessoa.bio();
`

#### Sub-namespaces

```
const pessoa2 = {
    nome: {
        primeiro: 'batman',
        ultimo: 'morcego'
    }
};

//para acessar: pessoa.nome.primeiro;
```

### Notação de colchetes

Outra forma de acessar propriedades do objeto - usando notação de colchetes. Muito parecido com acessar itens de um array.

```
pessoa["idade"];
pessoa2["nome"]["primeiro"];
```

### Setando (atualizar) Membros do Objeto

```
pessoa.idade = 45;
pessoa["nome"]["ultimo"] = "Cratchit";
```

Também é possível criar membros completamente novos

```pessoa["olhos"] = "castanho";
pessoa.despedida = function () {
  alert("Adeus a todos!");
};
```

Com a notação de colchetes, é possível setar nomes de membros.

Vamos dizer que queremos que usuários possam armazenar tipos de valores personalizados em seus dados de 'pessoa', digitando o nome e o valor do membro em dois inputs de texto. Podemos obter esses valores dessa forma:

```
var myDataName = nameInput.value;
var myDataValue = nameValue.value;
```

Pode-se, então, adicionar esse novo nome e valor ao objeto pessoa assim:

```
pessoa[myDataName] = myDataValue;
```

### O que é o "this"?