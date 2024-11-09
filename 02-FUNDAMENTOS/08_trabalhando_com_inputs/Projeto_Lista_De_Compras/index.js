const readline = require("readline");

// Implementar a interface readline.
const rl = readline.createInterface({
  input: process.stdin, // entrada padrão.
  output: process.stdout, // Saída padrão.
});

let listaCompras = [];

// Criar um menu.
function mostrarMenu() {
  console.log("\n===== Menu ======");
  console.log("1. Registrar compras.");
  console.log("2. exibir lista de compras.");
  console.log("3. Sair.");

  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao.trim()) {
      case "1":
        registarCompras();
        break;
      case "2":
        exibirListaCompras();
        break;
      case "3":
        sairPrograma();
        break;
      default:
        console.log("Opção invalida. Tente novamente");
        break;
    }
  });
  function registarCompras() {
    rl.question("\n Informe o nome do produto: ", (nomeProduto) => {
      rl.question("Informe o valor do produto: ", (valorProduto) => {
        // Adiciona o produto à lista de compra
        listaCompras.push({
          nome: nomeProduto,
          valor: parseFloat(valorProduto),
        });

        rl.question("\n Deseja informar outro produto? (s/n)", (resposta) => {
          if (resposta.trim().toLowerCase === "s") {
            registarCompras(); // Recursão para adicionar mais produtos.
          } else {
            mostrarMenu(); // Retornar ao menu principal.
          }
        });
      });
    });
  }
}

function exibirListaCompras() {
  console.log("\n ======= lista de compras ========");

  if (listaCompras.length === 0) {
    console.log("nenhum produto registrado");
  } else {
    console.table(listaCompras);
    const total = listaCompras.reduce((soma, item) => soma + item.valor, 0);
    console.log(`Total: R${total.toFixed(2)}`);
  }
  mostrarMenu(); // Retorna para o menu
}
function sairPrograma() {
  console.log("\n Saindo do programa em 10 segundos...");

  let contador = 10;
  const intervalo = setInterval(() => {
    console.log(contador);
    contador--;

    if (contador < 0) {
      clearInterval(); // Limpa a tela.
      console.clear(); // Limpa o terminal.
      rl.close; // Fecha a interface readline.
    }
  }, 1000); // 1000ms = 1s;
}

// iniciar o programa
mostrarMenu();
