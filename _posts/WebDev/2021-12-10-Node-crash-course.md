---
title: "Node JS crash course"

categories: 
- Web Development

tags:
- Node.js

toc: true
toc_sticky: true
---

> ✒ Reference: <br>
> [Node.js crash course by Traversy Media](https://youtu.be/fBNz5xF-Kx4) <br>
> [Node.js v17.2.0 documentation](https://nodejs.org/api/documentation.html)<br>
> [Everything you should know about 'module' & 'require' in Node.js](https://medium.com/free-code-camp/require-module-in-node-js-everything-about-module-require-ccccd3ad383)

## What is Node.js?

- JavaScript runtime (a servi ce, not a language or a framework)
- Built on the V8 JavaScript engine (same as Google Chrome)
- Written in C++
- Essentailly allows us to run JavaScript code on the server

## Why use Node.js?

- Popular in the industry
- Same language on the front and back end (JS)
- Fast, efficient, and highly scalable
  - It's event driven
  - It's run on an event loop using non-blocking I/O calls which can support asynchronous connections (multiple processes can be run simultaneously)
  - Therefore it optimizes throughput & scalability in apps with many I/O operations
- Where not to use Node.js?
  - CPU intensive apps (long-running calculations, etc.)

## Node's event loop

![node-js-event-loop-diagram](https://user-images.githubusercontent.com/54295374/145663431-892fab2a-7f01-4f02-b46d-c36b708f339e.jpg)

- Runs on a single thread
- Supports concurrency via events & callbacks:
  - An event is fired → trigger a callback → move on
- `EventEmitter` class is used to bind events and listeners

## Best types of projects for Node?

Anything that's not CPU intensive: I/O operations (sending data to a server, getting a response)

- REST API & Microservices (Database interaction with MongoDB)
- Real Time Services (Chat, Live Updates)
- CRUD Apps - Blogs, Shopping Carts, Social Networks
- Tools & Utilities

## NPM - Node Package manager

- Install 3rd party packages (frameworks, libraries, tools, etc)
- Packages are stored in the **"node_modules"** folder
- All dependencies are listed in a **"package.json"** file
  - Every node project includes this file: info about the app is included
- NPM scripts can be created to run certain tasks (i.e. run a server)
  - `npm init`: Generates a *package.json* file
  - `npm install express`: Installs a package locally
  - `npm install -g nodemon`: Installs a package globally

## Node Modules

Node.js treats each JavaScript file as a separate module, which allows modular (independent and loosely coupled) code.

- Node Core Modules (`path`, `fs`, `http`, etc)
- 3rd party modules/packages installed via NPM
- Custom modules (files that have an export)
  - You can include variables, functions, etc. from one file in another
  
  ```jsx
  const path = require('path');
  const myFile = require('./myFile');
  ```

## Node repl

Node comes with repl (read, eval, print, loop) which allows us to run JavaScript directly in the console.

Hitting an enter after `node` brings you into the repl, where you can type in JavaScript.

![image](https://user-images.githubusercontent.com/54295374/145669792-8842e567-23a6-4d83-9f5d-9a329edce86f.png)

## Creating a Node file

### `package.json`

First thing to do: create a `package.json` file by running `npm init` and adding some information.

One of the main purposes of `package.json` is to store all your dependencies: If the application uses something you install from NPM, it should be listed here. (Done automatically)

By running `npm install --save-dev nodemon` or `npm install -D nodemon`, the package is added as a dev dependency (a dependency that you just need for development).

```json
{
  "name": "crash-course",
  "version": "1.0.0",
  "description": "Node crash course",
  "main": "index.js",
  "scripts": {
    "start": "node index",
    "dev": "nodemon index"
  },
  "author": "Jen Guk",
  "license": "ISC",
  "dependencies": {
    "uuid": "^8.3.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  }
}
```

`npm run dev` will run `nodemon index`; `npm run` will run the standard `node index`.

When the code is run on a different server, you don't need to copy the `node_modules` file; you can simply run `npm install` to install all the packages that are listed in the `package.json` file.

The file `package-lock.json` tracks all the dependencies and describes the exact tree that was generated, such that subsequent installs can generate identical trees.

### `index.js`

Now you can create a JavaScript file to run. You run the file by calling `node index` / `node index.js` / `node .` (only for `index.js`) in the terminal.

## Creating modules

You can create a JavaScript file and export it to use its constants and methods in any of your other files. A custom module should have its path as the function argument.

```jsx
// person module with a constant saved:
const person = {
  name: 'John Doe',
  age: 30
}
module.exports = person; 

// Content of index.js:
const person = require('./person');

console.log(person.name);
```

```console
> John Doe
```

You usually save a module as a class.

```jsx
// Person module with a class saved:
class Person {
  constructor(name, agree) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}.`);
  }
}
module.exports = Person;

// Content of index.js:
const Person = require('./person');

const person1 = new Person('John Doe', 30);
person1.greeting();
```

```console
> My name is John Doe and I am 30.
```

When you include a module, it's actually wrapped in a **module wrapper function**:

```jsx
// Module Wrapper Function
(function (exports, require, module, __filename, __dirname) {
   // The content of a module goes here...
})
```

The five parameters are globale to the code within a module, but local to the module.

- `exports`: A key of the `module` object, reference to `module.exports`; defines what can be exported by a module
- `require`: A method that imports all the constructs exported using the `module.exports` object in another module
- `module`: A reference to the object representing the current module
- `__filename`: The full directory of the file + it's name
- `__dirname`: The full directory of the file

## Path Module

The path module is a default module of Node. (No need for installation)

`path_demo.js`:

```jsx
const path = require('path');
console.log(__filename);

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));
```

Output:

![image](https://user-images.githubusercontent.com/54295374/145673006-5e0999f7-09fd-42a2-922e-45476a70f17a.png)

`.join()` works well when you have issues with delimiters. (There are different delimeters for different system; but this method will put the correct delimiters)

## File System Module

`mkdir(path, [options], callback)` is asynchronous (takes in a callback). There is also a synchronous version called `mkdirSync(path, [options])` where you wait for the process to be complete then move to the next line.

```jsx
const fs = require('fs');
const path = require('path');

