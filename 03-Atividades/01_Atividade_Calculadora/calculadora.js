module.exports = {
    // função somar aonde retornar os dois valores somados.
    somar(valor1, valor2){
        const resultado = valor1 + valor2;
        return console.log("O resultado da adição é:", + resultado);
    },
    // função subtrair aonde retornar os dois valores subtraidos.    
    subtrair(valor1, valor2){
        const resultado_Subtrair = valor1 - valor2;
        return console.log("O resultado da subtração é: ", + resultado_Subtrair);
    },
    // função multiplicar aonde do qual retornar os dois valores multiplicados.
    multiplicar(valor1, valor2){
        const resultado_multiplicar = valor1 * valor2;
        return console.log("O resultado da multiplicação é: ", + resultado_multiplicar);

    },
    // função de retorno para divisão caso o valor 2 escolhido esteja maior que zero sua função retornar a divisão caso contrário retorna o aviso de que não é possivel.
    dividir(valor1, valor2){
        let resultado_dividir = 0;
        if (valor2 > 0) {
            resultado_dividir = valor1 / valor2;
            return console.log("O resultado da divisão é: " + resultado_dividir);
        } else {
            console.log("Esta operação não pode ser dividida por zero.");
        }
    },
    // função de retorno para raiz quadrada caso o numero escolhido seja maior que zero ele retorna o valor da raiz caso contrário ele retorna o aviso de que não é possivel fazer essa operação.
    raizQuadrada(valor_Da_Raiz){
        let resultado_raiz = 0;
        if(valor_Da_Raiz > 0){
            resultado_raiz = Math.sqrt(valor_Da_Raiz);
            return console.log("O resultado da raiz quadra: " + resultado_raiz);
        }else{
            console.log("Está operação não pode ser feito com zeros ou numeros negativos.");
        }
    }





}