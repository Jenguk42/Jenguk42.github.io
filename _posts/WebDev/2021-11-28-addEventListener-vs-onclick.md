---
title: "`addEventListener()` vs `onclick`"

categories:
- Web Development

tags:
- JavaScript

toc: true
toc_sticky: true
---

Both `addEventListener()` and `onclick` listen for an event, and execute a callback function when a button is clicked.


## Callback function

- A callback function is passed into another function as an argument, and it enables handling sequential execution of functions.
- Used when we want to execute a function right after the return of some other function


## `addEventListener()`

- Method; Attaches an event handler to the specified event
- Syntax: `element.addEventListener(event, listener, useCapture);`
  - `event`: Any valid JS event without the "on" prefix (i.e. "click" instead of "onclick")
  - `listener`: A callback function that responds to the event that occurs
  - `useCapture` (optional): A Boolean value that specifies whether the event should be executed in the capturing phase, false for standard
- Can have **multiple event handlers** applied to the same event

```javascript
function removeElement(id) {
    // Remove the element by its id
    document.getElementById('todo' + id).remove();
}

newButton.addEventListener("click", function() {removeElement(i)});

// The following does not work since the return value is not valid. (removeElement() returns void)
newButton.addEventListener("click", removeElement(i))
```

## `onclick`

- Property of an object that can be **overwritten**
- Control of scope is limited, but simple and direct
- Syntax: `object.onclick = function(){ /*myScript*/ };`

```javascript
newButton.onclick = function() {removeElement(i)};
```


## Major difference

| `addEventListener`                                           | `onclick`                                               |
| ------------------------------------------------------------ | ------------------------------------------------------- |
| Can add multiple events to a particular element              | Can add only a single event to an element (overwritten) |
| Can take a third argument that can control the event propagation | Event propagation cannot be controlled                  |
| Can only be added within <script> elements or in external JavaScript file | Can be added as an HTML attribute also                  |
