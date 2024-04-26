### All about Regular Expressions

Regular expressions are a powerful tool for matching patterns in text. This document will provide a brief overview of regular expressions and how they can be used in JavaScript.

### What is a Regular Expression?

A regular expression is a sequence of characters that define a search pattern. Regular expressions are used to search for patterns in text, such as email addresses, phone numbers, or dates. Regular expressions can be used to match specific characters, words, or patterns of characters in a string.

### How to Use Regular Expressions in JavaScript

In JavaScript, regular expressions are created using the `RegExp` object. Regular expressions can be used with the `test()` method to check if a string matches a pattern, or with the `exec()` method to extract the matched pattern from a string:

```javascript
const pattern = new RegExp('hello');
const str = 'hello world';

console.log(pattern.test(str)); // true
console.log(pattern.exec(str)); // ['hello']
```

Regular expression can also be defines as a literal using forward slashes:

```javascript
const pattern = /hello/;
const str = 'hello world';

console.log(pattern.test(str)); // true
console.log(pattern.exec(str)); // ['hello']
// the exec() method returns an array with the matched pattern
```

Regular expressions can also be used with the `match()` method to find all occurrences of a pattern in a string:

```javascript
const pattern = /[a-z]/g; // the g flag is used to find all occurrences of the pattern

const str = 'hello world hello';

console.log(str.match(pattern)); // ['hello', 'hello']
```