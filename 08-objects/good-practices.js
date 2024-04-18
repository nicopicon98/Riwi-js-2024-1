/**
 * Good practices when it comes to objects
 */

// 1. Use object literal syntax

// Bad

// const obj = new Object();

// Good

// const obj = {};

// 2. Use property value shorthand
// name = 'John Doe';

// Bad

// const obj = {
//     name: name,
// };

// Good

// const obj = {
//     name,
// };

// 3. computed vs static properties
// When to use computed properties?
// - El nombre de la propiedad es dinámico o depende de variables.
// - Estás trabajando con claves que necesitan ser calculadas o combinadas de alguna manera antes de ser utilizadas.

// const name = "dynamicKeyName";
// const obj = {
//     [name]: 'John Doe',
// };
// console.log(obj.dynamicKeyName);

// when to use static properties?
// - El nombre de la propiedad es conocido de antemano y no cambia.
// - Quieres código más simple y fácil de entender.

// const obj2 = {
//     name: 'John Doe',
// };

// 4. Use object destructuring

// Bad

// const obj = {
//     name: 'John Doe',
//     age: 30,
// };

// const name = obj.name;
// const age = obj.age;

// Good

// const obj = {
//     name: 'John Doe',
//     age: 30,
// };

// const { name, age } = obj;

// 5. Use object spread operator

// Bad

// const target = {
//     a: 1
// };

// const source = {
//     b: 2
// };

// const returnedTarget = Object.assign({}, target, source);

// console.log(target); // { a: 1 }

// Good

// const target = {
//     a: 1
// };

// const source = {
//     b: 2
// };

// const returnedTarget = { ...target, ...source };

// console.log(target); // { a: 1 }

// 6. Adding properties to an object

// 6.1. Using direct assignment

// const person = {
//     name: 'John Doe',
// };

// person.age = 30;

// Comments: This is the simplest way to add a property to an object.
// However, it's not recommended because it modifies the original object.
// In redux, for example, you should never mutate the state directly.
// Instead, you should return a new object with the updated properties.

// 6.2. Using Object.assign()

// const person = {
//     name: 'John Doe',
// };

// const updatedPerson = Object.assign({}, person, {
//     age: 30,
// });

// Comments: This is a better way to add a property to an object.
// It returns a new object with the updated properties.
// The original object remains unchanged.

// 6.3. Using the object spread operator

// const person = {
//     name: 'John Doe',
// };

// const updatedPerson = {
//     ...person,
//     age: 30,
// };

// Comments: This is the best way to add a property to an object.
// It returns a new object with the updated properties.
// The original object remains unchanged.

// 7. Removing properties from an object

// 7.1. Using direct assignment

// const person = {
//     name: 'John Doe',
//     age: 30,
// };

// delete person.age;

// Comments: This is the simplest way to remove a property from an object.
// However, it's not recommended because it modifies the original object.
// In redux, for example, you should never mutate the state directly.
// Instead, you should return a new object without the property to be removed.