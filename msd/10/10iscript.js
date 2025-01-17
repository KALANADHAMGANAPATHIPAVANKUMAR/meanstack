const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let previousInput = '';
let operator = null;

// Function to update the display
function updateDisplay(value) {
  display.textContent = value.length > 0 ? value : '0';
}

// Function to handle calculations
function calculate() {
  if (operator && previousInput !== '' && currentInput !== '') {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
      case '+':
        return (num1 + num2).toString();
      case '-':
        return (num1 - num2).toString();
      case '*':
        return (num1 * num2).toString();
      case '/':
        return num2 !== 0 ? (num1 / num2).toString() : 'Error'; // Prevent division by zero
      default:
        return currentInput;
    }
  }
  return currentInput;
}

// Add event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'Clear') {
      // Reset all inputs
      currentInput = '';
      previousInput = '';
      operator = null;
      updateDisplay('0');
    } else if (value === '=') {
      // Perform calculation
      currentInput = calculate();
      previousInput = '';
      operator = null;
      updateDisplay(currentInput);
    } else if ('+-*/'.includes(value)) {
      // Set operator and store previous input
      if (operator && currentInput) {
        currentInput = calculate();
      }
      operator = value;
      previousInput = currentInput;
      currentInput = '';
      updateDisplay(`${previousInput} ${operator}`);
    } else {
      // Append number or decimal to current input
      if (value === '.' && currentInput.includes('.')) return; // Prevent multiple decimals
      currentInput += value;
      updateDisplay(currentInput);
    }
  });
});