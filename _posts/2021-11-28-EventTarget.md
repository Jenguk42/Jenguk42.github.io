---
title: "Web APIs"

categories:
- JS
---

## What is a Web API?

- Web API: Application programming interface for the Web
- Provides communication or interaction between software applications, and enables web sites and client applications to have access to certain data
- We can make use of a large number of Web APIs available!
- Typically used with JavaScript (not always the case)


## 1. Node

- An abstract base class, the primary datatype for the entire Document Object Model
- A generic name for any type of object in the DOM hierarchy
- Many other DOM API objects are based upon `Node`
  - Objects such as `Document`, `Element`, and `DocumentFragment` are its subclasses, which implement the functionality of `Node`.
  - Every kind of DOM node is represented by an interface based on `Node`.
- There is no such thing as a `Node` object!
- `Node` inherits from `EventTarget`
- **Text nodes are not `Element` objects**
  - `TextNode` objects contain only text content without any HTML or XML markup. (They make it possible to insert texts into the document as nodes)
```javascript
// A function that uses createTextNode method to display it to a container
function CreateText() {
    var textContainer = document.getElementByID("textContainer");
    var textNode = document.createTextNode("Dynamically generated text");
    textContainer.appendChild(textNode);
}
```


## 2. Element

- The most general base class from which all element objects (i.e. objects that represent elements) in a `Document` inherit
  - HTMLElement interface is the base interface of HTML elements

- A specific type of node that can be directly specified in the HTML file with a tag
- Defines properties and methods such as `id`, `class`, `innerHTML`, etc.
- `Element` inherits from `Node`: `Element` "is-a" `Node` object


## 3. Document

- An interface that represents any web page loaded in the browser
- Serves as an entry point into the DOM (Document Object Model) tree
- DOM tree: A kind of tree whose nodes represent an HTML or XML document's contents
- For example, the following document
  
```html
<html>
<head>
<title>My Document</title>
</head>
<body>
<h1>Header</h1>
<p>Paragraph</p>
</body>
</html>
```

- has a DOM tree that looks like this: 
![DOM tree](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core/using_the_w3c_dom_level_1_core-doctree.jpg)

- A DOM tree preserves all whitespace!
- Describes the common properties and methods for any kind of document (i.e. `HTMLDocument` implements `Document`)

  