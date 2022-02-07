// Display Value
let displayValue = document.querySelector('.display');

<<<<<<< HEAD
let value = 0;
let firstValue = 0;
let secondValue = 0;
let operatorValue = '';
let solution = '';
let shouldReset = false;
let equalsPressed = false;
=======
let firstValue = 0;
let operatorValue = '';
let solution = '';
>>>>>>> 1f36f1eff7844465301ea197cfdc237b2b96f5d6

// Event Listener for all calculator buttons
let button = document.querySelector('.button-container');
button.addEventListener('click', (e) => {

    const isButton = e.target.nodeName === 'button';
<<<<<<< HEAD

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
=======
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
>>>>>>> 1f36f1eff7844465301ea197cfdc237b2b96f5d6
    }
})

    /* FUNCTIONS */

// Add function
function addition(num1, num2) {
    let sum = Number(num1) + Number(num2);
<<<<<<< HEAD
    displayValue.textContent = `${sum}`;
    value = sum;
=======
    console.log(sum);
    displayValue.textContent = `${sum}`;
>>>>>>> 1f36f1eff7844465301ea197cfdc237b2b96f5d6
}

// Subtract function
function subtract(num1, num2) {
    let subtractValue = num1 - num2;
<<<<<<< HEAD
    if (subtractValue % 1 != 0) {
        subtractValue = (num1 - num2).toFixed(2);
    }
    displayValue.textContent = `${subtractValue}`;
    value = subtractValue;
=======
    console.log(subtractValue);
    displayValue.textContent = `${subtractValue}`;
>>>>>>> 1f36f1eff7844465301ea197cfdc237b2b96f5d6
}

// Multiply function
function multiply(num1, num2) {
    let multiplyValue = num1 * num2;
<<<<<<< HEAD
    if (multiplyValue % 1 != 0) {
        multiplyValue = (num1 / num2).toFixed(2);
    }
    displayValue.textContent = `${multiplyValue}`;
    value = multiplyValue;
=======
    console.log(multiplyValue);
    displayValue.textContent = `${multiplyValue}`;
>>>>>>> 1f36f1eff7844465301ea197cfdc237b2b96f5d6
}

// Divide function
function divide(num1, num2) {
    let divideValue = num1 / num2;
<<<<<<< HEAD
    if (divideValue % 1 != 0) {
        divideValue = (num1 / num2).toFixed(2);
    }
    displayValue.textContent = `${divideValue}`;
    value = divideValue;
=======
    console.log(divideValue);
    displayValue.textContent = `${divideValue}`;
>>>>>>> 1f36f1eff7844465301ea197cfdc237b2b96f5d6
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
