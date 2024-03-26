'use strict';

/*
TASK - 1
Write a JavaScript program to find the area of a triangle 
where lengths of the three of its sides are 5, 6, 7.
 */
function findArea() {
  const s1 = 5;
  const s2 = 6;
  const s3 = 7;

  const s = (s1 + s2 + s3) / 2;
  const area = Math.sqrt(s * (s - s1) * (s - s2) * (s - s3));
  console.log(`Area of the triangle: ${area}`);
}

/*
TASK -2
 Write a JavaScript function to print the contents of the current window.
*/
function printContents() {
  window.print();
}

/*
TASK - 3
Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
*/
function convertTempCeliusToFahrenheit(temp) {
  const tempFahrenheit = (temp * 9) / 5 + 32;
  console.log(
    `Temperature in celcius ${temp} and temp in fahrenheit ${tempFahrenheit}`
  );
}
