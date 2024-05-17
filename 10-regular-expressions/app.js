// Solo letras en minúsculas
const onlyLowerCaseLetters = new RegExp("^[a-z]+$");

// Solo letras en minúscula y mayúscula
const onlyLowerUpperCaseLetters = /^[a-zA-Z]+$/;

// Solo dígitos numéricos
const onlyNumbers = /^\d+$/;

// Al menos un número
const atLeastOneNumber = /\d/;

// Verificar si es un email válido (simple)
const emailSimple = /^\S+@\S+\.\S+$/;

// Solo caracteres alfanuméricos (letras y números)
const alphanumeric = /^[a-zA-Z0-9]+$/;

// Código postal (ejemplo para EE.UU., 5 dígitos)
const zipcodeUS = /^\d{5}$/;

// Fecha en formato YYYY-MM-DD
const isoDate = /^\d{4}-\d{2}-\d{2}$/;

// URL (simple)
const urlSimple = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

// Verificar si una cadena contiene espacios
const containsSpace = /\s/;

// Solo letras minúsculas y números, sin caracteres especiales
const lowerCaseAndNumbers = /^[a-z0-9]+$/;

// Validar un nombre de usuario (letras, números, guiones bajos, de 3 a 16 caracteres)
const username = /^[a-z0-9_]{3,16}$/;

// Validar una contraseña fuerte (minúsculas, mayúsculas, números, caracteres especiales, al menos 8 caracteres)
const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

console.log(onlyLowerCaseLetters.test("A")); // false, "A" es mayúscula
console.log(onlyLowerUpperCaseLetters.test("1")); // false, "1" no es letra
console.log(onlyNumbers.test("123")); // true, solo números
console.log(emailSimple.test("user@example.com")); // true,


// Recursos adicionales

// https://regex-vis.com/