// Calculadora de estadisticas de calificaciones

// Primero pedimos al usuario que ingrese las calificaciones de los estudiantes
const studentGrades = prompt("Por favor ingresa las calificaciones de los estudiantes separadas por coma: ");
// Luego convertimos las calificaciones en un array de numeros
const grades = studentGrades.split(",").map(e => parseInt(e));
// Calculamos el promedio de las calificaciones
/**
 * El metodo reduce recibe una funcion y un valor inicial, la funcion recibe dos parametros, el acumulador 
 * y el elemento actual. El valor inicial es 0. La funcion recorre el array y va sumando el acumulador con el
 * elemento actual. Al final, el metodo reduce devuelve el acumulador dividido por la longitud del array.
 * acc va a obtener lo que retorne la funcion, que es la suma de acc + el, y el valor inicial es 0.
 */
const average = grades.reduce((acc, el) => acc + el, 0) / grades.length;
// Calculamos la calificacion mas alta
const maxGrade = Math.max(...grades);
// o tambien se puede hacer con el metodo reduce
const maxGrade2 = grades.reduce((acc, el) => Math.max(acc, el), 0);
// Calculamos la calificacion mas baja
const minGrade = Math.min(...grades);
// o tambien se puede hacer con el metodo reduce
const minGrade2 = grades.reduce((acc, el) => Math.min(acc, el), 10);
// Numero de aprobados (calificacion mayor o igual a 70)
const approved = grades.filter(e => e >= 70).length;
// Numero de reprobados (calificacion menor a 70)
const failed = grades.filter(e => e < 70).length; // o tambien le restamos los aprobados al length del array original
// Creamos una lista nueva con las calificaciones ordenadas de mayor a menor
const sortedGrades = grades.sort((a, b) => b - a);
// O modificamos el array original
grades.sort((a, b) => b - a);
// Mostramos las estadisticas
console.log(`El promedio de las calificaciones es: ${average}`);
console.log(`La calificacion mas alta es: ${maxGrade}`);
console.log(`La calificacion mas baja es: ${minGrade}`);
console.log(`El numero de aprobados es: ${approved}`);
console.log(`El numero de reprobados es: ${failed}`);
console.log(`Las calificaciones ordenadas de mayor a menor son: ${sortedGrades.join(", ")}`);
// console.log(`Las calificaciones ordenadas de mayor a menor son: ${grades.join(", ")}`); // array original
