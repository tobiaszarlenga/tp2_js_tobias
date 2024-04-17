let numrep = parseInt(
  prompt("ingrese un numero de repeticiones entre 1 y 50  ")
);
if (!isNaN(numrep)) {
  if (numrep >= 1 && numrep <= 50) {
    for (let i = numrep; i >= 1; i--) {
      for (let rep = i; rep >= 1; rep--) {
        document.write(i);
      }
      document.write("<br>");
    }

    alert("el numero de repeticiones es " + numrep);
  } else {
    alert("el numero de repeticiones no es valido");
  }
} else {
  alert("valor errooneo");
}
