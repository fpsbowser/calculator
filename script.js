// Display Value
let displayValue = document.querySelector('.display');

let value = 0;
let firstValue = 0;
let secondValue = 0;
let operatorValue = '';
let solution = '';
let shouldReset = false;
let equalsPressed = false;

// Event Listener for all calculator buttons
let button = document.querySelector('.button-container');
button.addEventListener('click', (e) => {

    const isButton = e.target.nodeName === 'button';

    switch (!isButton && e.target.textContent) {
        case '÷':
            if (operatorValue != '') {
                operate(firstValue, operatorValue, displayValue.textContent);
                operatorValue = '/'
                firstValue = displayValue.textContent;
                shouldReset = true;
                break;
            }
            firstValue = displayValue.textContent;
            operatorValue = '/';
            displayValue.textContent = '';
            break;
        case 'x':
            if (operatorValue != '') {
                operate(firstValue, operatorValue, displayValue.textContent);
                operatorValue = 'x';
                firstValue = displayValue.textContent;
                shouldReset = true;
                break;
            }
            firstValue = displayValue.textContent;
            operatorValue = 'x';
            displayValue.textContent = '';
            break;
        case '-':
            if (operatorValue != '') {
                operate(firstValue, operatorValue, displayValue.textContent);
                operatorValue = '-'
                firstValue = displayValue.textContent;
                shouldReset = true;
                break;
            }
            firstValue = displayValue.textContent;
            operatorValue = '-';
            displayValue.textContent = '';
            break;
        case '+':
            if (operatorValue != '') {
                operate(firstValue, operatorValue, displayValue.textContent);
                operatorValue = '+'
                firstValue = displayValue.textContent;
                shouldReset = true;
                break;
            }
            firstValue = displayValue.textContent;
            operatorValue = '+';
            displayValue.textContent = '';
            break;
        case '=':
            operate(firstValue, operatorValue, displayValue.textContent);
            operatorValue = '';
            break;
        case 'CLR':
            firstValue = 0;
            shouldReset = false;
            secondValue = 0;
            operatorValue = '';
            displayValue.textContent = '';
            break;
        default:
            if (shouldReset == true) {
                displayValue.textContent = '';
            }
            shouldReset = false;
            displayValue.textContent += e.target.textContent;
    }
})

    /* FUNCTIONS */

// Add function
function addition(num1, num2) {
    let sum = Number(num1) + Number(num2);
    displayValue.textContent = `${sum}`;
    value = sum;
}

// Subtract function
function subtract(num1, num2) {
    let subtractValue = num1 - num2;
    if (subtractValue % 1 != 0) {
        subtractValue = (num1 - num2).toFixed(2);
    }
    displayValue.textContent = `${subtractValue}`;
    value = subtractValue;
}

// Multiply function
function multiply(num1, num2) {
    let multiplyValue = num1 * num2;
    if (multiplyValue % 1 != 0) {
        multiplyValue = (num1 / num2).toFixed(2);
    }
    displayValue.textContent = `${multiplyValue}`;
    value = multiplyValue;
}

// Divide function
function divide(num1, num2) {
    let divideValue = num1 / num2;
    if (divideValue % 1 != 0) {
        divideValue = (num1 / num2).toFixed(2);
    }
    displayValue.textContent = `${divideValue}`;
    value = divideValue;
}

// Operate function
function operate(number1, operator, number2) {
    if (operator == '+') {
        addition(number1, number2);
    } else if (operator == '-') {
        subtract(number1, number2);
    } else if (operator == 'x') {
        multiply(number1, number2);
    } else if (operator == '/') {
        divide(number1, number2);
    } else {
        console.log('Invalid operator!');
    }
}