// Create a folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
  if (err) throw err;
  console.log('Folder Created!');
});

// Create a file and write to it
fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'Hello World!', 
  err => {
    if (err) throw err;
    console.log('File written to!');
  }
);

// If .writeFile() is run again, it overwrites what is in the file.
fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'File is overwritten', 
  err => {
    if (err) throw err;
    console.log('File written to!');

    // File append
    fs.appendFile(
      path.join(__dirname, '/test', 'hello.txt'),
      ' I love Node.js', 
      err => {
        if (err) throw err;
        console.log('File written to!');
      }
    );
  }
);

// Read file
fs.readFile(
  path.join(__dirname, '/test', 'hello.txt'), 
  'utf-8', 
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

// Rename file
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'), 
  path.join(__dirname, '/test', 'helloWorld.txt'), 
  (err, data) => {
    if (err) throw err;
    console.log('File renamed!');
  }
);
```

## OS Module

```jsx
const os = require('os');

// Get platform (win32)
console.log(os.platform());

// Get CPU Architecture (x64)
console.log(os.arch());

// Get CPU Core Info (object with info for every core of the CPU)
console.log(os.cpus());

// Get the amount of free memory
console.log(os.freemem());

// Get the amount of total memory available
console.log(os.totalmem());

// Get home dir (C:\Users\DELTA)
console.log(os.homedir());

// Get uptime (number of seconds that the system has been up)
console.log(os.uptime());
```

## URL Module

```jsx
const url = require('url');

const myUrl = new URL('http://mywebsite.com:8080/hello.html?id=100&status=active');

// Get the serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
// Returns http://mywebsite.com/hello.html?id=100&status=active

// Get the host (root domain)
console.log(myUrl.host);
// Returns mywebsite.com:8080

// Get the host name
console.log(myUrl.hostname);
// Returns mywebsite.com (Does not include the port)

// Get path name
console.log(myUrl.pathname);
// Returns /hello.html (the actual file)

// Get the serialized query
console.log(myUrl.search);
// Returns ?id=100&status=active (everything after the question mark)

// Get Params object
console.log(myUrl.searchParams);
// Returns URLSearchParams { 'id' => '100', 'status' => 'active' }

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
// An extra parameter is added: URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
// Gives us each key value pair
```

## Event Module

We can create an `eventEmitter` class, emit events, and have listeners that listen for those events and fire off.

```jsx
 const EventEmitter = require('events');

// Create an emitter class
class MyEmitter extends EventEmitter { }

// Init object
const myEmitter = new MyEmitter();

// Create an event listener
myEmitter.on('event', () => console.log('Event Fired!'));

// Init event
myEmitter.emit('event');
```

## EventEmitter Example: Creating a logger

In `event_demo.js`:

```jsx
const EventEmitter = require('events');

// Create an emitter class
class MyEmitter extends EventEmitter { }

// Init object
const myEmitter = new MyEmitter();

// Create an event listener
myEmitter.on('event', () => console.log('Event Fired!'));

// Init event
myEmitter.emit('event');
```

In `index.js`:

```jsx
const Logger = require('./logger');

const logger = new Logger();

// Instantiate an event listener
logger.on('message', (data) => console.log('Called Listener', data));

// Each time the listener is called, it shows a new ID with a new message.
logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');
```

> Homework: Bring in the fs module and log the ID and the message to a file!

## HTTP Example: Creating a server

```jsx
 const http = require('http');

 // Create a server object
 http.createServer((req, res) => {
     // Write response
     res.write('Hello World');
     res.end();
 }).listen(5000, () => console.log('server running'));
```

The bare minimum to get the server running. `localhost:5000` will show `Hello World` on the browser.

## Creating an actual web server

Put everything together to create a web server with two pages. (`index.html` is saved in the `public` folder)

```jsx
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // console.log(req.url);
  // If localhost:5000/about is called, req.url is /about

  if(req.url === '/') {
    // It's the index page
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    })
  }

  if(req.url === '/api/users') {
    // Adding a JSON object instead of html
    const users = [
      { 'name': 'Bob Smith', 'age': 40 },
      { 'name': 'John Doe', 'age': 30 },
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  }
});

// The host decides the port, which is in the 'environment variable'
// First look for the evironment variable, if dne then run on 5000
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

Setting the file extensions and paths dynamic:

```jsx
const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {

  // Make the file path dynamic
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // Extension of file
  let extname = path.extname(filePath);

  // Initial content type
  let contentType = 'text/html';

  // Check ext and set content type
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == 'ENOENT') {
        // Page is not found
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
          res.writeHead(200, { 'Content-Type' : 'text/html' });
          res.end(content, 'utf8');
        })
      } else {
        // Error, but not ENONET: some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type' : contentType });
      res.end(content, 'utf8');
    }
  })
});

// The host decides the port, which is in the 'environment variable'
// First look for the evironment variable, if dne then run on 5000
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

## Deploy the application on Heroku

Make sure to use `process.env.PORT` as the environment variable and the start script as `"node index"`.

1. Install the Heroku cli
2. Log in: `heroku login`
3. Create an app: `heroku create`
4. Go to `heroku.com`, then clone the repository: (i.e. `heroku git:remote -a (app name)`)
5. Deploy the changes: `git add`, `git commit -m "commit content"`, `git push heroku main`
