/*
TASK - 1
Write a JavaScript program to list the properties of a JavaScript object
*/

function listObjectProperties() {
  const person = {
    firstName: "Test",
    lastName: "User",
    age: 24,
    isWorking: true,
    start: () => {
      console.log("Start Learning");
    },
  };

  console.log(person);
}

// listObjectProperties();

/*
TASK - 2
Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. 
var student = {
name : "Mark",
sclass : "VI",
rollno : 12 };
*/

function deleteProperty() {
  var student = {
    name: "Mark",
    sclass: "VI",
    rollno: 12,
  };

  console.log("BEFORE DELETING THE PROPERTY");
  console.log(student);
  delete student.rollno;
  console.log("AFTER DELETING THE PROPERTY");
  console.log(student);
}

// deleteProperty();

/*
TASK - 3
Write a JavaScript program to get the length of a JavaScript object. 
var student = { 
name : "Mark", 
sclass : "VI", 
rollno : 12 };
*/

function getLengthOfJSObject() {
  var student = {
    name: "Mark",
    sclass: "VI",
    rollno: 12,
  };

  const lengthOfObject = Object.keys(student).length;
  console.log(lengthOfObject);
}

getLengthOfJSObject();
