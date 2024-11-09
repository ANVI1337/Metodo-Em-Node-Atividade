const readline = require('readline');

// Implementar a interface readline.
const rl = readline.createInterface({
    input: process.stdin, // entrada padrão.
    output: process.stdout // Saída padrão.
});

// interagir com o usuario.
rl.question('Qual é o seu nome? ', (nome)=> {
    console.log(`Olá, ${nome}!`);

rl.close;
});