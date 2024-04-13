let resultado = '';
do{
    let palabra = prompt('ingresa una palabra');
    if (resultado == ''){
        resultado = palabra;
    }
    else {
        resultado = resultado + '-' + palabra;
    }

} while ( confirm('desea continuar?'));
document.write(resultado);