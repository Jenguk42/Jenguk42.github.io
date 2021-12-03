---
title: "Arrow functions"

categories: 
- Web Development

tags:
- JavaScript

toc: true
toc_sticky: true
---

## Arrow function expressions

Difference of an arrow function from a traditional function expression:

- Does not have its own bindings to `this` or `super`, and should not be used as methods.
- Does not have `new.target` keyword.
- Not suitable for `call`, `apply` and `bind` methods, which generally rely on establishing a `scope`.
- Can not be used as `constructors`.
- Can not use `yield`, within its body.

## Syntax

Comparison between traditional functions and arrow functions:

```javascript
// Traditional function
function (a) {
    return a + 100;
}
 
// 'function' removed
(a) => {
    return a + 100;
}

// Body braces and 'return' removed (return is implied)
(a) => a + 100;

// Argument parenthesis removed
a => a + 100;
```

Different syntax of arrow functions:

```javascript
// One param (return not needed with simple expression)
param => expression

// Named functions are treated like variables
let name = param => expression

// Two params require paranthesis
(param1, paramN) => expression

// Reintroduce braces and 'return' for multi-line functions
param => {
  let a = 1;
  return a + param;
}

(param1, paramN) => {
   let a = 1;
   return a + param1 + paramN;
}

// returning the object {foo: "a"}
params => ({foo: "a"}) 

// Rest parameters
(a, b, ...r) => expression

// Default parameters
(a=400, b=20, c) => expression

// Destructuring within parameters
([a, b] = [10, 20]) => a + b;  // result is 30
({ a, b } = { a: 10, b: 20 }) => a + b; // result is 30
```

