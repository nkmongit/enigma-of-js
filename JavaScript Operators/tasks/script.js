/*
TASK - 1
Write a JavaScript program to get the website URL (loading page)
*/

function getWebsiteURL() {
  const url = window.location.href;
  console.log(url);
}
// getWebsiteURL();

/*
TASK - 2
Write a JavaScript program to demonstrate the use of alert, prompt and confirm box.
*/

function makeUseOfBoxes() {
  alert("ENTER VALUES IN PROMPT");
  confirm("CONFIRM? YOU WANNA ENTER VALUES?");
  const name = prompt("ENTER YOUR NAME");
  console.log(name);
}

// makeUseOfBoxes();

/*
TASK - 3
Write a JavaScript program to compute the sum of the two given integers. 
If the two values are same, then returns triple their sum.
*/

function findSum(num1, num2) {
  if (num1 !== num2) {
    return num1 + num2;
  } else {
    return (num1 + num2) * 3;
  }
}

const sum = findSum(8, 9);
console.log(sum);
