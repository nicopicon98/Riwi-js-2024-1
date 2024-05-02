// Definición de la función constructora Person
// Person es una función que simula una clase en JavaScript, configurando propiedades básicas para objetos que representen personas.
function Person(nombre, apellido, edad, profesion, hobbies) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.profesion = profesion;
    this.hobbies = hobbies;
}

// Agregar un método al prototipo de Person
// Este método es compartido por todas las instancias de Person, lo que ahorra memoria.
Person.prototype.introduce = function () {
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
};

// Definición de la función constructora Student que hereda de Person
// Student también toma propiedades específicas relacionadas con su contexto académico.
function Student(nombre, apellido, edad, profesion, hobbies, promedio, cursos) {
    // Simulando la llamada a 'super' para invocar el constructor de la clase padre
    this.super = Person;
    this.super(nombre, apellido, edad, profesion, hobbies); // Herencia de propiedades
    // Person.call(this, nombre, apellido, edad, profesion, hobbies);  // Herencia de propiedades
    this.promedio = promedio; // Propiedad específica de Student
    this.cursos = cursos;     // Propiedad específica de Student
}

// Establecer el prototipo de Student para heredar de Person
Student.prototype = Object.create(Person.prototype);
// Restaurar el constructor de Student
Student.prototype.constructor = Student;

// Agregar un método específico a Student
Student.prototype.estudiar = function () {
    console.log("Estoy estudiando.");
};

// Crear una instancia de Student
const myStudent = new Student("Ana", "Pérez", 22, "Ingeniería", ["Leer", "Escribir"], 90, ["Matemáticas", "Ciencias"]);

// Ejemplo de uso de métodos heredados y específicos
myStudent.introduce();  // "Hola, mi nombre es Ana Pérez y tengo 22 años."
myStudent.estudiar();   // "Estoy estudiando."

// Ocultamiento de propiedades (shadowing)
// Agregar una propiedad 'nombre' específica a myStudent que oculta la del prototipo
myStudent.nombre = "Carlos";
myStudent.introduce();  // Ahora introduce dirá "Hola, mi nombre es Carlos Pérez y tengo 22 años."

// Exploración de la cadena de prototipos (prototypes chaining)
// Verificando si Person.prototype es un prototipo de myStudent
console.log(Person.prototype.isPrototypeOf(myStudent));  // true
