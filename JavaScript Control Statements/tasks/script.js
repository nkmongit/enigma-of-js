"use strict";

/*
TASK - 2
Write a JavaScript program to check two given numbers and 
return true if one of the number is 50 or if their sum is 50.
*/

function checkNumber(num1, num2) {
  if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
    return true;
  } else {
    return false;
  }
}

const isNumFifty = checkNumber(40, 10);
console.log(isNumFifty);

/*
TASK - 3
Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
*/
