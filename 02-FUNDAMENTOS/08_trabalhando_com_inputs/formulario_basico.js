const readline = require('readline');

// Implementar a interface readline.
const rl = readline.createInterface({
    input: process.stdin, // entrada padrão.
    output: process.stdout // Saída padrão.
});

let userData = {}; // Immplementação do objeto userData;

rl.question('Qual é o seu nome: ', (nome)=> {
    userData.nome = nome;

    rl.question('Qual é a sua idade: ', (idade)=> {
        userData.idade = idade;
    

    rl.question('Qual estado você mora? ',(estado)=> {
        userData.estado = estado;

        
        console.log(`Resumo dos dados do usuário: `);
        console.log(`Nome: ${userData.nome}`);
        console.log(`Idade: ${userData.idade}`);
        console.log(`Estado: ${userData.estado}`);

        rl.close();
       })
    })
})