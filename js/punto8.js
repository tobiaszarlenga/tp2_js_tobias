let numrep = parseInt(prompt("ingrese un numero del 1 al 50"));
if (!isNaN(numrep)) {
  if (numrep >= 1 && numrep <= 50) {
    for (let i = 0; i <= numrep; i++) {
      for (let rep = 1; rep <= i; rep++) {
        document.write(rep);
      }
      document.write("<br>");
    }
  } else {
    alert("ingrese un numero del 1 al 50");
  }
} else {
  alert("numero erroeneo ");
}
