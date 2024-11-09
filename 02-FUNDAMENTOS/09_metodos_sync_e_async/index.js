// // Método Sícrono (readFileSync);
// const fs = require('fs');

const { error } = require('console');

// try {
//     const data = fs.readFileSync('exemplo.txt','utf8');
// } catch (error) {
//     console.error('Erro ao ler o arquivo', error);
// }

// console.log('Este log só será exibido após a leitura do arquivo (Sync).');

// console.log('------------------------------------------------------------');

// console.log('------------------------------------------------------------');
// //Método Assíncrono(readFile) *Async;

// const afs = require('fs');
// afs.readFile('outroExemplo.txt', 'utf-8',(err, data)=>{ // Não bloqueia a execução
//     if(err){
//         console.error('Erro ao ler o arquivo.', err)
//         return;
//     }
//     console.log(data);
// });
// console.log('Este log é exibido imediatamente (Async).');

console.log('------------------------------------------------------------');

console.log('------------------------------------------------------------');

// Utilizando promises com Funções Assícronas
// Para um melhor controle das operações assícronas, podemos utilizar promissas. Isso facilita a leitura do código e ajuda com erros de maneira mais clara.
// const pfs = require('fs').promises;
// pfs.readFile('maisUmExemplo.txt', 'utf-8')
//     .then(date =>{
//         console.log(date);
//     })
//     .catch(erro => {
//         console.error('Erro ao ler o arquivo.', erro);
//     })
// console.log('Log exibido ANTES da leitura do arquivo. (Async com promise).');

// Async/await para Funções Assícronas 
// O assync/await é uma maneira mais intuitiva de escrever códigos assícronos, que facilita o fluxo de leitura e tratamento de erros.
const pfs = require('fs').promises;

async function readFileSync() {
    try {
        const data = await pfs.readFile('exp.txt', 'utf-8');
        console.log(data);
    } catch (err) {
        console.error('Erro ao ler o arquivo.', err);
    }
}
readFileSync();
console.log('Este log é exibido ANTES da leitura do arquivo (Assync/Await).')