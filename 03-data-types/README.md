# Quotations about data types

## Data types

Data types are an important concept in programming. They are used to define the type of data that a variable can store. In Javascript, there are several data types, such as:

- Number
- String
- Boolean
- Object
- Array
- Function
- Null
- Undefined

## Symbols

Symbols are a new primitive type in ECMAScript 6. They are used to create unique identifiers for objects. I'll show you a series of use cases for symbols for you to understand how they work.

```javascript

const symbol1 = Symbol('symbol1');
const symbol2 = Symbol('symbol1');

console.log(symbol1 === symbol2); // false

const obj = {
  [symbol1]: 'value1',
  [symbol2]: 'value2'
};

console.log(obj[symbol1]); // value1
console.log(obj[symbol2]); // value2

```


## Data type conversion

Data type conversion is the process of converting one data type to another. In Javascript, there are two types of conversion: implicit and explicit. Implicit conversion is done automatically by the Javascript engine, while explicit conversion is done manually by the programmer.

```javascript

const num = 42;
const str = '42';

console.log(num == str); // true
console.log(num === str); // false

console.log(Number(str)); // 42
console.log(String(num)); // '42'

```

## Data type coercion

Data type coercion is the process of converting one data type to another in order to perform an operation. In Javascript, data type coercion is done automatically by the Javascript engine when an operation is performed on two values of different types.

```javascript

console.log(1 + '2'); // '12'
console.log(1 - '2'); // -1

```

## Data type casting

Data type casting is the process of converting one data type to another using a specific method or function. In Javascript, there are several methods for casting data types, such as `Number()`, `String()`, and `Boolean()`.

```javascript

console.log(Number('42')); // 42
console.log(String(42)); // '42'
console.log(Boolean(0)); // false

```

## Data type comparison

Data type comparison is the process of comparing two values of different types. In Javascript, there are two types of comparison: strict and loose. Strict comparison (`===`) compares both the value and the type of the two values, while loose comparison (`==`) only compares the value of the two values.

```javascript

console.log(42 == '42'); // true
console.log(42 === '42'); // false

```

## Data type validation

Data type validation is the process of checking if a variable contains a specific data type. In Javascript, there are several methods for validating data types, such as the `typeof` operator, the `instanceof` operator, and the `Object.prototype.toString.call()` method.

```javascript

const num = 42;
const str = '42';

console.log(typeof num === 'number'); // true

console.log(str instanceof String); // false

console.log(Object.prototype.toString.call(num) === '[object Number]'); // true

```

## Data type checking

Data type checking is the process of determining the type of data that a variable contains. In Javascript, there are several ways to check the type of a variable, such as the `typeof` operator, the `instanceof` operator, and the `Object.prototype.toString.call()` method.


## Why is it that Array is a data type and Object is not?

In Javascript, arrays are a special type of object that have a length property and a series of methods for manipulating the data stored in the array. Objects, on the other hand, are a generic data type that can store any type of data in key-value pairs. While arrays are a specific type of object, they are treated as a separate data type in Javascript because of their unique properties and methods.

```javascript

const arr = [1, 2, 3];
const obj = { a: 1, b: 2, c: 3 };

console.log(typeof arr); // 'object'
console.log(typeof obj); // 'object'

console.log(Array.isArray(arr)); // true
console.log(Array.isArray(obj)); // false

```



