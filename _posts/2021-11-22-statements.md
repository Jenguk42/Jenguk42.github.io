---
title: "Statements"

categories:
- JS

---
###### ✒ Reference: [Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) from the Mozilla JavaScript Guide.



## `labeled` statement

- Provides a statement with an identifier; can be used to identify a loop, then `break` or `continue` statements 

```javascript
label :
	statement
```
- Example of breaking to a label
```javascript
let x = 0;
let z = 0;

labelCancelLoops: while (true) {
  console.log('Outer loops: ' + x);
  x += 1;
  z = 1;
  while (true) {
    console.log('Inner loops: ' + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}
```

- Example of continuing to a label

```javascript
let i = 0;
let j = 10;
checkiandj:
  while (i < 4) {
    console.log(i);
    i += 1;
    checkj:
      while (j > 4) {
        console.log(j);
        j -= 1;
        if ((j % 2) === 0) {
          continue checkj;
        }
        console.log(j + ' is odd.');
      }
      console.log('i = ' + i);
      console.log('j = ' + j);
  }
```



## `for...of` vs `for...in`

- `for...of` statement creates a loop Iterating over iterable objects (including `Array`, `Map`, `Set`, `arguments` object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
- `for...in` statement iterates a specified variable over all the enumerable properties of an object.
- Difference between `for...of` and `for...in` loop:
  - `for...in`: Loops through property names of an object. (Returns index when looping through an array; not useful)
  - `for...of`: Loops through items in an iterable collection (i.e. array) 

```javascript
const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}
```