# JavaScript Objects

## Objects

- Objects are used to store keyed collections of various data and more complex entities.
- An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
- An empty object (“empty cabinet”) can be created using one of two syntaxes:

  ```js
  let user = new Object(); // "object constructor" syntax
  let user = {}; // "object literal" syntax
  ```

### Literals and properties

```js
let user = {
  // an object
  name: 'John', // by key "name" store value "John"
  age: 30, // by key "age" store value 30
};
```

- A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it.
- In the user object, there are two properties:
  - The first property has the name "name" and the value "John".
  - The second one has the name "age" and the value 30.
- We can add, remove and read files from it at any time.
- Property values are accessible using the dot notation:

  ```js
  // get property values of the object:
  alert(user.name); // John
  alert(user.age); // 30
  ```

- The value can be of any type.
- We can add a new value in the same object this way:

  ```js
  user.isEligible = true;
  ```

- To remove a property, we can use the delete operator:

  ```js
  delete user.isEligible;
  ```

- We can also use multiword property names, but then they must be quoted:

  ```js
  let user = {
    name: 'John',
    age: 30,
    'likes birds': true, // multiword property name must be quoted
  };
  ```

### Square brackets

- For multiword properties, the dot access doesn’t work:

  ```js
  // this would give a syntax error
  user.likes birds = true
  ```

- JavaScript doesn’t understand that. It thinks that we address user.likes, and then gives a syntax error when comes across unexpected birds.
- There’s an alternative “square bracket notation” that works with any string:

  ```js
  let user = {};

  // set
  user['likes birds'] = true;

  // get
  alert(user['likes birds']); // true

  // delete
  delete user['likes birds'];
  ```

- Square brackets also provide a way to obtain the property name as the result of any expression – as opposed to a literal string – like from a variable as follows:

  ```js
  let key = 'likes birds';

  // same as user["likes birds"] = true;
  user[key] = true;
  ```

- Here, the variable key may be calculated at run-time or depend on the user input. And then we use it to access the property. That gives us a great deal of flexibility.

  ```js
  let user = {
    name: 'John',
    age: 30,
  };

  let key = prompt('What do you want to know about the user?', 'name');

  // access by variable
  alert(user[key]); // John (if enter "name")
  ```

- The dot notation cannot be used in a similar way:

  ```js
  let user = {
    name: 'John',
    age: 30,
  };

  let key = 'name';
  alert(user.key); // undefined
  ```

### Property value shorthand

```js
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser('John', 30);
alert(user.name); // John
```

In the example above, properties have the same names as variables. The use-case of making a property from a variable is so common, that there’s a special property value shorthand to make it shorter.

Instead of name:name we can just write name, like this:

```js
function makeUser(name, age) {
  return {
    name, // same as name: name
    age, // same as age: age
    // ...
  };
}
```

- We can use both normal properties and shorthands in the same object:

  ```js
  let user = {
    name, // same as name:name
    age: 30,
  };
  ```

### Property names limitations

- As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.
- But for an object property, there’s no such restriction:

  ```js
  // these properties are all right
  let obj = {
    for: 1,
    let: 2,
    return: 3,
  };

  alert(obj.for + obj.let + obj.return); // 6
  ```

- There’s a minor gotcha with a special property named `__proto__`. We can’t set it to a non-object value:

  ```js
  let obj = {};
  obj.__proto__ = 5; // assign a number
  alert(obj.__proto__); // [object Object] - the value is an object, didn't work as intended
  ```

- As we see from the code, the assignment to a primitive 5 is ignored.

### Property existence test, “in” operator

- A notable feature of objects in JavaScript, compared to many other languages, is that it’s possible to access any property. There will be no error if the property doesn’t exist!
- Reading a non-existing property just returns undefined. So we can easily test whether the property exists:

  ```js
  let user = {};

  alert(user.noSuchProperty === undefined); // true means "no such property"
  ```

