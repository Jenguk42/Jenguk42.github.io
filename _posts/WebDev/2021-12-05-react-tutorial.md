---
title: "React JS tutorial"

categories: 
- Web Development

tags:
- React.js

toc: true
toc_sticky: true
---
> ✒ Reference: [Intro to React by ReactJS.org](https://reactjs.org/tutorial/tutorial.html)

## JS class constructors

In JavaScript classes, you need to always call super when defining the constructor of a subclass. All React component classes that have a constructor should start with a super(props) call.

```jsx
constructor(props) {
    super(props);
    this.state = {
        value: null,
    };
}
```

## Handling props

In React, it’s conventional to use `on(Event)` names for props which represent events and `handle(Event)` for the methods which handle the events.

If component A maintains its own state and passes it to component B as props, then component B is a controlled component. (Component A has full control over component B.)

## Immutability

When changing data, you can (a) mutate the data directly by changing its values or (b) replace the data with a new copy which has the desired changes.

```jsx
// Data Change with Mutation
var player = {score: 1, name: 'Jeff'};
player.score = 2;
// Now player is {score: 2, name: 'Jeff'}

// Data Change without Mutation
var player = {score: 1, name: 'Jeff'};
var newPlayer = {...player, score: 2};
// Now player is unchanged, but newPlayer is {score: 2, name: 'Jeff'}
```

Benefits of immutability are:

1. Complex features become simple
Avoiding direct data mutation lets us keep the previous versions of the data, so you can reuse them later or undo and redo the actions.

2. Detecting changes
It is easy to detect changes in immutable objects, because you can compare the new object with its previous copy rather than traversing the entire object tree.

3. Determining when to re-render in React
Immutability helps you build pure components in React. Since it is easy to detect changes that are made, it is also easy to determine when a component requires re-rendering.

## Keys in React lists

### Picking a key

`key` is a reserved property in React. Each list item in React needs to have a key property to differentiate itself from its siblings.

When a list is re-rendered, keys tell React about the identity of each component. This allows React to maintain state between re-renders.

### Rules

- When an element is created, React stores the `key` property directly on the returned element.
- A component cannot inquire about its `key`; it cannot be referenced by using `this.props.key`. (React automatically uses `key` to decide which components to update)
- Keys do not need to be globally unique; they only need to be unique between components and their siblings.
- If the list is not re-ordered, deleted, or inserted in the middle, it is safe to use the index as a key.
- Assign proper keys whenever you build dynamic lists!
  