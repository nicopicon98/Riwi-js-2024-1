### strict equality

- The most notable difference between this operator and the equality (==) operator is that if the operands are of different types, the == operator attempts to convert them to the same type before comparing.

- The === operator does not do this, which means that it will not perform type coercion. If the operands are of different types, the === operator will return false.

### Considerations

- If the operands are of different types, return false.
- If both operands are objects, return true only if they refer to the same object.
- If both operands are null or both operands are undefined, return true.
- If either operand is NaN, return false.
- Otherwise, compare the two operand's values:
- Numbers must have the same numeric values. +0 and -0 are considered to be the same value.
- Strings must have the same characters in the same order.
- Booleans must be both true or both false.

```js

console.log(1 === 1); // true
console.log(1 === '1'); // false
console.log(1 === true); // false
console.log(1 === 'true'); // false
console.log(1 === '1'); // false
console.log(1 === 2); // false
console.log(1 === 1.0); // true
console.log(1 === 1.1); // false
console.log(1 === NaN); // false
console.log(1 === null); // false
console.log(1 === undefined); // false
console.log(1 === {}); // false
console.log(1 === []); // false
console.log(1 === [1]); // false
console.log(1 === [1, 2]); // false
console.log(1 === [1, 2, 3]); // false
console.log(1 === { a: 1 }); // false
console.log(1 === { a: 1, b: 2 }); // false
console.log(1 === { a: 1, b: 2, c: 3 }); // false
console.log(1 === function () {}); // false
console.log(1 === new Date()); // false
console.log(1 === /test/); // false

```

- Now, let's see some examples of the strict equality operator in action, with NaN, undefined,
null, and objects:

```js

console.log(NaN === NaN); // false
console.log(undefined === undefined); // true
console.log(null === null); // true
console.log({} === {}); // false
console.log([] === []); // false
console.log(function () {} === function () {}); // false

```

- Unless we make a copy of the object or array, the strict equality operator will return false because the objects and arrays are different instances. When we make a copy we are pointing to the same reference, so the strict equality operator will return true.

```js

const obj1 = { a: 1 };
const obj2 = obj1;
console.log(obj1 === obj2); // true

const arr1 = [1, 2, 3];
const arr2 = arr1;
console.log(arr1 === arr2); // true

```

- If the operands are of different types, return false.
- If both operands are objects, return true only if they refer to the same object.
- If both operands are null or both operands are undefined, return true.
- If either operand is NaN, return false.
- Otherwise, compare the two operand's values:
- Numbers must have the same numeric values. +0 and -0 are considered to be the same value.
- Strings must have the same characters in the same order.
- Booleans must be both true or both false.
