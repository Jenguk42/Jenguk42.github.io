---
title: "Template literals"

categories: 
- Web Development

tags:
- JavaScript

toc: true
toc_sticky: true
---

> ✒ Reference: [MDN Web Docs - Event.target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)

## Template literals
Template literals are literals delimited with backticks (`), allowing embedded expressions called substitutions.
Placeholders are indicated by the dollar sign and curly braces: `${expression}` 

## Untagged template literals
Untagged template literals concatenate the parts into a string. This is useful for string interpolation and multiline strings.

```jsx
// Multiline strings
`unescaped newlines
are allowed`

// More readable substitutions
let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`)
// "Fifteen is 15 and not 20."
```

## Tagged template literals
A tagged template has an expression preceding the template literal, which is the name of its tag function. Tag functions allow manipulation of string, taking an array of string values as the first argument. 

```jsx
let person = 'Mike';
let age = 28;

function myTag(strings, personExp, ageExp) {
  let str0 = strings[0]; // "That "
  let str1 = strings[1]; // " is a "
  let str2 = strings[2]; // "."

  let ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

let output = myTag`That ${ person } is a ${ age }.`;

console.log(output);
// That Mike is a youngster.
```