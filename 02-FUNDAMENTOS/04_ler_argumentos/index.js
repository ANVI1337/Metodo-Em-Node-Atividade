const comando = process.argv[2];

//console.log(comando);

if (comando === 'ola') {
    console.log('Olá, tudo bem, sua flag foi aceita!')
}else if (comando === 'soma'){
    let valor1 = parseInt(process.argv[3]);
    let valor2 = parseInt(process.argv[4]);
    console.log(valor1 + valor2);
}else{
    console.log('comando informado é invalido');
}