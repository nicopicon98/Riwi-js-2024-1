// Crear instancias de tipos básicos y compuestos
const stringInstance = new String("hello");
const numberInstance = new Number(123);
const booleanInstance = new Boolean(true);
const arrayInstance = new Array();
const objectInstance = new Object();
const functionInstance = new Function("return true;");
const dateInstance = new Date();
const regexpInstance = new RegExp("abc");

// Verificar si String.prototype es prototipo de stringInstance
console.log("String.prototype es prototipo de stringInstance:", String.prototype.isPrototypeOf(stringInstance));

// Verificar si Number.prototype es prototipo de numberInstance
console.log("Number.prototype es prototipo de numberInstance:", Number.prototype.isPrototypeOf(numberInstance));

// Verificar si Boolean.prototype es prototipo de booleanInstance
console.log("Boolean.prototype es prototipo de booleanInstance:", Boolean.prototype.isPrototypeOf(booleanInstance));

// Verificar si Array.prototype es prototipo de arrayInstance
console.log("Array.prototype es prototipo de arrayInstance:", Array.prototype.isPrototypeOf(arrayInstance));

// Verificar si Object.prototype es prototipo de objectInstance
console.log("Object.prototype es prototipo de objectInstance:", Object.prototype.isPrototypeOf(objectInstance));

// Verificar si Function.prototype es prototipo de functionInstance
console.log("Function.prototype es prototipo de functionInstance:", Function.prototype.isPrototypeOf(functionInstance));

// Verificar si Date.prototype es prototipo de dateInstance
console.log("Date.prototype es prototipo de dateInstance:", Date.prototype.isPrototypeOf(dateInstance));

// Verificar si RegExp.prototype es prototipo de regexpInstance
console.log("RegExp.prototype es prototipo de regexpInstance:", RegExp.prototype.isPrototypeOf(regexpInstance));

// Verificar cómo cada uno responde a Object.prototype
console.log("Object.prototype es prototipo de stringInstance:", Object.prototype.isPrototypeOf(stringInstance));
console.log("Object.prototype es prototipo de numberInstance:", Object.prototype.isPrototypeOf(numberInstance));
console.log("Object.prototype es prototipo de booleanInstance:", Object.prototype.isPrototypeOf(booleanInstance));
console.log("Object.prototype es prototipo de arrayInstance:", Object.prototype.isPrototypeOf(arrayInstance));
console.log("Object.prototype es prototipo de objectInstance:", Object.prototype.isPrototypeOf(objectInstance));
console.log("Object.prototype es prototipo de functionInstance:", Object.prototype.isPrototypeOf(functionInstance));
console.log("Object.prototype es prototipo de dateInstance:", Object.prototype.isPrototypeOf(dateInstance));
console.log("Object.prototype es prototipo de regexpInstance:", Object.prototype.isPrototypeOf(regexpInstance));

/**
 * Primitivas vs. Objetos en JavaScript
 */

// Los datos primitivos en javascript pueden ser tratados de dos maneras: 

// - Como primitivas: Son simplemente datos básicos no modificables, no objetos.
// - Como objetos: Cuando usas los constructors String, Boolean, Number..., creas un objeto envoltorio alrededor de una cadena primitiva.

// Supongamos que defino mi variables const myString = "hello world"
// Cuando escribes "hello world" directamente, estás creando una cadena primitiva, no un objeto String. 
// Las primitivas no tienen un prototipo directo; no son objetos y, por lo tanto, 
// NO participan en la cadena de prototipos como lo hacen los objetos.

// En ese orden de ideas, si deseo imprimir por consola String.prototype.isPrototypeOf(myString) 
// recibire como respuesta -> false

// El método String.prototype.isPrototypeOf() comprueba si el objeto String.prototype se encuentra en la 
// cadena de prototipos de un objeto dado. En tu caso, stringInstance es una cadena primitiva y 
// no un objeto que tenga una cadena de prototipos. 
// Por eso, el resultado es false, ya que las primitivas no tienen prototipos.

// Cómo Trabaja JavaScript con las Cadenas Primitivas?

/*
Cuando intentas acceder a una propiedad o método (como length, toUpperCase()) de una cadena primitiva, 
JavaScript automáticamente la envuelve en un objeto String temporal para acceder al método o propiedad, 
y luego descarta este objeto una vez que la operación está completa. 
Este proceso se llama "boxing" o envoltura automática, pero no cambia el hecho de que la cadena original 
es una primitiva.
*/

// Y entonces... Cómo Comprobar si algo es un Prototipo de un String?

/*
Para que la comprobación de prototipos sea true, necesitas trabajar con un objeto String, no con una primitiva, tal
como esta escrito en la linea #2
*/

