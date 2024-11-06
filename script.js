const output = document.getElementById("output");
const buttons = document.querySelectorAll(".button");
let currentInput = "";
let operator = null;
let firstOperand = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "RESET") {
      resetCalculator();
    } else if (value === "DEL") {
      deleteLastChar();
    } else if (value === "=") {
      calculateResult();
    } else if (["+", "-", "x", "/"].includes(value)) {
      setOperator(value);
    } else {
      appendValue(value);
    }
  });
});

function resetCalculator() {
  operator = null;
  firstOperand = null;
  currentInput = "";
  output.textContent = "0";
}
function deleteLastChar() {
  currentInput = currentInput.slice(0, -1);
  output.textContent = currentInput || "0";
}
function setOperator(op) {
  if (firstOperand === null && currentInput != "") {
    firstOperand = parseFloat(currentInput);
    operator = op;
    currentInput = "";
  }
}
function appendValue(value) {
  if (value === "." && currentInput.includes(".")) return;
  currentInput += value;
  output.textContent = currentInput;
}
function calculateResult() {
  if (operator && currentInput != "") {
    const secondOperand = parseFloat(currentInput);
    let result;

    switch (operator) {
      case "+":
        result = firstOperand + secondOperand;
        break;
      case "-":
        result = firstOperand - secondOperand;
        break;
      case "x":
        result = firstOperand * secondOperand;
        break;
      case "/":
        result = firstOperand / secondOperand;
        break;
    }
    output.textContent = result.toLocaleString();
    currentInput = result.toString();
    operator = null;
    firstOperand = null;
  }
}

// const output = document.getElementById("output");
// const buttons = document.querySelectorAll(".button");

// let currentInput = "";

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const value = button.textContent;

//     if (value === "RESET") {
//       output.textContent = "0";
//       currentInput = "";
//     } else if (value === "DEL") {
//       currentInput = currentInput.slice(0, -1);
//       output.textContent = currentInput || "0";
//     } else if (value === "=") {
//         const result = eval(currentInput);
//         output.textContent = result;
//         currentInput = result.toString();
//     } else {
//       currentInput += value;
//       output.textContent = currentInput;
//     }
//   });
// });
