const minimist = require("minimist");
// Chamar o módulo externo instalado.

// Slice(2): essa função remove dos primeiros elementos do array.
const args = minimist(process.argv.slice(2)); 

   console.clear();
// console.log(args);

// console.log('Nome: ', args.nome);
// console.log('Idade: ', args.idade);

console.log('----------------------------------------------');

console.log(`Nome: ${args.nome}\nIdade: ${args.idade}`);

console.log('----------------------------------------------');
