---
title: "Event.target"

categories: 
- Web Development

tags:
- JavaScript

toc: true
toc_sticky: true
---


> ✒ Reference: [MDN Web Docs - Event.target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)

## `Event.target`

The read-only `target` property of the `Event` interface returns a reference to the object on which the event originally occured (the associated `EventTarget`).
It can be used in order to implement event delegation.

## Example

```jsx
// Make a list
const ul = document.createElement('ul');
document.body.appendChild(ul);

const li1 = document.createElement('li');
const li2 = document.createElement('li');
ul.appendChild(li1);
ul.appendChild(li2);

function hide(evt) {
  // e.target refers to the clicked <li> element
  // This is different than e.currentTarget, which would refer to the parent <ul> in this context
  evt.target.style.visibility = 'hidden';
}

// Attach the listener to the list
// It will fire when each <li> is clicked
ul.addEventListener('click', hide, false);
```

> **Using `e.preventDefault`**
> The `preventDefault()` method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
> This can be useful when:
>
> - Clicking on a "Submit" button, prevent it from submitting a form
> - Clicking on a link, prevent the link from following the URL

## Event Target properties

There are three target properties defined in the DOM Event Interface.

1. `event.target`
The DOM element on the left hand side of the call that triggered this event.

2. `event.currentTarget`
The `EventTarget` representing the object to which the current event handler is attached.
Always refers to the element to which the event handler has been attached.

3. `event.relatedTarget`
Identifies a secondary target for the event.
