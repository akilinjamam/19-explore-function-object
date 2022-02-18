// this is add.

function addTwoNumber(num1, num2) {
    console.log(num1, num2);
    var total = num1 + num2;
    return total;
}

var firstNumber = 25;
var secondNumber = 35;

var result = addTwoNumber(firstNumber, secondNumber);
console.log('result value', result);

// this is deduct

function deductSecondNumber(number1, number2) {
    console.log(number1, number2);
    var total = number1 - number2;
    return total;
}

var first = 40;
var second = 10;

var result = deductSecondNumber(first, second);
console.log('result dekho', result);

// this is multiplication

function multiply(number1, number2) {
    console.log(number1, number2);
    var total = number1 * number2;
    return total;
}
var first1 = 5;
var second2 = 100;

var theResult = multiply(first1, second2);

console.log('ei dekho tmr result', theResult);

// this is division

function division(numbers1, numbers2) {
    console.log(numbers1, numbers2);
    var total = numbers1 / numbers2;
    return total;
}

var vag1 = 300;
var vag2 = 2;

var result = division(vag1, vag2);

console.log('this is result', result);