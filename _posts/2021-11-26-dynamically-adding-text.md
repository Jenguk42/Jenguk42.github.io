---
title: "`document.write()` vs `Element.innerHTML`"

categories:
- JS
---
## `document.write()` method

```javascript
document.write("A string of text");
```

- Writes a string of text to a document **stream** opened by `document.open()`
- Calling `document.write()` on a loaded document automatically calls `document.open()`, since the method writes to the stream. After writing, `document.close()` will be called to finish loading the page.
- Hence the **document will be cleared**, and the whole page will be overwritten!

## `Element.innerHTML` property

```javascript
const content = element.innnerHTML;
element.innerHTML = content;

//Erasing contents of the document's body attribute
document.body.innerHTML = ""; 

//Changing the content of 'output1'
document.getElementById('output1').innerHTML = 'Some text!';
```

- Gets or sets the HTML or XML markup contained within the element

- Needs to be attached to the element where you want to put the text

- Value: A DOMString containing the HTML serialization of the element's descendants

  - Setting the value of `innerHTML` removes all descendants and replaces them with new content

  - When inserting user-supplied data you should consider `Element.SetHTML()` to sanitize the potentially malicious content.

    

- Appending a new list item to the existing list:

> HTML

```html
<ul id="list">
  <li><a href="#">Item 1</a></li>
  <li><a href="#">Item 2</a></li>
  <li><a href="#">Item 3</a></li>
</ul>
```

> JavaScript

```javascript
const list = document.getElementById("list");

list.innerHTML += `<li><a href="#">Item ${list.children.length + 1}</a></li>`;
```