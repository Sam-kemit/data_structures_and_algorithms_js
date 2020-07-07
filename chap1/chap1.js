/* Declaration and initializing variables */
var number;
var name;
var rate = 1.2;
var greeting = "Hello, world!";
var flag = false;

/* Arithmetic and Math library Functions in JS */
var x = 3;
var y = 1.1;
console.log(x + y);
console.log((x * y).toFixed(2));
console.log((x+y)*(x-y));
var z = 9;
console.log(Math.sqrt(z));
console.log(Math.abs(y/x));

/* Decision Constructs */
var mid = 25;
var high = 50;
var low = 1;
var current = 13;
var found = -1;
if (current < mid) {
    mid = (current - low) / 2;
} 
else if (current > mid) {
    mid = (current + high) / 2;
}
else {
    found = current;
}
/*
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a month number: ", monthNum => {
    var monthName;
    switch (monthNum) {
        case "1":
            monthName = "January";
            break;
        case "2":
            monthName = "February";
            break;
        case "3":
            monthName = "March";
            break;
        case "4": 
            monthName = "April";
            break;
        case "5":
            monthName = "May";
            break;
        case "6":
            monthName = "June";
            break;
        case "7":
            monthName = "July";
            break;
        case "8":
            monthName = "August";
            break;
        case "9":
            monthName = "September";
            break;
        case "10":
            monthName = "October";
            break;
        case "11":
            monthName = "November";
            break;
        case "12":
            monthName = "December";
            break;
        default:
            console.log("Bad input");
    }
    console.log(monthName);
    readline.close();
});
*/
/* Repetition Constructs */
var number = 1;
var sum = 0;
while (number < 11) {
    sum += number;
    ++number;
}
console.log(sum);

var numbers = [3, 7, 12, 22, 100];
var sum = 0;
for (var i=0; i<numbers.length; ++i) {
    sum += numbers[i];
}
console.log(sum);

/* Functions */
/*function factorial(number) {
    var product = 1;
    for (var i=number; i>=1; --i) {
        product *= i;
    }
    return product;
}
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(10));
*/
function curve(arr, amount) {
    for (var i=0; i<arr.length; ++i) {
        arr[i] += amount;
    }
}
var grades = [77, 73, 74, 81, 90];
curve(grades, 5);
console.log(grades);

/* Recursion */
function factorial(number) {
    if (number == 1) {
        return number;
    }
    else {
        return number * factorial(number - 1);
    }
}
console.log(factorial(5));