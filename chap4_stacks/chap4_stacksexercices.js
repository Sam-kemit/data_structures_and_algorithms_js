/**
 * 1. A stack can be used to ensure that an arithmetic expression has balanced paren‐
 * theses. Write a function that takes an arithmetic expression as an argument and
 * returns the postion in the expression where a parenthesis is missing. An example
 * of an arithmetic expression with unbalanced parentheses is 2.3+23/12+(3.14159*.24.
 */

function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.empty = empty;
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

function empty() {
    return this.top == 0;
}

// var bracketMap = {
//     '(': ')',
//     '[': ']',
//     '{': '}',
//     '<': '>'
// };

// function bracketMatch(brackets) {
//     var stack = new Stack();
//     brackets = brackets.replace(/\s/g, '');
//     for (var c of brackets) {
//         if (isLeftBrackets(c)) {
//             stack.push(c);
//             continue;
//         }
//         if (stack.empty() || !match(stack.pop(), c)) {
//             return false;
//         }
//     }
//     return stack.empty();
// }

// function isLeftBrackets(bracket) {
//     return bracketMap[bracket] != null;
// }

// function match(left, right) {
//     return bracketMap[left] === right;
// }

// console.log(bracketMatch("(1+2*3*(4*5+3))"))


function balancePar(expression) {
    var pFlag = false, nFlag = 0;
    var s = new Stack();
    for (var i of expression.split('')) {
        if (i === "(") {
            pFlag = true;
        }
        else if (pFlag && !Number.isNaN(Number.parseInt(i))) {
            nFlag++;
        }
        else if (nFlag > 1) {
            i == ")" ? null : s.push(')');
            pflag = false;
            nFlag = 0;
        }
        s.push(i);
    }
    return s.dataStore.join('');
}
console.log(balancePar("2.3+23/12+(3.14159*.24"));

/**
 * 2. A postfix expression evaluator works on arithmetic expressions taking the following
 * form: op1 op2 operator
 * Using two stacks—one for the operands and one for the operators—design and
 * implement a JavaScript function that converts infix expressions to postfix expres‐
 * sions, and then use the stacks to evaluate the expression.
 */

function postFix(expression) {
    var op = new Stack();
    var num = new Stack();
    var outp = 0;
    for (var i of expression.split(' ')) {
        !Number.isNaN(Number.parseInt(i)) ? num.push(i) : ['+','-','*','/'].indexOf(i) > -1 ? op.push(i) : null
    }   
    for (var i of op.dataStore.reverse()) {
        if (num.top < 2) {
            outp = eval(num.pop() + i + outp);
        }
        else {
            outp += eval(num.pop() + i + num.pop())
        }
        console.log(outp); 
    }
    return outp;
}
console.log(postFix('2 3 -'));

/**
 * 3. An example of a real-world stack is a Pez dispenser. Imagine that your virtual Pez
 * dispenser is filled with red, yellow, and white colors and you don’t like the yellow
 * ones. Write a program that uses a stack (and maybe more than one) to remove the
 * yellow ones without changing the order of the other candies in the dispenser.
 */

function pez(color) {
    var orig = new Stack();
    var temp = new Stack();
    for (var i=0; i<12; ++i) {
        orig.push(["red","yellow","white"][Math.floor(Math.random()*3)]);
    }
    console.log(orig.dataStore)
    for (var i=0; i<12; ++i) {
        var sel = orig.pop();
        sel == color ? null : temp.push(sel);
    }
    var len = temp.top;
    for (var i=0; i<len; ++i) {
        orig.push(temp.pop());
    }
    console.log(orig.dataStore);
}

console.log(pez("red"));
 