---
title: "JavaScript events"

categories: 
- Web Development

tags:
- JavaScript

toc: true
toc_sticky: true
---

> ✒ Reference: [This stackoverflow question](https://stackoverflow.com/questions/35936365/what-exactly-is-the-parameter-e-event-and-why-pass-it-to-javascript-functions)

## What is an event object?

`event` is a JavaScript object that contains information about the action trigerred by the user. (events like `click`, `keydown`, etc.)

## How do you handle an event object?

To handle events, you bind an **event handler** to a component that you are interested in. An event handler is a function which is executed when the event happens. The way to bind the handler to the element is by doing `element.addEventListener(eventName, handler)`. `eventName` is a string, and it is the name of the event that you are interested in. (i.e. `click`)

## `event` as a parameter

The `event` object is passed into the handler function by default. When it is defined, it is usually passed in as `e`.
