"use strict";

/*
TASK - 1
Write a JavaScript function 
to extract a specified number of characters from a string. 
Test Data : console.log(truncate_string("Mohit Kumar",4)); "Mohi"
*/

const truncate_string = (name, num) => {
  let newString = "";
  for (let i = 0; i < num; i++) {
    newString = newString + name[i];
  }
  return newString;
};

const val = truncate_string("Nishant Mohapatra", 4);
console.log(val);

/*
TASK - 2
Write a JavaScript function to capitalize the first letter of a string.
*/

const capitalize_string = (stringVal) => {
  if (stringVal instanceof String) {
    const trimmedString = stringVal.trim();
    const finalString =
      trimmedString[0].toUpperCase() +
      trimmedString.substring(1, trimmedString.length);
    return finalString;
  } else {
    return "Please enter a string value";
  }
};

const word = capitalize_string("nishant");
console.log(word);

/*
TASK - 3
Print all even numbers from 0 – 10
*/

function printAllEven() {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

printAllEven();

/*
TASK - 4
Create a length converter function
*/

const lengthConverter = () => {};
