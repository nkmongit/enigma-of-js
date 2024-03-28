const showDateAndTime = () => {
  const date = new Date();
  const day = date.getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const time = date.toLocaleTimeString();
  console.log(`Today is: ${days[day]}
Current time is: ${time}
  `);
};
showDateAndTime();

// Calculator App
let num1;
let num2;
function getValues() {
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
}

const doDivision = () => {
  if (num1 == undefined || num2 == undefined) {
    // do nothing
  } else {
    if ((num1 == 0 && num2 == 0) || num2 == 0) {
      const value = document.getElementById("result");
      value.innerHTML = "<span style='color:red'>CANNOT DIVIDE BY 0</span>";
    } else {
      console.log("div", num1);
      console.log("div", num2);
      const value = document.getElementById("result");
      const res = num1 / num2;
      value.innerHTML = `<span style="color: green; font-weight: bold">${res}</span>`;
    }
  }
};

const doMultiplication = () => {
  if (num1 == undefined || num2 == undefined) {
    // do nothing
  } else {
    console.log("mul", num1);
    console.log("mul", num2);
    const value = document.getElementById("result");
    const res = num1 * num2;
    value.innerHTML = `<span style="color: green; font-weight: bold">${res}</span>`;
  }
};

// Grading Program
function gradeStudent() {
  const examTypes = {
    PRE_EXAM: 0,
    MID_EXAM: 0,
    FINAL_EXAM: 0,
  };

  for (const val in examTypes) {
    examTypes[val] = Number(
      prompt(`ENTER TOTAL MARKS OF ${val.replace("_", " ")} OUT OF 100`)
    );
  }

  if (examTypes.FINAL_EXAM >= 90) {
    return true;
  } else if (
    examTypes.PRE_EXAM >= 89 &&
    examTypes.PRE_EXAM <= 100 &&
    examTypes.MID_EXAM >= 89 &&
    examTypes.MID_EXAM <= 100
  ) {
    return true;
  } else {
    return false;
  }
}

gradeStudent();
