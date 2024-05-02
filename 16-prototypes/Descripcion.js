//__proto__
/*La propiedad __proto__ en JavaScript es una propiedad de acceso que provee acceso al interior del prototipo (denotado como [[Prototype]]) del objeto a través del cual se accede a ella. En otras palabras, __proto__ te permite acceder al prototipo del objeto.
Por ejemplo, si tienes un objeto obj, puedes usar obj.__proto__ para obtener el prototipo de obj.

Es importante mencionar que el uso de la propiedad __proto__ es actualmente polémico y está desaconsejado. Esto se debe a que __proto__ no es estándar y puede no ser soportado en todos los navegadores o entornos de JavaScript.
En su lugar, se recomienda usar los métodos Object.getPrototypeOf(obj) y Object.setPrototypeOf(obj, prototype) para obtener y establecer el prototipo de un objeto, respectivamente.*/

// Ejemplo __proto__
let obj = { nombre: "Juan" };
console.log(obj.__proto__); // Muestra el prototipo de obj

//Object.getPrototypeOf(obj)
/*El método Object.getPrototypeOf(obj) en JavaScript devuelve el prototipo (es decir, el valor de la propiedad interna [[Prototype]]) del objeto especificado. Aquí te muestro cómo se utiliza:*/

//Ejemplo Object.getPrototypeOf(obj)
let obj2 = { nombre: "Juan" };
console.log(Object.getPrototypeOf(obj2)); // Muestra el prototipo de obj

/*En este ejemplo, Object.getPrototypeOf(obj) devuelve el prototipo de obj12. Si obj fue creado con new FuncionConstructora(), entonces su prototipo es FuncionConstructora.prototype. Si obj fue creado con Object.create(proto), entonces su prototipo es proto.
Si el objeto no tiene un prototipo (es decir, si fue creado con Object.create(null)), entonces Object.getPrototypeOf(obj) devolverá null.
Es importante mencionar que Object.getPrototypeOf(obj) es una forma segura y estándar de obtener el prototipo de un objeto. A diferencia de la propiedad __proto__, Object.getPrototypeOf(obj) es soportado en todos los navegadores modernos y es parte del estándar ECMAScript. */

//Object.setPrototypeOf(obj, prototype)
/*El método Object.setPrototypeOf(obj, prototype) en JavaScript se utiliza para establecer el prototipo de un objeto especificado a otro objeto o a null. Aquí te muestro cómo se utiliza:*/

//Ejemplo Object.setPrototypeOf(obj, prototype)
// Crear un objeto
let obj3 = { nombre: "Juan" };

// Crear un nuevo prototipo
let nuevoPrototipo = {
  saludo: function() {
    return `Hola, mi nombre es ${this.nombre}`;
  }
};

// Establecer el nuevo prototipo para el objeto
Object.setPrototypeOf(obj3, nuevoPrototipo);

// Ahora obj3 tiene acceso al método saludo
console.log(obj3.saludo()); // Imprime: "Hola, mi nombre es Juan"

//hasOwnProperty()
/*El método hasOwnProperty() en JavaScript se utiliza para verificar si un objeto tiene una propiedad específica. Este método devuelve true si la propiedad especificada es una propiedad directa del objeto, incluso si el valor es null o undefined. Devuelve false si la propiedad es heredada o no se ha declarado en absoluto.
Aquí te muestro cómo se utiliza con un ejemplo:*/

// Crear un objeto
var persona = { "nombre": "Brian", "apellido": "Scott" };

// Usar hasOwnProperty para verificar si la propiedad "nombre" es parte de nuestro objeto
console.log(persona.hasOwnProperty("nombre")); // Imprime: true

// Usar hasOwnProperty para verificar una propiedad que no existe
console.log(persona.hasOwnProperty("edad")); // Imprime: false

/*En este ejemplo, persona.hasOwnProperty("nombre") devuelve true porque “nombre” es una propiedad directa del objeto persona. Sin embargo, persona.hasOwnProperty("edad") devuelve false porque “edad” no es una propiedad del objeto persona.
Es importante mencionar que hasOwnProperty() es útil cuando se itera sobre las propiedades de un objeto con un bucle for...in, ya que este bucle también incluye las propiedades heredadas. Puedes usar hasOwnProperty() dentro del bucle para filtrar solo las propiedades directas del objeto. */

