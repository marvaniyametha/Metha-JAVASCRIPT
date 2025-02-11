let display = document.getElementById("result");

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  const lastChar = display.value.slice(-1);
  // Prevent adding multiple operators consecutively
  if (["+", "-", "*", "/"].includes(lastChar)) {
    return;
  }
  display.value += operator;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    // Evaluate the expression and display the result
    display.value = eval(display.value);
  } catch (error) {
    // If an error occurs, clear the display and show an error message
    display.value = "Error";
    setTimeout(() => {
      clearDisplay();
    }, 1000);
  }
}
