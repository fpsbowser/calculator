// Display Value
let displayValue = document.querySelector('.display');

let firstValue = 0;
let operatorValue = '';
let solution = '';

// Event Listener for all calculator buttons
let button = document.querySelector('.button-container');
button.addEventListener('click', (e) => {

    const isButton = e.target.nodeName === 'button';
    if (!isButton && isNaN(e.target.textContent) == false) {
        console.log(e.target.id);
        displayValue.textContent += e.target.textContent;
    } else if (!isButton && e.target.textContent == '÷') {
        firstValue = displayValue.textContent;
        operatorValue = '/';
        displayValue.textContent = '';
        console.log(firstValue);
    } else if (!isButton && e.target.textContent == 'x') {
        firstValue = displayValue.textContent;
        operatorValue = 'x'
        displayValue.textContent = '';
    } else if (!isButton && e.target.textContent == '-') {
        firstValue = displayValue.textContent;
        operatorValue = '-';
        displayValue.textContent = '';
    } else if (!isButton && e.target.textContent == '+') {
        firstValue = displayValue.textContent;
        operatorValue = '+'
        displayValue.textContent = '';
    } else if (!isButton && e.target.textContent == '=') {
        secondValue = displayValue.textContent;
        operate(firstValue, operatorValue, displayValue.textContent); 
    } else if (!isButton && e.target.textContent == 'CLR') {
        displayValue.textContent = '';
    }
})

    /* FUNCTIONS */

// Add function
function addition(num1, num2) {
    let sum = Number(num1) + Number(num2);
    console.log(sum);
    displayValue.textContent = `${sum}`;
}

// Subtract function
function subtract(num1, num2) {
    let subtractValue = num1 - num2;
    console.log(subtractValue);
    displayValue.textContent = `${subtractValue}`;
}

// Multiply function
function multiply(num1, num2) {
    let multiplyValue = num1 * num2;
    console.log(multiplyValue);
    displayValue.textContent = `${multiplyValue}`;
}

// Divide function
function divide(num1, num2) {
    let divideValue = num1 / num2;
    console.log(divideValue);
    displayValue.textContent = `${divideValue}`;
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
