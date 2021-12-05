---
title: "JavaScript libraries"

categories: 
- Web Development

tags:
- JavaScript

toc: true
toc_sticky: true
---

## What are JavaScript libraries?

JS libraries contain various functions, methods, or objects to perform practical tasks on a webpage or JS-based application. It saves time and effort to make use of the libraries instead of making everything from scratch.

## jQuery

jQuery is a classic JS library that is fast, light-weight, and feature-rich. It handles DOM manipulation and traversal, animation, event handling, and Ajax.

A html can make use of jQuery by adding the following script: (The `src` should point to a copy of jQuery. Downloaded [here!](https://jquery.com/download/))

```html
<script src="jquery.js"></script>
```

We can also use the google JavaScript library:

```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
```

## jQuery Syntax

jQuery chaining: Return value of any jQuery method is the element selected by the method. 

```html
<script type="text/javascript">
	$('CSS selector').method2().method2();
</script>
```

Some examples of a method:
- `.html('text')`: add `'text'` to the selected class
- `.css('type', 'value')`: change the CSS type to value



