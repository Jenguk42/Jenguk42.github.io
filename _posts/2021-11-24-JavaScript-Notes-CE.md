---
title: "JavaScript basics"

categories:
- Web Development

tags:
- JavaScript

toc: true
toc_sticky: true

---

> ✒ This note is created based on: [JavaScript tutorial by 'Coding Everybody'](https://opentutorials.org/course/3085). 



## JavaScript Basics

- JS is a programming language that controls HTML.
- A browser cannot change itself once it is printed on screen  → We can interact with the user via JS.
- i.e. night to day button
```html
<input type="button" value="night" onclick="
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('body').style.color='white';
    ">
```
- The JS code in red is run when the button with the `onclick` property is clicked.
- We can change the style of body tag (change the CSS code)



## script tag

- We need to inform `html` that we will start using JS: how?
- The code between `<script>` and `</script>` are recognized as JS by the browser

``` html
<h1>JScode</h1>
<script> 
    document.write(1+1); <!-- Changed the html using javascript --> 
</script>
```
> JS: dynamic content (changed 1+1 to 2) 

``` html
<h1>html</h1>
1+1 <!-- changed the html itself -->
```
> html: static content



## event

- JavaScript's interaction with HTML is handled through **events** that occur when **the user or the browser manipulates a page** 
- Event types mostly start with `on`
- We can make an interactive page using javaScript layered on html
- Many DOM elements can be set up to accept (or "listen" for) these events, and execute code in response to process (or "handle") them.

``` html
<input type="button" value="create alert" onclick="alert('hi')">
```
>  `onclick`: Triggers on a mouse click

``` html
<input type="text" onchange="alert('changed')">
```
> `onchange`: Triggers when an element changes

``` html
<input type="text" onkeydown="alert('key down!')">
```
> `onkeydown`: Triggers when a key is pressed

- A function that returns the position of click event to console

```jsx
const onClick = (e) => {
    console.log(e);
}
```



## Console

- Inspect → Console / Inspect → esc on Elements
- You can directly execute a piece of JS code on chrome 
- You can run JS in the Console to interact with the page (can also work with any arbitary JS)
- Convenient!
  - No need to create a new html file 
  - Can work with data on any web page to suit your needs
- newline within the code: shift + enter
- `console.log(whatever I want);` returns the value in console



## CSS Basics

- You can change the design of a browser using the style attribute and CSS
  - Completely different from JS
  - Google it whenever you need it! i.e. CSS background color property

```html
<h2 style="background-color:coral;
           color:powderblue">
    JavaScript
</h2>
```

- The `style` element contains style information for a document, or part of a document. It contains CSS.
  - `<div> </div>`: Block-level organization and styling of page elements (line break placed by default)
  - `<span> </span>`: Inline organization and styling (no line break)
  - Both defines a division or a section in an HTML document, which can be styled with CSS or manipulated by JS
-  `<style></style>` is a delimiter that tells the browser that the content within is written in CSS (just like `<script></script>` for JS)

```html
<html>
  <head>
    <style>
      #first{
        color:green;
      } /*Change the color of all content within the page where **id** of the tag is first*/
      .js{
      	color:red;
      } /*Change the color of all content within the page where **class** of the tag is js*/
      span{
        color:blue;
      } /*Change the color of all <span> elements within the page*/
    </style> 
  </head>
  <body>
    <h1><a href="index.html">WEB</a></h1>
    <h2>JavaScript</h2>
      <p>
      <span id="first" class="js">JavaScript</span> (/ˈdʒɑːvəˌskrɪpt/[6]), often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language. Alongside <span>HTML</span> and <span>CSS</span>, <span class="js"></span>JavaScript</span> is one of the three core technologies of World Wide Web content production.
      </p> <!-- First 'JavaScript': green, The rest: red, 'HTML' and 'CSS': blue-->
  </body>
</html>
```

- Selectors `span` vs `class` vs `id`
  - Priority: `id` → `class` → `span`
  
  - Used by CSS and JavaScript to select and access specific elements

  - `class`
  
    - Used to specify a **class** for an HTML element
    - Can be used by multiple HTML elements
  
  - `id`
  
    - Used to specify a **unique id** for an HTML element
    - Must be unique within the HTML document ()
  
    
  
- Selecting a tag to manipulate

```html
<html>
<body>
	<h1><a href="index.html">WEB</a></h1>
    <input type="button" value="night" onclick="
	document.querySelector('body').style.backgroundColor = 'black';
	document.querySelector('body').style.color = 'white';
	"> <!-- 'body' element is selected to change the colors (using JS) -->
    <input type="button" value="day" onclick="
	document.querySelector('body').style.backgroundColor = 'white';
	document.querySelector('body').style.color = 'black';
	">
	<p> ... </p>
</body>
</html>
```



## Application of conditional statements

- Changing the text/background color with respect to the `value`of `#nightday` button
- `if...else` statement can be used instead of using two buttons

```html
<h1><a href="index.html">WEB</a></h1>
<input id="night_day" type="button" value="night" onclick=""> 
	<!--- The JS below goes here --->
<ol>
    <li><a href="1.html">HTML</a></li>
    <li><a href="2.html">CSS</a></li>
    <li><a href="3.html">JavaScript</a></li>
</ol>
<h2>JavaScript</h2>
<p> ... </p>
```

```javascript
if (document.querySelector('#night_day').value === 'night') {
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
    document.querySelector('#night_day').value = 'day';
} else {
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
    document.querySelector('#night_day').value = 'night';
}
```


## Refactoring

- Always refactor to increase readability and efficiency of the code!

```javascript
var target = document.querySelector('body');
if (this.value === 'night') {
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    this.value = 'day';
} else {
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    this.value = 'night';
}
```

- If the code within an event refers to itself, call it `this`
- `document.querySelector('body').style` is cloned -> set `target` as a `var` and reuse it



## Application of arrays and iteration

- Adding the elements of an array by iterating through it

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Arrays and Loops</title>
</head>
<body>
    <h1>Loop and Array</h1>
    <script>
        let coworkers = ['laeSion', 'cheolSoo', 'yeongWoo', 'doYeon'];
    </script>
    <h2>Co-workers</h2>
    <ul>
<!--        <li>laeSion</li>-->
<!--        <li>cheolSoo</li>-->
<!--        <li>yeongWoo</li>-->
<!--        <li>doYeon</li>-->
        <script>
            let i = 0;
            while(i < coworkers.length) {
                document.write('<li>' + coworkers[i] + '</li>');
                i = i + 1;
            }
        </script>
    </ul>
</body>
</html>
```

- Applying the concept to the button example: change the color of html to `powderblue` for the night version

```javascript
<h1><a href="index.html">WEB</a></h1>
<input id="night_day" type="button" value="night" onclick="
  let target = document.querySelector('body');
  let links = document.querySelectorAll('a');

  if (this.value === 'night') {
      target.style.backgroundColor = 'black';
      target.style.color = 'white';
      this.value = 'day';

      // Change the color of links
      let i = 0;
      while(i<links.length) {
          links[i].style.color = 'powderblue';
          i = i + 1;
      }

  } else {
      target.style.backgroundColor = 'white';
      target.style.color = 'black';
      this.value = 'night';

      // Change the color of links
      let i = 0;
      while(i<links.length) {
          links[i].style.color = 'blue';
          i = i + 1;
      }
  }
">

<ol >
    <li><a href="1.html">HTML</a></li>
    <li><a href="2.html">CSS</a></li>
    <li><a href="3.html">JavaScript</a></li>
</ol>

<h2>JavaScript</h2>
<p> ... </p>
```

- .querySelector(): gets the first element by CSS selector
- .querySelectorAll(): gets all elements (in an array) with the corresponding CSS selector 



## Application of functions

- JavaScript function: a block of code designed to perform a particular task
- Executed when something invokes the function (event driven, called from JS, or self invoked)
- It is a good idea to create a function to set a name to a certain logic

```javascript
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

- Adding a function to refactor the JS within html body

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Refactoring via functions</title>
    <script>
        function nightDayHandler(self) {
            let target = document.querySelector('body');
            let links = document.querySelectorAll('a');

            if (self.value === 'night') {
                target.style.backgroundColor = 'black';
                target.style.color = 'white';
                self.value = 'day';
                let i = 0;
                while (i < links.length) {
                    links[i].style.color = 'powderblue';
                    i = i + 1;
                }

            } else {
                target.style.backgroundColor = 'white';
                target.style.color = 'black';
                self.value = 'night';
                let i = 0;
                while (i < links.length) {
                    links[i].style.color = 'blue';
                    i = i + 1;
                }
            }
        }
    </script>
</head>
<body>
    <h1><a href="index.html">WEB</a></h1>
    <input id="night_day" type="button" value="night" onclick="
    nightDayHandler(this);
    "> <!-- 'this' refers to the input button -->

    <ol >
        <li><a href="1.html">HTML</a></li>
        <li><a href="2.html">CSS</a></li>
        <li><a href="3.html">JavaScript</a></li>
    </ol>

    <h2>JavaScript</h2>
    <p> ... </p>
</body>
</html>
```



## Objects
- 'A storage box with a name that is used to group and organize the functions and variables that are related to each other'
- {`key` : `value`}
- An object can be thought of as a file directory

```javascript
if (self.value === 'night') {
    setBodyBackgroundColor('black');
    setBodyColor('white');
    self.value = 'day';

    setLinksColor('powderblue');
} else {
    setBodyBackgroundColor('white');
    setBodyColor('black');
    self.value = 'night';

    setLinksColor('blue');
}
```

```javascript
if (self.value === 'night') {
    body.setBackgroundColor('black');
    body.setColor('white');
    self.value = 'day';

    setLinksColor('powderblue');
} else {
    body.setBackgroundColor('white');
    body.setColor('black');
    self.value = 'night';

    link.setColor('blue');
}
```

- Creating and using an object

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Objects</title>
    </head>
    <body>
       <h1> Creating an Object </h1>
        <script>
        var coworkers = {
            "worker1":"doyeon",
            "worker2":"jenny"
        };
        document.write("worker1: " + coworkers.worker1 + "<br>"); 
        /* . is the object access operator */
        
        coworkers.bookkeeper = "doho";
        document.write("bookkeeper: " + coworkers.bookkeepper + "<br>");
        coworkers["data scientist"] = "taeho";
        document.write("data scientist: " + coworkers["data scientist"] + "<br>");
        /* Adding new elements to an object */
    	</script>
    </body>
</html>
```

- Iterating through an object using `key`

```javascript
for (var key in coworkers) {
document.write(key + ' : ' + coworkers[key] + '<br>');
}
```

- Property and method
  - Property: a variable saved within an object
  - Method: a function saved within an object 
    - i.e. `document` is an object; `querySelector()` is it's method

```javascript
coworkers.showAll = function() {
for (var key in this) {
document.write(key + ' : ' + this[key] + '<br>');
}
}
coworkers.showAll();
// Same as function showAll() {}
// showAll is also printed (it belongs in the object)
```



### Application of Objects

```html
<!DOCTYPE html>
<html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Refactoring via functions</title>
      <script>

        var Links = {
          setColor: function (color) {
            let links = document.querySelectorAll('a');
            // Change the color of a tags
            let i = 0;
            while (i < links.length) {
              links[i].style.color = color;
              i = i + 1;
            }
          }
        }

        var Body = {
          setColor: function(color) {
            document.querySelector('body').style.color = color;
          },
          setBackgroundColor: function(color) {
            document.querySelector('body').style.backgroundColor = color;
          }
        }

        function nightDayHandler(self) {

          if (self.value === 'night') {
            Body.setBackgroundColor('black');
            Body.setColor('white');
            self.value = 'day';

            Links.setColor('powderblue');
          } else {
            Body.setBackgroundColor('white');
            Body.setColor('black');
            self.value = 'night';

            Links.setColor('blue');
          }
        }
      </script>
    </head>
    <body>
    <h1><a href="index.html">WEB</a></h1>
    <input id="night_day" type="button" value="night" onclick="
        nightDayHandler(this);
        ">

    <ol >
      <li><a href="1.html">HTML</a></li>
      <li><a href="2.html">CSS</a></li>
      <li><a href="3.html">JavaScript</a></li>
    </ol>

    <h2>JavaScript</h2>
    <p> ... </p>
    </body>
</html>
```



## Using separate files
- We can create a new JS file and reuse it in different html pages by referring to `src`
- Convenient for developers; also saves cache for the browser

```html
<!DOCTYPE html>
<html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Refactoring via functions</title>
      <script src="colors.js"></script>
    </head>
    <body>
    <h1><a href="index.html">WEB</a></h1>
    <input id="night_day" type="button" value="night" onclick="
        nightDayHandler(this);
        ">

    <ol >
      <li><a href="1.html">HTML</a></li>
      <li><a href="2.html">CSS</a></li>
      <li><a href="3.html">JavaScript</a></li>
    </ol>

    <h2>JavaScript</h2>
    <p> ... </p>
    </body>
</html>
```

- `colors.js` contains all JavaScript code



## Library & Framework

- Models used for collaboration
- Library: Software that has an organized collection of codes needed for writing a certain program
  - We take the code snippets from a library
  - i.e. Using jQuery with a CDN (we can take the codes using `<script src = ...>`
- Framework: A semi-finished product required to create a certain program, which can be modified according to achieve different functionalities
  - We build our code on a framework

- jQuery is a library that eases manipulation of JS 
  - i.e. Using google jQuery library

```html
<head>
  <title>WEB1 - HTML</title>
  <meta charset="utf-8">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="colors.js"></script>
</head>
```

- i.e. jQuery takes care of all 'a' tags via function `$('a')`

```javascript
setColor: function (color) {
    //let links = document.querySelectorAll('a');
    //let i = 0;
    //while (i < links.length) {
    //    links[i].style.color = color;
    //    i = i + 1;
    $('a').css('color', color);
    // $('body').css('backgroundColor', color);
}
```