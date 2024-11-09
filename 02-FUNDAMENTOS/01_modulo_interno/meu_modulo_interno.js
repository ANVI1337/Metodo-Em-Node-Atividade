module.exports = {
    soma(numero1, numero2){
       const resultado = numero1 + numero2;
        return console.log (resultado);
    },
    subtrair(numero1, numero2) {
        const resultado_Subtrair = numero1 - numero2;
        return console.log (resultado_Subtrair);
    },
    multiplicar(numero1, numero2){
        return console.log(numero1 * numero2);
    }
}
// essa função não precisa ser declarada com a palavra function,
// pois devemos tratar a função como um método.