- There’s also a special operator "in" for that.

  ```js
  let user = { name: 'John', age: 30 };

  alert('age' in user); // true, user.age exists
  alert('blabla' in user); // false, user.blabla doesn't exist
  ```

### The "for..in"

- To walk over all keys of an object, there exists a special form of the loop: for..in. This is a completely different thing from the for(;;) construct that we studied before.

  ```js
  let user = {
    name: 'John',
    age: 30,
    isAdmin: true,
  };

  for (let key in user) {
    // keys
    alert(key); // name, age, isAdmin
    // values for the keys
    alert(user[key]); // John, 30, true
  }
  ```

## Object References and Copying

- One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.
- To copy an object to another object, typically we would use the equality (=) operator.
- Example we have an object:

  ```js
  const userDetails = {
    name: 'John Doe',
    age: 14,
    verified: false,
  };
  ```

- Now if we would assign this object to another variable.

  ```js
  const newUser = userDetails;
  console.log(newUser); // {name: 'John Doe', age: 14, verified: false}
  ```

- This will work fine, but if we edit our second object, it will affect our first object, because the second object has reference of the first object.

But if we don't want our first object to changed if we make changes in the second we would use these things.

- Object.assign()

  ```js
  // Declaring Object
  const userDetails = {
    name: 'John Doe',
    age: 14,
    verified: false,
  };
  // Cloning the Object with Object.assign() Method
  let cloneUser = Object.assign({}, userDetails);
  console.log(cloneUser); // {name: 'John Doe', age: 14, verified: false}
  ```

- Using spread operator

  ```js
  // Declaring Object
  const userDetails = {
    name: 'John Doe',
    age: 14,
    verified: false,
  };
  // Cloning the Object with Spread Operator
  let cloneUser = { ...userDetails };
  console.log(cloneUser); // {name: 'John Doe', age: 14, verified: false}
  ```

- JSON.parse()

  ```js
  // Declaring Object
  const userDetails = {
    name: 'John Doe',
    age: 14,
    verified: false,
  };
  // Cloning the Object with JSON.parse() Method
  let cloneUser = JSON.parse(JSON.stringify(userDetails));

  console.log(cloneUser); // {name: 'John Doe', age: 14, verified: false}
  ```

### Shallow Clone vs. Deep Clone

- When you use the spread `operator` or `Object.assign()` method to clone a deep object, the deeper objects will be referenced.

  ```js
  const userDetails = {
    name: 'John Doe',
    age: 14,
    status: {
      verified: false,
    },
  };
  // Cloning the Object with Spread Operator
  let cloneUser = { ...userDetails };

  // Changing the value of cloneUser
  cloneUser.status.verified = true;

  console.log(cloneUser); // {name: 'John Doe', age: 14, status: {verified: true}}
  console.log(userDetails); // {name: 'John Doe', age: 14, status: {verified: true}}
  ```

- You can use the `JSON.parse()` method, and everything will work fine.

  ```js
  const userDetails = {
    name: 'John Doe',
    age: 14,
    status: {
      verified: false,
    },
  };

  // Cloning the Object with Spread Operator
  let cloneUser = JSON.parse(JSON.stringify(userDetails));

  // Changing the value of cloneUser
  cloneUser.status.verified = true;

  console.log(cloneUser); // {name: 'John Doe', age: 14, status: {verified: true}}
  console.log(userDetails); // {name: 'John Doe', age: 14, status: {verified: false}}
  ```

- But there is an issue with this method. The issue is that you can lose your data. How?
- `JSON.stringify()` works very well with primitive data types like numbers, strings, or Booleans, and that is what you have seen in our previous examples. But sometimes, `JSON.stringify()` is unpredictable if you are not aware of some values and how it handles them.
- For example, it does not work with functions, symbols, or undefined values. It also changes other values like Nan and Infinity to null, breaking your code. When you have a function, symbol, or undefined value, it will return an empty key-value pair and skip it.
