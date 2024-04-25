// Calculadora de promedio de calificaciones

// Primero pedimos al usuario que ingrese las calificaciones de los estudiantes
const studentGrades = prompt("Por favor ingresa las calificaciones de los estudiantes separadas por coma: ");
// Luego convertimos las calificaciones en un array de numeros
const grades = studentGrades.split(",").map(e => parseInt(e));
// Calculamos el promedio de las calificaciones
/**
 * El metodo reduce recibe una funcion y un valor inicial, la funcion recibe dos parametros, el acumulador 
 * y el elemento actual. El valor inicial es 0. La funcion recorre el array y va sumando el acumulador con el
 * elemento actual. Al final, el metodo reduce devuelve el acumulador dividido por la longitud del array.
 */
const average = grades.reduce((acc, el) => acc + el, 0) / grades.length;
// Mostramos el promedio
console.log(`El promedio de las calificaciones es: ${average}`);

