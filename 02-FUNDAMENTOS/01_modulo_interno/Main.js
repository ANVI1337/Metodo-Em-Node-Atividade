// esse é o nosso arquivo da aplicação (main), se estivessemos no java.

const meu_modulo = require("./meu_modulo_interno");

let somar = meu_modulo.soma;
let subtracao = meu_modulo.subtrair;
let multiplicacao = meu_modulo.multiplicar;
somar(5,7);
subtracao(10,5);
multiplicacao = somar,subtracao; 


console.log("a multiplicação é " + multiplicacao);


// o fluxo de implementação e utilização é:
// 1 cria o modulo
// 2 exporta o modulo (.exports)
// 3 requisita o módulo (require())
// 4 utilizar o(s) método(s) do modulo