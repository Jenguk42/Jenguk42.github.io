---
title: "HTML and CSS basics (INFO30005 W2)"

categories: 
- Uni works

tags:
- INFO30005
  
toc: true
toc_sticky: true
---

## WWW and markup files

WWW combines hypertext and the internet by defining two standards: 
- HTTP: defines how messages are passed between computers (how web pages are sent around)
- HTML: defines the structure of the page itself

When defining a page, you should consider:
1. Structure: Which elements are on the page? What are their relationships?
   - Opening tag, content, closing tag: element
2. Presentation
3. Behaviour: Change over time? New elements?

With html5, the three elements are completely separated within differnt files:
1. Structure: HTML
2. Presentation: CSS
3. Behaviour: JS

## Anatomy of an HTML page

When the web browser opens a file, it constructs the "document object model" (DOM)

![image](https://www.w3schools.com/js/pic_htmltree.gif)

- Root: HTML 
- 2 children: head, body

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        Page content
    </body>
</html>
```

![image](https://user-images.githubusercontent.com/54295374/157457559-71d3b47b-09c9-43ec-8a7e-b7e9b69d37d5.png)

- Block vs inline elements
  - block elements: paragraphs, goes to a new line and takes up 1. all the width available, and 2. as much vertical space it needs
  - inline elements: placed within block elements without breaking the flow

- Identifying names: ids and classes
  - `<div id="unique_id" class="class1 class2">`
  - IDs have to be unique; classes do not

## CSS

![image](https://www.w3schools.com/css/img_selector.gif)

The rule with the greater specificity overrides other rules that are being inherited (i.e. element > h1 > header)

```html
<!--Inline-->
<h1 style="color:blue">Hello!</h1>

<!--Internal-->
<head><style>
    h1{color:blue;}
    p {color:green;}
</style></head>

<!--External-->
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```