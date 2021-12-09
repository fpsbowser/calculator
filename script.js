// Add function
function addition(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
    return sum;
}

// Subtract function
function subtract(num1, num2) {
    console.log(num1, num2);
    let subtractValue = num1 - num2;
    return subtractValue;
}

// Multiply function
function multiply(num1, num2) {
    let multiplyValue = num1 * num2;
    return multiplyValue;
}

// Divide function
function divide(num1, num2) {
    let divideValue = num1 / num2;
    return divideValue;
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
        'Invalid operator!'
    }
}