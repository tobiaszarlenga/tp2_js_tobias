let filas = parseInt(prompt("ingrese un numero de fila"));

let columnas = parseInt(prompt("ingrese un numero de columna"));

let total = filas * columnas;
document.write("<table border>");
for (let indicefilas = 0; indicefilas < filas; indicefilas++) {
  document.write("<tr>");
  for (let indicecolumnas = 0; indicecolumnas < columnas; indicecolumnas++) {
    document.write("<td>" + total + "<td>");
    total--;
  }
  document.write("<tr>");
}
document.write("</table>");
