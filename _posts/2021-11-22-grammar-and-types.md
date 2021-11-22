---
title: "Grammar and types"

categories:
- JS

---
###### ✒ Reference: [Grammar and types - JavaScript Guide by Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types)
###### I have excluded the syntax that are identical to those of Java.

# Basics

- JS is case-sensitive and uses the Unicode character set.
- Instructions are called **statements** and are separated by semicolons.
  - Not mandatory in a single-lined statement; but more than one statements should be separated by semicolons
  - Best practice to always write a semicolon after a statement
- The source text gets scanned from left to right, and is converted into a sequence of input elements which are:
  - tokens, control characters, line terminators, comments, or whitespaces (spaces, tabs, newline characters)
- Comments are shown as below:
```javascript
#!/usr/bin/env node
// hashbang comment: specifies the path to a particular JS engine that should execute the script
```

# Declarations 

## 3 kinds of variable declarations
1. **var**: Declares a variable, optionally initializing it to a value.
2. **let**: Declares a **block-scoped, local variable**, optionally initializing it to a value.
3. **const**: Declares a  **block-scoped, read-only** named constant.
   - If the keywords are omitted, the identifier is assumed to represent a variable.

---


## Variables
- identifiers (names of variables) have certain rules:
  - must start with a letter, (\_), or ($).
  - upper and lower case characters (case sensitive)
  - Can use most of ISO 8859-1 or Unicode letters
  
- Declaring variables (variable scope)
  - `var x = 42`: declares both **local and global** variables (depending on the execution context)
  - `let y = 13`, `const y = 13`: declares a **block-scope local** variable

``` javascript
if (true) {
    var x = 5; // global
}
console.log(x);  // x is 5

if (true) {
    let y = 5; // local
}
console.log(y);  // ReferenceError: y is not defined
```

---

## Evaluating variables

- A variable declared without value assignment have a value of **`undefined`**.
- Attempt to access results in a `ReferenceError` exception
- Can be used to determine whether a variable has a value
- boolean context: `false`; numeric context: `NaN` (`null`: boolean context `false`; numeric context `0`)

---

## Variable hoisting
- Hoisting: Referring to a variable declared later w/o getting an exception
- Variables in JS are "hoisted" or "lifted" to the top of the function or statement.
- Hoisted variables return a value of `undefined` even if you declare and initialize it after using the variable.
- Best practice to place all `var` statements as near to the top of the function as possible

``` javascript
console.log(x === undefined); // true
var x = 3;
```

---

## Function hoisting

- Only function declarations are hoisted, not the function expressions.

```javascript
/* Function declaration */
foo(); // "bar"
function foo() {
console.log('bar');
}

/* Function expression */
baz(); // TypeError: baz is not a function
var baz = function() {
console.log('bar2');
};
```

---

  ## Global variables

- In web pages, the global object is `window`. 
- Global variables can be accessed by `window.variable`, or specifying the `window` or `frame` name. (`windowName.varName`)

---

## Constants

- Created with `const` keyword
- Initialized to a value, cannot change the value while the script is running
- Cannot declare a constant with the same name as a function or variable in the same scope
- (1) Properties of objects assigned to constants and (2) contents of an array are not protected (can be changed)

``` javascript
const MY_OBJECT = {'key': 'value'};
MY_OBJECT.key = 'otherValue';

const MY_ARRAY = ['HTML','CSS'];
MY_ARRAY.push('JAVASCRIPT');
console.log(MY_ARRAY); //logs ['HTML','CSS','JAVASCRIPT'];
```

# Data structures and types

## Data types

- 7 primitive data types: Boolean, null, undefined (a top-level property whose value is not defined), Number (integer/ floating point number), BigInt (an integer with arbitrary precision, i.e. `9007727422n`), String, Symbol (a data type whose instances are unique and immutable)
- and Object (named containers for values)

---

## Data type conversion

- JS is a dynamically typed language: data types are automatically converted

---

## Numbers and the '+' operator

- JS converts numeric values to strings **only** when the expression contains numeric and string values with the `+` operator.

```javascript
'37' - 7 // 30
'37' + 7 // "377"
```

---

## Converting strings to numbers

- `parseInt()`: Always include the *radix* parameter (numerical system). Returns whole numbers.
- `parseFloat()`: Returns decimals.
- `+`: Unary plus operator

```javascript
parseInt('101', 2) //5
(+'1.1') + (+'1.1') //2.2
```

# Literals

*Literals* represent fixed values that you "literally" provide in your script.

## Array literals (= `Array` objects)

- A type of object initializer
  - List of 0 or more expressions, each of which represents an array element, enclosed in `[]`
  - When an array is created, it is initialized with the specified values as its elements, and its `length` is set to the number of arguments specified.
- If created in a top-level script, JS interprets the array each time it evaluates the expression containing the array literal.
- A literal used in a function is created each time the function is called.
- If two commas are put in a row, the array fills in the value `undefined` for the unspecified element. However, **the last comma is ignored**.

```javascript
let fish = ['Lion',, 'Angel']
// fish[0] is "Lion", fish[1] is undefined, and fish[2] is "Angel"
// length is 3

let myList = [,'home',,'school',]
// length is 4
// Only the last comma is ignored
```

---

## Boolean literals

- The Boolean type has two literal values: `true` and `false`.
- A Boolean object is a wrapper around the primitive Boolean data type.

---

## Numeric literals

- Integer literals in different bases, floating-point literals in base-10
- Numeric literals should be unsigned; `-123.4` is interpreted as a unary `-` operator applied to the numeric literal `123.4`.
- **Integer literals**
  - No leading `0`: decimal, base 10 (i.e. `0`, `114`, `1234345n`)
  - Leading `0` or leading `0o` (`0O`): octal (i.e.`015`, `0001`, `0o333n`)
    - Includes digits 0-7
  - Leading `0x` (`0X`): hexadecimal (i.e. `0x123`, `0x123ABCDEn`) 
    - Includes digits 0-9 and letters a-f and A-F (case insensitive)
  - Leading `0b` (`0B`): binary
  - Trailing `n` suffix: BigInt literal
- **Floating-point literals**
  - `[digits].[digits] [(E|e) [(+|-)] digits]`
  - i.e. `3.141592`, `.1234`, `3.1E+12`, `.1e-23`

---

## Object literals

- 0 or more pairs of property names and associated values of an object, enclosed in `{}`
- Example of an object literal

```javascript
var sales = 'Toyota';

function carTypes(name) {
  if (name === 'Honda') {
    return name;
  } else {
    return "Sorry, we don't sell " + name + ".";
  }
}

var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales, manyCars: {a: 'Saab', b: 'Jeep'}, 7: 'Mazda' };

console.log(car.myCar);   // Saturn (A property myCar is assigned to a new string "Saturn")
console.log(car.getCar);  // Honda (The result of invoking the function immediately assigned to the getCar property)
console.log(car.special); // Toyota (Uses an existing variable)

console.log(car.manyCars.b); // Jeep (Nested objects)
console.log(car[7]); // Mazda (Numeric literal for the name of a property)
```

- If a property name is not a valid identifier, it cannot be accessed as a dot (`.`) property.

``` javascript
var unusualPropertyNames = {
  '': 'An empty string',
  '!': 'Bang!'
}
console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string 
console.log(unusualPropertyNames['']);  // An empty string
console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
console.log(unusualPropertyNames['!']); // Bang!
```

