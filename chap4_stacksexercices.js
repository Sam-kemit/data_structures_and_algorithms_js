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
    this.length = length;
    this.empty = empty;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

function length() {
    return this.top;
}

function empty() {
    return this.top == 0;
}

var bracketMap = {
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>'
};

function bracketMatch(brackets) {
    var stack = new Stack();
    brackets = brackets.replace(/\s/g, '');
    for (var c of brackets) {
        if (isLeftBrackets(c)) {
            stack.push(c);
            continue;
        }
        if (stack.empty() || !match(stack.pop(), c)) {
            return false;
        }
    }
    return stack.empty();
}

function isLeftBrackets(bracket) {
    return bracketMap[bracket] != null;
}

function match(left, right) {
    return bracketMap[left] === right;
}

console.log(bracketMatch("[]"))


// function isMatchingPair(exp1, exp2) {
//     if (exp1 == '(' && exp2 == ')') {
//         return true;
//     }
//     else if (exp1 == '{' && exp2 == '}') {
//         return true;
//     }
//     else if (exp1 == '[' && exp2 == ']') { 
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// function isBalanced(exp) {
//     var brackets = "[]{}()<>";
//     var stack = [];

//     for (var bracket of exp) {
//         var bracketsIndex = brackets.indexOf(bracket);
//         if (bracketsIndex % 2 === 0) {
//             stack.push(bracketsIndex+1);
//         }
//         else {
//             if (stack.pop() !== bracketsIndex) {
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0;
// }
// console.log(isBalanced('()'));

// // function areParanthesisBalanced(exp) {
// //     var stack = new Stack();

// //     for(var i=0; i<exp.length; ++i) {
// //         //var c = exp.charAt(i);
// //         if (exp[i] == '[' || exp[i] == '(' || exp[i] == '{') {
// //             stack.push(exp[i]);
// //         } 
// //         if (exp[i] == ']' || exp[i] == ')' || exp[i] == '}') {
// //             if (stack.length == 0) {
// //                 return false;
// //             }
// //             else if (!isMatchingPair(stack.pop(), exp[i])) {
// //                 return false;
// //             }
// //         } 
// //     }
// //     if (stack.length == 0) {
// //         return true;
// //     }
// //     else {
// //         return false;
// //     }
// // }

// // var exp = "{()}[]";
// // if (areParanthesisBalanced(exp)) {
// //     console.log("Balanced");
// // }
// // else {
// //     console.log("Not Balanced");
// // }
