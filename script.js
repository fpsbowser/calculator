// Add function
function addition(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
}

// Subtract function
function subtract(num1, num2) {
    let subtractValue = num1 - num2;
    console.log(subtractValue);
}

// Multiply function
function multiply(num1, num2) {
    let multiplyValue = num1 * num2;
    console.log(multiplyValue);
}

// Divide function
function divide(num1, num2) {
    let divideValue = num1 / num2;
    console.log(divideValue);
}

// Operate function
function operate(number1, operator, number2) {
    if (operator == '+') {
        addition(number1, number2);
    } else if (operator == '-') {
        subtract(number1, number2);
    } else if (operator == '*') {
        multiply(number1, number2);
    } else if (operator == '/') {
        divide(number1, number2);
    } else {
        console.log('Invalid operator!');
    }
}

operate(5,'+',4);
operate(5,'-',4);
operate(5,'*',4);
operate(6,'/',3);