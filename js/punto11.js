let primerNombre = prompt("Ingrese el primer nombre");
let primerEdad = parseInt(prompt("ingrese la edad"));

let segundoNombre = prompt("Ingrese el segundo nombre");
let segundoEdad = parseInt(prompt("ingrese la edad"));

let tercerNombre = prompt("Ingrese el tercer nombre");
let tercerEdad = parseInt(prompt("ingrese la edad"));

let maximo = Math.max(primerEdad, segundoEdad, tercerEdad);

if (maximo == primerEdad) {
  document.write("el mayor es " + primerNombre);
} else if (maximo == segundoEdad) {
  document.write("el mayor es " + segundoNombre);
} else {
  document.write("el mayor es " + tercerNombre);
}

