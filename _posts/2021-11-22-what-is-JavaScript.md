---
title: "What is JavaScript?"

categories:
- Web Development

tags:
- JavaScript

toc: true
toc_sticky: true

---
> ✒ Reference: [Introduction - JavaScript by Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)



## What is JavaScript? 

- A **cross-platform, object-oriented scripting language** to make webpages interactive
- Connects the objects of its environment to provide programmatic control inside a host environment.
- Core JS can be extended by supplementing it with additional objects.
  - Client-side JS: extends the core language by supplying objects to control a browser and its Document Object Model (i.e. respond to user events).
  - Server-side JS: extends the core language by supplying objects relevant to running JS on a server (i.e. communicate with a DB).

## JS  and Java

- JS follows most Java expression syntax, naming conventions, and basic control-flow constructs.
- Java 
  - compile-time system of classes built by declarations 
- JS
  - Runtime system based on smaller sets of data types
  - Prototype-based object model (dynamic inheritance: what is inherited can vary for individual objects)
  - free-form language: dynamic; variables, parameters, function return types are not explicitly typed.

| JavaScript                                                   | Java                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Object-oriented. No distinction between types of objects. Inheritance is through the prototype mechanism, and properties and methods can be added to any object dynamically. | Class-based. Objects are divided into classes and instances with all inheritance through the class hierarchy. Classes and instances cannot have properties or methods added dynamically. |
| Variable data types are not declared (dynamic typing, loosely typed). | Variable data types must be declared (static typing, strongly types). |
| Cannot automatically write to hard disk.                     | Can automatically write to hard disk.                        |

---

## Getting started with JavaScript

- Web Console (`Ctrl`+`Shift`+`I`): returns the last expression entered

- Every time something is entered into the console, it is actually surrounded by `console.log` around `eval`

``` javascript
console.log(eval('3 + 5'))
```

- My first "Hello world" JS code!

``` javascript
(function(){
"use strict";
/* Start of your code */
function greetMe(yourName) {
alert('Hello ' + yourName);
}

greetMe('World');
/* End of your code */
})();
```

- `(function(){"use strict";` prevents semantics in JavaScript, and prevents code snippets executed in the console from interacting with one-another

