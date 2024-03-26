# Basic JavaScript

## JavaScript Introduction

`What is JavaScript?`

- A high level, single threaded, garbage collected and interpreted or just in time compiled, prototype based, multi-paradigm, dynamic language, with a non-blocking event loop used for building website.
- Mostly used for building frontend applications.
- But can also be used for building.
  - Server Side Application
    - NodeJS
  - Mobile Application
    - React Native
    - Ionic
  - Desktop Application
    - Electron
- It's an interpreted language, but run time engines like `V8 Engine` and `Spider Monkey` uses JIT Compiler convert machine code in parallel, then execute immediately.
- It also can handle IO intensive tasks, even though it is single threaded, its made possible by a non blocking event loop that can queue up working in background without blocking the main thread.

## JavaScript Placement in HTML

- Script in `<head>...</head>` section.

  - If you want to have a script run on some event, such as when a user clicks somewhere,then you will place that script in the head.

  ```js
  <html>
    <head>
      <script type='text/javascript'>
        function sayHello() {alert('Hello World')}
      </script>
    </head>
    <body>
      <input type='button' onclick='sayHello()' value='Say Hello' />
    </body>
  </html>
  ```

- Script in `<body>...</body>` section.

  - If you need a script to run as the page loads so that the script generates content in the page, then the script goes in the `<body>` portion of the document. In this case, you would not have any function defined using JavaScript.

  ```js
  <html>
    <head></head>
    <body>
      <script type='text/javascript'>document.write("Hello World")</script>
      <p>This is web page body </p>
    </body>
  </html>
  ```

- Script in `<body>...</body>` and `<head>...</head>` sections.

  - You can put your JavaScript code in `<head>` and `<body>` sections altogether.

  ```js
  <html>
    <head>
      <script type='text/javascript'>
        function sayHello() {alert('Hello World')}
      </script>
    </head>
    <body>
      <script type='text/javascript'>document.write("Hello World")</script>
      <input type='button' onclick='sayHello()' value='Say Hello' />
    </body>
  </html>
  ```

- Script in an external file and then include in `<head>...</head>` section.
  - For separation of concern and code readability you can just use an external script.

## Code Structure

- Statements should be well defined, no need to overlap.
- Don't omit semicolons, even though JS allows it.

## The mordern mode, "use strict"

- When strict mode is enabled, the JavaScript engine enforces additional constraints. This means you may be able to catch some common errors that would have otherwise gone unnoticed.
- To enable strict mode for the whole JavaScript file, you simply add the string "use strict" to the top of your code.

```js
'use strict';

// Your code goes here...
```

- For functions, you can enable strict mode by placing the "use strict" string at the top of your function body.

```js
function myFunction() {
  'use strict';
  // Function body goes here...
}
```

`Difference Between Strict Mode and Regular JavaScript`

- Using an Undeclared Variable

  - When writing JavaScript code in strict mode, you must declare all variables and objects before use. This is useful because it helps to prevent creating global variables by accident which can lead to bugs.

  ```js
  // Regular JavaScript
  function regularFunc() {
    username = 'Marie';
    console.log(username);
  }
  regularFunc();

  <!--
  OUTPUT: Marie
  Regular JS throws no error for the username variable. -->
  ```

  ```js
  // Strict mode
  function strictFunc() {
    'use strict';
    username = 'Marie';
    console.log(username);
  }
  strictFunc();

  <!--
  OUTPUT: Uncaught ReferenceError: username is not defined
  Strict mode throws error for undeclared variables. -->
  ```

  - Some more
    - Duplicating a Parameter Name
    - Using Reserved Future Keywords
    - Use of Deprecated Features
    - Assignment to a Read-Only Property

## JavaScript innerHTML

- Its a part of DOM element.
- The innerHTML property sets or returns the HTML content (inner HTML) of an element.