//isPrototypeOf()
/*El método isPrototypeOf() en JavaScript es utilizado para verificar si un objeto existe en la cadena de prototipos de otro objeto. Este método devuelve true si el objeto especificado está en la cadena de prototipos del objeto desde el que se llamó este método, y false en caso contrario.*/
function Fruta() {
}

let manzana = new Fruta();

console.log(Fruta.prototype.isPrototypeOf(manzana));  // Devuelve: true
console.log(Object.prototype.isPrototypeOf(manzana)); // Devuelve: true

/*En este ejemplo, Fruta.prototype.isPrototypeOf(manzana) devuelve true porque Fruta.prototype está en la cadena de prototipos de manzana. De manera similar, Object.prototype.isPrototypeOf(manzana) también devuelve true porque todos los objetos en JavaScript heredan de Object.prototype, lo que significa que Object.prototype está en la cadena de prototipos de cualquier objeto.*/

//toString
/*El método toString() en JavaScript es un método incorporado en el prototipo de varios objetos, que se utiliza para convertir y representar el objeto como una cadena de texto. Aquí te dejo algunos ejemplos de cómo se utiliza en diferentes tipos de objetos:*/

//1.Funciones
function saludo() {
    return "¡Hola, mundo!";
}
console.log(saludo.toString());
// Salida: "function saludo() { return \"¡Hola, mundo!\"; }"

//2.Cadenas de texto
let texto = "¡Hola, mundo!";
console.log(texto.toString());
// Salida: "¡Hola, mundo!"

//Expresiones regulares
var miExp = new RegExp('a+b+c');
console.log(miExp.toString());
// Salida: "/a+b+c/"

//Símbolos
console.log(Symbol('desc').toString());
// Salida: "Symbol(desc)"

//Arreglos
const array1 = [1, 2, "a", "1a"];
console.log(array1.toString());
// Salida: "1,2,a,1a"

/*Es importante mencionar que el comportamiento de toString() puede variar dependiendo del tipo de objeto con el que se esté trabajando. En general, se utiliza internamente por JavaScript cuando un objeto necesita ser representado como texto o cuando un objeto necesita ser utilizado como una cadena.*/

//toLocaleString

/*El método toLocaleString() en JavaScript es un método incorporado en el prototipo de varios objetos, que se utiliza para convertir y representar el objeto como una cadena de texto de manera sensible al idioma y formato local. Aquí te dejo algunos ejemplos de cómo se utiliza en diferentes tipos de objetos: */

//Fechas
let fecha = new Date();
console.log(fecha.toLocaleString("en-US")); // Formato de fecha de Estados Unidos
console.log(fecha.toLocaleString("es-ES")); // Formato de fecha de España

//Números
const numero = 123456.789;
const numeroString = numero.toLocaleString('en-IN'); // Formato de número de India
console.log(numeroString); // "1,23,456.789"

//Arreglos
const precios = [123456.789, 987654.321];
console.log(precios.toLocaleString('en-IN')); // "1,23,456.789,9,87,654.321"

/*La principal diferencia entre toString() y toLocaleString() es que toString() convierte un objeto a una cadena de texto de una manera estándar, mientras que toLocaleString() convierte un objeto a una cadena de texto de una manera que es sensible al idioma y formato local. Esto significa que toLocaleString() puede dar resultados diferentes dependiendo de la configuración regional del sistema en el que se ejecuta el código56.

Por ejemplo, si tienes una fecha y la conviertes a una cadena de texto con toString(), obtendrás una representación estándar de esa fecha. Pero si usas toLocaleString(), la representación de la fecha puede variar dependiendo de la configuración regional del sistema. En los Estados Unidos, por ejemplo, las fechas se suelen representar en el formato mes/día/año, mientras que en muchos otros países se utilizan otros formatos, como día/mes/año56.

Es importante mencionar que el comportamiento de toLocaleString() puede variar dependiendo del tipo de objeto con el que se esté trabajando. En general, se utiliza internamente por JavaScript cuando un objeto necesita ser representado como texto de una manera que es sensible al idioma y formato local567. */