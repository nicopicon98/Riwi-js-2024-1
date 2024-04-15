### JS Common Standards

This document outlines the common standards that should be followed when writing JavaScript code for the project.

#### Table of Contents

1. [General](#general)
2. [Variables](#variables)
3. [Functions](#functions)
4. [Objects](#objects)
5. [Arrays](#arrays)
6. [Strings](#strings)
7. [Comments](#comments)
8. [Formatting](#formatting)
9. [Resources](#resources)
10. [Glosary](#glosary)
11. [Peculiarities](#peculiarities)

### General

- Use `const` for all of your references; avoid using `var`.

Do:

```javascript

const a = 1;
const b = 2;

```

Don't:

```javascript

var a = 1;
var b = 2;

```

- Use `let` when you must reassign a variable.

Do:

```javascript

let count = 1;
if (true) {
  count += 1;
}

```

Don't:

```javascript

const count = 1;
if (true) {
  count += 1;
}

```

Otherwise you will get a "Uncaught TypeError: Assignment to constant variable." error.

- Use `const` by default, unless you know that the value will change.
- Use `const` for all function references.

Do:

```javascript

const myFunction = () => {};

```

Don't:

```javascript

let myFunction = function() {};

```

Technically, you can use `let` for function references, but it is not recommended. Remember let is for variables that will change, and functions does not change. Later on this course we'll tackle the function non-mutability.

- Use `let` for loop counters.

Do:

```javascript

for (let i = 0; i < 10; i++) {
  console.log(i);
}

```

Don't:

```javascript

for (var i = 0; i < 10; i++) {
  console.log(i);
}

```

- Use `const` for everything else.

### Variables

- Use meaningful variable names.

Do:

```javascript

const daysInWeek = 7;

```

Don't:

```javascript

const d = 7;

```

- Use camelCase for variable names.

Do:

```javascript

const daysInWeek = 7;

```

Don't:

```javascript

const days_in_week = 7;

```

### Functions

- Use function expressions instead of function declarations.

Do:

```javascript

const myFunction = function() {};

```

Don't:

```javascript

function myFunction() {}

```

This is why we use function expressions instead of function declarations:

- Function expressions are not hoisted, which makes it easier to understand the code.

### Glosary

- **const**: A constant is a value that cannot be altered by the program during normal execution. It cannot change through re-assignment, and it can't be re-declared.
- **reference**: A reference is a value that enables a program to indirectly access a particular datum, such as a variable's value or a record, in memory or on disk. The reference is said to refer to the datum.

### Peculiarities

#### Why are `const` objects mutable?

- When using `const` with objects, the object properties can be reassigned. And this is not a violation of the constant variable. Actually, an object can be reassigned because the reference is constant, but the properties of the object can be changed. So think it this way: the reference to the object cannot be changed, but the properties of the object can be changed. So I cannot do the following:

```javascript

const obj = { a: 1 };
obj = { a: 2 }; // Uncaught TypeError: Assignment to constant variable.

```

*But I can do the following:*

```javascript

const obj = { a: 1 };
obj.a = 2; // This is fine.

```

- And again, this is because the reference to the object is constant, but the properties of the object can be changed. Let's think of the object as a box. The box is constant, but the content of the box can be changed. Let's give a reference real life example. Let's say you have a box with a key inside. The box is constant, but the key can be changed. So you can't change the box, but you can change the key. So at the end of the road you can't change the box, but you can change the content of the box. Let's imagine a reference 0x1234 which is 'obj' the box and the key is the object. You cannot change the reference 0x1234 when you declare a variable with const but you can change the object inside the reference 0x1234.


#### Uncaught Error: Why uncaught error?

- The error (any type) is being thrown and you may think of uncaught as anti-intuitive, but actually it is not. Any time you don't the try-catch statement, once an error is actually thrown *uncaught* will mean that the error was thrown and not caught by a try-catch statement. So it is not that the error was not caught by the browser, it is that the error was thrown and not caught by a try-catch statement.

#### why `let` for loop counters?

- The `let` keyword is block scoped, and the `var` keyword is function scoped. So if you use `var` in a loop, the variable will be available outside the loop. This is not the case with `let`. So if you use `let` in a loop, the variable will be available only inside the loop. This is a good practice because you don't want to pollute the global scope with variables that are only used in a loop.

#### ƒ Number() { [native code] } - What is this?

- This is the constructor of the Number object. The Number object is a wrapper object allowing you to work with numerical values. A Number object is created using the Number() constructor. A primitive type value is automatically wrapped in a Number object when a property or method is called on it. This is a feature called autoboxing or unboxing. So when you see ƒ Number() { [native code] } it means that you are looking at the constructor of the Number object, and it is a native code because it is built-in JavaScript.

- Let's see an example:

```javascript

const number = Number
console.log(number); // ƒ Number() { [native code] }

```

*But if you print a function you created, you will see the function itself:*

```javascript

const myFunction = () => {};
console.log(myFunction); // () => {}

```

- So when you see ƒ Number() { [native code] } it means that you are looking at the constructor of the Number object, and it is a native code because it is built-in JavaScript.