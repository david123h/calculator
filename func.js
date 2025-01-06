//initial values
let currentValue = "";
let valueA;
let valueB;
let newValue;
let operation;

//getting the calculator screen through DOM
let currentDisplay = document.getElementById("display");

//bacic nethods of the calculator
let preformCalculation = function (a, b, value) {
  switch (value) {
    case `add`:
      return (value = a + b);
    case `subtract`:
      return (value = a - b);
    case `duplicate`:
      return (value = a * b);
    case `divide`:
      return (value = a / b);
  }
  return value;
};

//getting the numbers and the dot as buttuns
let numButtuns = buttuns.querySelectorAll(".num");
numButtuns.forEach((buttun) => {
  buttun.addEventListener("click", handleButtonClick);
});

//getting the operations as buttuns
let operationButtuns = document.querySelectorAll(".op");
operationButtuns.forEach((buttun) => {
  buttun.addEventListener("click", handleOperationClick);
});

//notice what number has been pressed
function handleButtonClick(event) {
  const buttonId = event.target.id;
  
  switch (buttonId) {
    case "zero":
      newValue = 0;
      break;
    case "one":
      newValue = 1;
      break;
    case "two":
      newValue = 2;
      break;
    case "three":
      newValue = 3;
      break;
    case "four":
      newValue = 4;
      break;
    case "five":
      newValue = 5;
      break;
    case "six":
      newValue = 6;
      break;
    case "seven":
      newValue = 7;
      break;
    case "eight":
      newValue = 8;
      break;
    case "nine":
      newValue = 9;
      break;
    case "dot":
      if (currentValue.includes(".")) newValue = "";
      else if (currentValue === "") newValue = "0.";
      else newValue = ".";
      break;
    case "subtract":
      if (currentValue === "" && operation){
        newValue = "-"
      } else {
        newValue = ""
      }
      // currentValue === "" ? (newValue = "-") : (newValue = "");
  }
  currentValue += newValue;
  currentDisplay.innerText = currentValue;
}

//notice what operation has been pressed
function handleOperationClick(event) {
  if (
    currentValue != "" &&
    currentValue != "-" &&
    currentValue[currentValue.length - 1] != "."
  ) {
    valueA === undefined
      ? (valueA = Number(currentValue))
      : (valueB = Number(currentValue));
    let buttonId = event.target.id;
    switch (buttonId) {
      case "divide":
        operation = "divide";
        break;
      case "duplicate":
        operation = "duplicate";
        break;
      case "subtract":
        operation = "subtract";
        break;
      case "add":
        operation = "add";
        break;
      case "aqual":
        break;
    }
    currentValue = " ";
    console.log(operation);
  }
}

//notice when the equal buttun has been pressed
const equalButtun = document.getElementById("aqual");
equalButtun.addEventListener("click", handleEqualClick);

function handleEqualClick() {
  if (valueA && valueB) {
    valueA = preformCalculation(valueA, valueB, operation);
    currentDisplay.textContent = valueA;
    // valueB = undefined;
    // operation = undefined;
    // currentValue = ""
  }
}

