alert ("hola")

let edad = prompt('Ingrese su edad:');


if (isNaN(edad) || edad === '' || edad === null) {
  console.log('Ingrese una edad válida.');
} else {

  edad = parseInt(edad);

  
  if (edad >= 18) {
    console.log('¡Ya puede conducir!');
  } else {
    console.log('Debe ser mayor de 18 años para poder conducir.');
  }
}
 
