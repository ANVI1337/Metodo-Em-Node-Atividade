import inquirer from "inquirer";

let listaCompras = [];

// Função principal que exibe o menu.
function mostrarMenu(){
    inquirer.prompt([{
        type: 'list',
        name: 'opcao',
        message: 'Escolha uma opção: ',
        choices: [
            'Registrar compras',
            'Exibir lista de compras',
            'Sair'
        ]
    }
]).then((respostas) => {
    switch(respostas.opcao){
        case 'Registrar compras': registrarCompras();
        break;
        case 'Exibir lista de compras': exibirListaCompras();
        break;
        case 'Sair': sairPrograma();
        break;
    }
});
}

// Função para registrar compras.
function registrarCompras(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'NomeProduto',
            message: 'informe o nome do produto: '
        },
        {
            type: 'input',
            name: 'ValorProduto',
            message: 'Informe o valor do produto:',
            validate: (input) => !isNaN(parseFloat(input)) || 'Por favor, insira um número válido.'
        }
    ]).then((resposta) => {
        // Adicionar o produto a lista de compras.
        listaCompras.push({
            nome: resposta.NomeProduto, 
            valor: parseFloat(resposta.ValorProduto)
        });
        inquirer.prompt([
            {
                type: 'confirm',
                name: 'adicionarOutro',
                message: 'Deseja informar outro produto?',
                default: false
            }
        ]).then((confirmacao)=> {
            if(confirmacao.adicionarOutro){
                registrarCompras(); // chama a função novamente para adicionar mais produtos.
            }else{
                mostrarMenu(); // retornar ao menu principal.
            }
        })
    })
}
// Função para exibir a lista de compras
function exibirListaCompras(){
    console.log('\n ======= Lista e Compras =======')
    if(listaCompras.length === 0 ){
        console.log('Nenhum produto registrado.');
    }else{
        console.table(listaCompras);
        const total = listaCompras.reduce((soma, item)=> soma + item.valor, 0);
        console.log('|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||');
        console.log(`O total é: ${total.toFixed(2)}`);
        console.log('|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||');
    }
    mostrarMenu(); // Retorna ao menu principal.
}

// Função para sair do programa com contagem regressiva de 10 à 1.
function sairPrograma(){
    console.log('\nSaindo do programa em 10 segundos...');

    let contador = 10;
    const intervalo = setInterval(()=> {
        console.log(contador);
        contador --;

        if(contador < 0){
            clearInterval(intervalo);
            console.clear();
        }

    },1000)
} 

// iniciar o programa
mostrarMenu();