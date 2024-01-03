let displayValue = '0';
let operator = '';
let firstOperand = null;
let awaitingNextOperand = false;

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    operator = '';
    firstOperand = null;
    awaitingNextOperand = false;
    updateDisplay();
}

function appendNumber(number) {
    if (awaitingNextOperand) {
        displayValue = number;
        awaitingNextOperand = false;
    } else {
        displayValue = displayValue === '0' ? number : displayValue + number;
    }
    updateDisplay();
}

function setOperator(nextOperator) {
    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
    } else if (operator) {
        calculate();
    }
    operator = nextOperator;
    awaitingNextOperand = true;
}

function calculate() {
    const secondOperand = parseFloat(displayValue);
    if (operator === '+') {
        displayValue = (firstOperand + secondOperand).toString();
    } else if (operator === '-') {
        displayValue = (firstOperand - secondOperand).toString();
    } else if (operator === '*') {
        displayValue = (firstOperand * secondOperand).toString();
    } else if (operator === '/') {
        displayValue = (firstOperand / secondOperand).toString();
    }
    operator = '';
    firstOperand = null;
    awaitingNextOperand = false;
    updateDisplay();
}

// Initial display update
updateDisplay();
