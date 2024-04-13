let suma = 0;
let numero = 0;

do {
  numero = prompt("ingrese un numero");
  console.log(numero);
  if (!isNaN(parseInt(numero)) && numero != null) {
    suma = suma + parseInt(numero);
    console.log("suma " + suma);
  } else {
    if (numero != null) {
      alert(numero + "no es un numero");
    }
  }
} while (numero != null);
document.write("total:" + suma);
