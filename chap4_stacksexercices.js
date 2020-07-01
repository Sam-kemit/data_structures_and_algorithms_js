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
    this.clear = clear;
    this.length = length;
}

