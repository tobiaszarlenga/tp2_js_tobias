let nota = prompt('Ingrese su nota (de 0 a 10):');

// Verificar si la entrada es un número válido dentro del rango de 0 a 10
if (!isNaN(nota) && nota >= 0 && nota <= 10) {
  // Convertir la entrada a un número entero
  nota = Number(nota);

  // Determinar la calificación según el rango de nota
  let calificacion;
  if (nota >= 0 && nota <= 2) {
    calificacion = 'Muy deficiente';
  } else if (nota >= 3 && nota <= 4) {
    calificacion = 'Insuficiente';
  } else if (nota >= 5 && nota <= 6) {
    calificacion = 'Suficiente';
  } else if (nota === 7) {
    calificacion = 'Bien';
  } else if (nota >= 8 && nota <= 9) {
    calificacion = 'Notable';
  } else if (nota === 10) {
    calificacion = 'Sobresaliente';
  }

  // Mostrar la calificación en un alert
  alert('Su calificación es: ' + calificacion);
} else if (isNaN(nota)) {
  // Mostrar mensaje si la entrada no es un número válido
  alert('Introduce un número válido');
} else {
  // Mostrar mensaje si la nota está fuera del rango de 0 a 10
  alert('Número erróneo');
}