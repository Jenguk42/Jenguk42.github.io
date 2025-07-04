---
title: "React JS crash course"

categories: 
- Web Development

tags:
- React.js

toc: true
toc_sticky: true
---

> ✒ Reference: [The amazing React crash course by Traversy Media](https://youtu.be/w7ejDZ8SWv8)

## What is React?

React JS is a frontend library/framework that structures the "view" layer of the application. It has reusable components with their own state, It enables dynamic markup using JSX, and also interactive UIs with Virtual DOM (allows update of parts of the page without reloading)

## React - basic grammar

### UI Components

Mindframe with React: when using React, think of your UI as a bunch of separate components.

```jsx
// Function component
export const Header = () => {
    return (
        <div>
            <h1>My Header</h1>
        </div>
    )
}

// Class component
export default class Header extends React.Component {
    render() {
        return (
        <div>
            <h1>My Header</h1>
        </div>
        )
    }
}
```

Components render and return JSX (JavaScript Syntax Extension), and they can also take in props (attributes).

### State

Components can have a "state" which is an object that determines how a component renders and behaves. (i.e. collapsable menu has an open and a close state)

Any data brought in can be a state, and it can be shared across multiple components.

"app" or "global" state: a state that is available to the entire UI, not just a single component

### React Hooks

Hooks are functions that let us hook into the React state and lifecycle features from function components. You can also create your custom hooks!

- useState - Returns a stateful value and a function to update it

- useEffect - Perform side effects in function components

- useContext, useReducer, useRef, etc.

## Creating a React app

Use this link: [Create a new react app](https://reactjs.org/docs/create-a-new-react-app.html)

1. Install node.js and npm

   1. node: [Link here](https://nodejs.org/en/download/)
   2. npm: `npm install -g npm` at command line
   3. Checking the versions: `npm -v`, `node -v`

2. Then create a React app: `npx create-react-app react-task-tracker` at terminal

   ![image](https://user-images.githubusercontent.com/54295374/144355907-844228f6-bbb8-47af-a0bf-5267fbc24b07.png)

3. Start the dev server: `npm start`

   ![image](https://user-images.githubusercontent.com/54295374/144356015-830d05fb-846c-4f58-8a00-97f90b71c53f.png)

4. Open vs code to modify the project: `cd react-task-tracker`, then `code .` (Opens vs code in the current folder)

   1. The web page auto-reloads whenever the files are changed!

Optional:

1. Adding react icons: `npm i react-icons`

2. Adding the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) chrome extension helps you inspect the React component hierarchies!
  ![image](https://user-images.githubusercontent.com/54295374/144575295-01dec563-9ec6-4f1f-b614-4e80f9acece2.png)

## Exploring the created folder

### `package.json`

- Dependencies include react (anything installed with npm will show here)
  - "react-dom" is responsible for rendering the react application to the DOM model
  - "react-scripts" comes with the development server
  - "react-icons" comes with a package of react icons
  - And some testing libraries
  
- Scripts
  - "start": run the development server
  - "build": build the app into static files for production
  - "test": start the test runner
  - "eject": remove the tool and copy build dependencies, configuration files and scripts into the app directory

### `public/index.html`

- The single page application that is being loaded

- There is a `<div>` with id "root": gateway to the UI

  ![image](https://user-images.githubusercontent.com/54295374/144356376-c68c1398-5634-4e8d-be5e-51d6e5d1a6a6.png)

### `src/index.js`

- Entry point for React

- `ReactDOM.render()` Inserts `App` into `<div>`

- `App` comes from `App.js`

  ![image](https://user-images.githubusercontent.com/54295374/144356481-8bc45946-b08e-443e-8dc3-a4b0f14f16eb.png)

### `src/App.js`

- App is the "root" component

- Everything in `index.html` is coded here

  ![image](https://user-images.githubusercontent.com/54295374/144356594-e529e58e-3a80-4153-80f1-34e32228aac5.png)
  ![image](https://user-images.githubusercontent.com/54295374/144356604-89baa66e-75c8-4255-9ab2-d5a93d0ffef3.png)

## Expressions in JSX

We change the content of the page by changing `App.js`:

```jsx
// If x is true, then show 'true'; if not, show 'false'
function App() {
  const name = 'Jen'
  const x = true
  
  return (
    <div className="App">
      <h1>Hello {name}</h1> 
      <h2>x is {x ? 'true' : 'false'}</h2>
    </div>
  );
}
```

- JSX return should always be a single parent element. Adding another `<div>` will give an error. The parent element can be an empty bracket: like `<></>`.
- JavaScript can be written directly inside the function.
- We can also use a class instead of a function:

```jsx
import React from 'react'

class App extends React.Component {
  render() {
    return (
        <h1>Hello from a class</h1>
    )
  }
}
```

## Creating a component

Create a folder `components` under `scr`. You can create JS files here to use as components. (Make the first letter capital, it's a convention!)

> :memo: VS code extension 'ES7 React/Redux/GraphQL/React-Native snippets' allow snippets for React components!
>
> **rcc**: Creates a class-based component
> **rafce**: Creates an arrow function with export (you can delete `import React from 'react'`)
> **impt**: Imports propTypes

Creating a `Header` component and adding it to `App.js`:

```jsx
// Content of src/components/Header.js 
const Header = () => {
    return (
        <header>
            <h1>Task Tracker</h1>
        </header>
    )
}
export default Header;

// Content of src/App.js
// A header is added inside the container
import Header from './components/Header'

function App() {
  return (
    <div className="container">
      <Header/>
    </div>
  );
}
export default App;
```

## Component props

Props are used to pass data from a parent component to a child component. They are the main mechanism for component communication. (Just like function parameters)

```jsx
// Content of src/components/Header.js 
// The title is passed in as a prop
const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}
export default Header

// Content of src/App.js
// The header now has a title
import Header from './components/Header'

function App() {
  return (
    <div className="container">
      <Header title='Hello' />
    </div>
  );
}
export default App;
```

The title of the header (prop) is retrieved inside the component by `{props.title}`.

### Default prop

We can also add a default prop like below; If the header does not have any title, the default title will show. Adding a title will overwrite the default.

```jsx
// Content of src/components/Header.js 
// The default title of a header is now 'Task Tracker'
const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header
```

Instead of passing in the `props` object, we can destructure it and pass in the `{title}`. Then we can add `<h1>{title}</h1>` instead.

### Prop types

You can set propTypes to make your code more robust. If the code below is added to `Header.js` and the title of the header is 1) set to be of a different datatype or 2) undefined, the web page will render but the console will give you an error.

```jsx
// Content of src/components/Header.js  
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
```

![image](https://user-images.githubusercontent.com/54295374/144364929-3f4d0585-9416-4bf1-b613-0444e6ba253e.png)

![image](https://user-images.githubusercontent.com/54295374/144365222-61bdaeb0-ea1b-497a-9bb8-675742b4c4b8.png)

### Reusing props: Button Component

Once the button component is created, it can be reused by simply passing in different props.

```jsx
// Content of src/components/Button.js
// This is a reusable button component
const Button = ({ color, text }) => {
    return (
        <button style={{backgroundColor: color}}className='btn'>
            {text}
        </button>
    )
}
export default Button

// Content of src/components/Header.js
// Different styles of buttons can be created with different props
import Button from './Button'

const Header = () => {
    return (
        <header className='header'>
            <Button color='green' text='Hello'/>
            <Button color='blue' text='Hello'/>
            <Button color='red' text='Hello'/>
        </header>
    )
}
```

## Styling

 You can also add CSS within JS.

```jsx
// Inline (double brackets)
// The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string
<h1 style={{color: 'red', backgroundColor: 'black'}}>{title}</h1>

// Adding constants
<h1 style={headingStyle}>{title}</h1>

const headingStyle = {
    color: 'red', backgroundColor: 'black'
}
```

## States

### Creating a Hook with `useState`

The code below takes the `text` of each element in the `tasks` array and creates a new `Tasks` array with a `<h3>` tag and a unique id, using `.map()`.

```jsx
// Content of src/components/Task.js
// The text of each task is shown in <h3>
const tasks = [
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder:true,
  },
  {
    id: 2,
    text: 'Meeting at School',
    day: 'Feb 6th at 1:30pm',
    reminder:true,
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 5th at 2:30pm',
    reminder:false,
  }
]

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  )
}
```

Instead of having a constant out of the component, we can create a component state via `useState()`.

```jsx
// Content of src/components/Task.js
// The tasks are now states of the component
import { useState } from 'react'

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder:true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder:true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder:false,
    }
  ])

  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  )
}

export default Tasks
```

A state cannot be changed within `return()` because it is immutable. In order to change the task, we should use `setTasks`.

### Global States

Tasks should be global (should be accessible from other components too). They should not be inside `Task.js`; they should be in `App.js`, then passed in as props.

Making the tasks into app-level states:

```jsx
// Content of src/App.js
// Tasks are now at top-level

import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder:true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder:true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder:false,
    }
  ])

  // If there is no task left, show 'No Tasks To Show' instead of the Task components.
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 
        ? <Tasks tasks={tasks} onDelete={deleteTask}/>
        : 'No Tasks To Show'}
    </div>
  );
}

export default App;

// Content of src/components/Tasks.js
// { tasks } are passed in as props

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  )
}

export default Tasks
```

## Breaking down a component

Instead of having `<h3>` tags for each task, we can create a `Task` component which handles each task.

```jsx
// Content of src/components/Tasks.js
// Each task is now a individual component
import Task from './Task'

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  )
}

export default Tasks

// Content of src/components/Task.js
// x icons are also added from the font awesome library
import { FaTimes } from 'react-icons/fa'

const Task = ({ task }) => {
    return (
        <div className='task'>
            <h3>
                {task.text} 
                <FaTimes style={{color: 'red', 
                        cursor: 'pointer'}}/>
            </h3>
            <p>{task.day}</p>
        </div>
    ) 
}

export default Task
```

## Event delegation

The function to (1) delete task and (2) toggle reminder should be within `App.js`, and the function itself should be passed into `Task.js` and `Tasks.js` as props.

```jsx
// Content of src/App.js
// Delete Task
const deleteTask = (id) => {
  console.log("task deleted");
}

// Toggle Reminder
const toggleReminder = (id) => {
  console.log("reminder toggled");
}

// When calling tasks in App.js, add the prop
<Tasks tasks={tasks} onDelete={deleteTask}
onToggle={toggleReminder} />

// Tasks.js sends the prop to Task.js
<Task key={task.id} task={task} onDelete={onDelete}
onToggle={onToggle} />

// In Task.js, the functions are called when the task div is double clicked or the x button is clicked
<div className='task' onDoubleClick={() => onToggle(task.id)}>
  <h3>
    {task.text}
    <FaTimes
      style={{ color: 'red', cursor: 'pointer' }}
      onClick={() => onDelete(task.id)}
    />
  </h3>
  <p>{task.day}</p>
</div>
```

## Dynamic change in components

Add a state `showAddTask` to `App.js`, and wrap `<AddTask/>` with that state. If `showAddTask` is true, then execute the code after `&&`.

React allows you to make dynamic interfaces where no pages are being reloaded. Different styles can be chosen according to the state via `{}`.

```jsx
// in src/App.js
function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
    </div>
  )
}

// in Header.js
const Header = ({title, onAdd, showAdd}) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />
    </header>
  )
}
```

## Some JavaScript functions

- Filtering an array
Only leave the tasks where `task.id` is not equal to `id`.

```jsx
const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id))
}
```

- Changing the value of an object
If `task.id` is equal to `id`, then change the `task.reminder` opposite to the current value.

```jsx
const toggleReminder = (id) => {
  setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder: !task.reminder } : task)
    )
}
```

- Setting class name according to a value
If `task.reminder` is true, then set class name as `reminder` otherwise, set it as `task`.

```jsx
<div className={`task ${task.reminder ? 'reminder' : ''}`}
```

- Adding a task with a new id
Add a random number as id, save the id of the new task, then add the new task as a state

```jsx
// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random()*10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}
```

## Building for production

Development build (local host 3000) is not optimized. We can use `npm run build` to create a production build.

This creates an optimized production build, and the build folder contains the static assets of the production build. Files in `/src` are the development stuff; files in `/build` are the ones that are pushed to production and deployed.

`npm install -g serve` creates a static http server. `serve -s build` (`serve -s build -p 8000`) serves the build. (at port 8000)
