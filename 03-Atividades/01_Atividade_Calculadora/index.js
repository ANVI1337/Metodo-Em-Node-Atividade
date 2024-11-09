const calculadora = require("./calculadora");

// chamadas de funções do modulo calculadora.
let Somatoria = calculadora.somar;
let Subtrair = calculadora.subtrair;
let Multiplicar = calculadora.multiplicar;
let Dividir = calculadora.dividir;
let raizQuadrada = calculadora.raizQuadrada;

// resultado esperado nesta chamada de função é de (15).
Somatoria(10,5);
// resultado esperado nesta chamada de função é de (8).
Subtrair(10,2);
// resultado esperado nesta chamada de função é de (20).
Multiplicar(10,2);
// resultado esperado nesta chamada de função é de (5).
Dividir(10,2);
// resultado esperado nesta chamada de função é de (2).
raizQuadrada(4);