### Flags in Regular Expressions

In JavaScript, regular expressions can be created with flags that modify the behavior of the regular expression. Flags are added to the end of a regular expression literal or constructor to specify how the regular expression should be interpreted.

Here are some common flags that can be used with regular expressions in JavaScript:

- `i` (case-insensitive): This flag makes the regular expression case-insensitive, so that it will match both uppercase and lowercase characters.

Example:

```javascript
const pattern = /hello/i;
const str = 'Hello world';

console.log(pattern.test(str)); // true
```

- `g` (global): This flag makes the regular expression search for all occurrences of the pattern in a string, rather than just the first occurrence.

Example:

```javascript

const pattern = /hello/g;
const str = 'hello world hello';

console.log(str.match(pattern)); // ['hello', 'hello']
console.log(pattern.test(str)); // true
console.log(pattern.exec(str)); // ['hello']
```

- `m` (multiline): This flag makes the regular expression match the beginning and end of each line in a multi-line string, rather than just the beginning and end of the entire string.

Example:

```javascript
const pattern = /^hello/m;
const str = 'hello world\nhello';

console.log(pattern.test(str)); // true
```

- `s` (dotAll): This flag makes the `.` character in the regular expression match all characters, including newline characters.

Example:

```javascript
const pattern = /hello.world/s;
const str = 'hello\nworld';

console.log(pattern.test(str)); // true
```

- `u` (unicode): This flag enables full Unicode support for the regular expression, including support for Unicode code point escapes and Unicode property escapes.

Example:

```javascript
const pattern = /\p{Script=Greek}/u;
const str = 'Γειά σας';

console.log(pattern.test(str)); // true
```
- `y` (sticky): This flag makes the regular expression match only at the current position in the string, rather than searching for all occurrences.

Example:

```javascript
const pattern = /hello/y;
const str = 'hello world hello';

console.log(pattern.test(str)); // true