/**
 * Object methods
 */

const person = {
    name: 'John',
    age: 30,
    greet() {
        console.log('Hello');
    }
};

person.greet(); // Hello

// Object.keys(): get the keys of an object

const keys = Object.keys(person);

console.log(keys); // ['name', 'age', 'greet']

// Object.values(): get the values of an object

const values = Object.values(person);

console.log(values); // ['John', 30, [Function: greet]]

// Object.entries(): get the keys and values of an object

const entries = Object.entries(person);

console.log(entries); // [['name', 'John'], ['age', 30], ['greet', [Function: greet]]]

// Object.assign(): copy the properties from one object to another

const target = {
    a: 1
};

const source = {
    b: 2
};

const returnedTarget = Object.assign(target, source);

console.log(target); // { a: 1, b: 2 }
console.log(returnedTarget); // { a: 1, b: 2 }

// Note: Look, the target object is modified. If you want to avoid this, 
// pass an empty object as the first argument:

const target2 = {
    a: 1
};

const source2 = {
    b: 2
};

const returnedTarget2 = Object.assign({}, target2, source2);

console.log(target2); // { a: 1 }
console.log(returnedTarget2); // { a: 1, b: 2 }

// Object spread operator

const target3 = {
    a: 1
};

const source3 = {
    b: 2
};

const returnedTarget3 = { ...target3, ...source3 };

console.log(target3); // { a: 1 }
console.log(returnedTarget3); // { a: 1, b: 2 }

// Object.freeze(): prevent the modification of an object

const person2 = {
    name: 'John'
};

Object.freeze(person2);

person2.name = 'Doe';

console.log(person2); // { name: 'John' }

// Object.seal(): prevent the addition and deletion of properties

const person3 = {
    name: 'John'
};

Object.seal(person3);

person3.age = 30;

console.log(person3); // { name: 'John' }

delete person3.name;

console.log(person3); // { name: 'John' }

// Object.is(): compare two objects

//use case: compare two objects
const person4 = {
    name: 'John'
};

const person5 = {
    name: 'John'
};

console.log(Object.is(person4, person5)); // false, 

// why? Because they are different objects, remember the content of the object 
// is not compared but the reference to the object.


