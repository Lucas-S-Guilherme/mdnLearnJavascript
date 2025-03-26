# JavaScript: `var` vs `const` vs `let` (Escopo, Hoisting, Reatribuição e Mutabilidade)

## 1. Escopo (Scope)
Define onde uma variável pode ser acessada.

### Tipos de Escopo:
#### Bloco (`{}`)
```javascript
if (true) {
  const exemploConst = "bloco";
  let exemploLet = "bloco";
  var exemploVar = "bloco";
}
console.log(exemploVar); // ✅ "bloco" (vaza)
console.log(exemploLet); // ❌ ReferenceError
console.log(exemploConst); // ❌ ReferenceError

```
function teste() {
  var escopoFuncao = "Só existe aqui";
}
console.log(escopoFuncao); // ❌ ReferenceError
```

Escopo Global:
Variáveis declaradas fora de qualquer bloco/função são globais.

javascript
Copy
const global = "Acessível em qualquer lugar";
2. Hoisting (Içamento)
JavaScript "move" declarações para o topo do escopo antes da execução.

Como funciona:
var:
A declaração é içada e inicializada com undefined.

javascript
Copy
console.log(hoistedVar); // ✅ undefined (hoisting)
var hoistedVar = "valor";
let/const:
A declaração é içada, mas não é inicializada (acessar antes da linha de declaração causa um erro).

javascript
Copy
console.log(hoistedLet); // ❌ ReferenceError (Temporal Dead Zone)
let hoistedLet = "valor";
3. Reatribuição
Define se uma variável pode receber um novo valor após a declaração.

Comparação:
Tipo	Reatribuição Permitida?	Exemplo
var	✅ Sim	var x = 1; x = 2; ✅
let	✅ Sim	let y = 1; y = 2; ✅
const	❌ Não	const z = 1; z = 2; ❌ Erro
4. Mutabilidade
Define se o valor interno de um objeto/array pode ser modificado (sem reatribuir a variável).

Exemplo com Objetos:
javascript
Copy
const pessoa = { nome: "João" };
pessoa.nome = "Maria"; // ✅ Mutação permitida (objeto é modificado)
// pessoa = {}; ❌ Erro (reatribuição não permitida)
Tornando Objetos Imutáveis:
Use Object.freeze() para bloquear mutações:

javascript
Copy
const carro = Object.freeze({ marca: "Ford" });
carro.marca = "Tesla"; // ❌ Silenciosamente falha (em modo estrito, lança erro)
Resumo Visual
Conceito	var	let	const
Escopo	Função/Global	Bloco	Bloco
Hoisting	✅ (inicializada como undefined)	✅ (não inicializada)	✅ (não inicializada)
Reatribuição	✅ Permitida	✅ Permitida	❌ Bloqueada
Mutabilidade	✅ (objetos mutáveis)	✅ (objetos mutáveis)	✅ (objetos mutáveis)
Exemplo Prático Completo
javascript
Copy
// Hoisting e Escopo
console.log(exemploVar); // undefined (hoisting)
var exemploVar = "var";

if (true) {
  let exemploLet = "let";
  var exemploVar2 = "var vaza";
}
console.log(exemploVar2); // "var vaza" (escopo de função)
// console.log(exemploLet); // ❌ Erro (escopo de bloco)

// Mutabilidade vs Reatribuição
const lista = [1, 2, 3];
lista.push(4); // ✅ Mutação permitida
// lista = [5]; ❌ Erro (reatribuição)

let lista2 = [1];
lista2 = [2]; // ✅ Reatribuição permitida
Quando Usar Cada Um?
const: Padrão para todos os casos (objetos, arrays, valores fixos).

let: Quando precisar reatribuir valores (ex.: contadores em loops).

var: Evite (a menos em código legado ou casos muito específicos).