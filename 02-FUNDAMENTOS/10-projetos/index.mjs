import fs from 'fs/promises';
import inquirer from 'inquirer';
import chalk from 'chalk';

const caminhoArquivo = 'livros.json';

// Função para exibir o menu
async function exibirMenu() {
    const resposta = await inquirer.prompt({
        type: 'list',
        name: 'opcao',
        message: 'Escolha uma opção:',
        choices: ['Cadastrar livros', 'Listar livros', 'Sair']
    });
    switch (resposta.opcao) {
        case 'Cadastrar livros':
            await cadastrarLivro();
            break;
        case 'Listar livros':
            await listarLivros();
            break;
        case 'Sair':
            sair();
            break;
    }
    if (resposta.opcao !== 'Sair') {
        exibirMenu();
    }
}

// Função para cadastrar livros
async function cadastrarLivro() {
    let continuar = true;
    while (continuar) {
        const livro = await inquirer.prompt([
            { name: 'titulo', message: 'Informe o título do livro' },
            { name: 'ano', message: 'Informe o ano de publicação' },
            { name: 'autor', message: 'Informe o nome do autor' }
        ]);
        await salvarLivro(livro);
        const resposta = await inquirer.prompt({
            type: 'confirm',
            name: 'continuar',
            message: 'Deseja cadastrar outro livro?'
        });
        continuar = resposta.continuar;
    }
}

// Função para salvar um livro no arquivo (json).
async function salvarLivro(livro) {
    try {
        let livros = [];
        try {
            const data = await fs.readFile(caminhoArquivo, 'utf8');
            livros = JSON.parse(data);
        } catch (error) {
            // Arquivo não encontrado ou vazio, inicia lista vazia
        }
        livros.push(livro);
        await fs.writeFile(caminhoArquivo, JSON.stringify(livros, null, 2));
        console.log(chalk.green('Livro cadastrado com sucesso!'));
    } catch (error) {
        console.error('Erro ao salvar o livro:', error);
    }
}

// Função para listar os livros
async function listarLivros() {
    try {
        const data = await fs.readFile(caminhoArquivo, 'utf8');
        const livros = JSON.parse(data);

        console.log('\nLista de Livros Cadastrados:');
        console.table(livros);

        const totalLivros = livros.length;
        console.log(chalk.bgYellow.blue(` Total de livros cadastrados: ${totalLivros} `));
    } catch (error) {
        console.log(chalk.red('Nenhum livro encontrado. Cadastre um livro para exibir a lista.'));
    }
}

// Função para simular uma contagem regressiva e limpar a tela
function sair() {
    console.log('Saindo em 10 segundos...');
    let contagem = 10;

    const interval = setInterval(() => {
        console.log(`Saindo em ${contagem}...`);
        contagem--;
        if (contagem < 0) {
            clearInterval(interval);
            console.clear();
            process.exit(0);  // Finaliza o programa
        }
    }, 1000);
}

// Função para validar o ano informado pelo usuário
function validarAno(ano) {
    const anoNumerico = parseInt(ano);
    if (isNaN(anoNumerico) || anoNumerico <= 0) {
        return 'Por favor, informe um ano válido.';
    }
    return true;
}

// Inicia o programa exibindo o menu principal
exibirMenu();