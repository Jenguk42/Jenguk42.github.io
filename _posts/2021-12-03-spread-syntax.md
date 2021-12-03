---
title: "spread syntax"

categories: 
- Web Development

tags:
- JavaScript

toc: true
toc_sticky: true
---
> ✒ Reference: [MDN Web Docs - Spread syntax (...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

## Spread syntax
The JavaScript spread operator (...) can be used when all elements from an object or array need to be included in a list of some kind. It allows quick copy of all or part of an existing array or object into another array or object. (Often used in combination with destructuring)

## Examples: function calls

### Replace `apply()`

When using the elements of an array as arguments to a function, spread syntax can replace `Function.prototype.apply()`.

```javascript
// With apply()
function myFunction(x, y, z) { }
let args = [0, 1, 2];
myFunction.apply(null, args);

// With spread syntax
function myFunction(x, y, z) { }
let args = [0, 1, 2];
myFunction(...args);
```

### Apply for new operator

An array can be constructed directly with `new`. (`apply()` does a `[[Call]]`, not a `[[Construct]]`.

```javascript
let dateFields = [2021, 12, 3];  // 3 Dec 2021
let d = new Date(...dateFields);
```

## Examples: array literals

### Flexible addition of elements
Spread syntax allows flexible addition of new data to a local data store. By rerunning the last line of the code below, 3 can be added as many times as you like.

```javascript
let numberStore = [0, 1, 2];
let newNumber = 3;
numberStore = [...numberStore, newNumber];
```

### Copy an array
Spread syntax can also be used to create a new array that contains the existing array.

```javascript
let parts = ['B', 'C'];
let alphabets = ['A', ...parts, 'D', 'E'];
//  ["A", "B", "C", "D", "E"]

let numbers = [1, 2, 3];
let numbers2 = [...numbers]; // like numbers.slice()
numbers2.push(4);
// numbers2 becomes [1, 2, 3, 4] 
```

### Concate an array
Spread syntax can replace `Array.prototype.concat()` to concatenate to the end of an existing array, and also replace `Array.prototype.unshift()` to insert an array to the start of another existing array.

`unshift()` modifies the original array, whereas the spread syntax creates a new array.

```javascript
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

//  Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
arr1 = [...arr1, ...arr2]; 
// arr1 is now [0, 1, 2, 3, 4, 5]. 
// Using const with spread syntax will give TypeError!

//  Prepend all items from arr2 onto arr1
Array.prototype.unshift.apply(arr1, arr2)
arr1 = [...arr2, ...arr1];
//  arr1 is now [3, 4, 5, 0, 1, 2].
```

## Example: object literals

## Shallow-cloning or merging of objects
Spread syntax can replace `Object.assign()`. Note that it does not trigger `setters`.

```javascript
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```