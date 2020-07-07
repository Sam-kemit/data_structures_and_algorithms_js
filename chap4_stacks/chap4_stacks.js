/*************************
 * A Stack Implementation
 *************************/

function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top-1];
}

function length() {
    return this.top;
}

function clear() {
    this.top = 0;
    this.dataStore.length = 0;
}

// Testing the stack class implementation
var s = new Stack();
s.push("Kimpa");
s.push("Kimia");
s.push("Victoria");
console.log("length: " + s.length());
console.log(s.peek());

var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("Elizeth");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Carla");
console.log(s.peek());

/****************************
 * Multiple Base Conversions
 ****************************/

    /* Converting numbers to base 2 and base 8 */
function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}

var num = 32;
var base = 2;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + " is " + newNum);
num = 125;
base = 8;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + " is " + newNum);

    /* Palindromes */
function isPalindrome(word) {
    var s = new Stack();
    for (var i=0; i<word.length; ++i) {
        s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }
    if (word == rword) {
        return true;
    }
    else {
        return false;
    }
}

var word = "hello";
if (isPalindrome(word)) {
    console.log(word + " is a palindrome.");
}
else {
    console.log(word + " is not a palindrome.");
}

word = "racecar";
if (isPlaindrome(word)) {
    console.log(word + " is a palindrome.");
}
else {
    console.log(word + " is not a palindrome.");
}

    /* Demonstrating Recursion */

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n-1);
    }
}

function fact(n) {
    var s = new Stack();
    while (n > 1) {
        s.push(n--);
    }
    var product = 1;
    while (s.length() > 0) {
        product *= s.pop();
    }
    return product;
}

console.log(factorial(5));
console.log(fact(5));