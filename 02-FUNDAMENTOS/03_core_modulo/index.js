// Invocar um modulo core.
const path = require("path"); // colocar o nome do modulo que iremos trabalhar é preferencial

const extension = path.extname("arquivo.php");
const arquivosPDF = path.extname("meuArquivo.png");



console.log(extension);
console.log(arquivosPDF);

if (arquivosPDF.endsWith(".pdf")) {
    console.log("Arquivo valido");
}else{
    console.log("Arquivo invalido")
}