// let isBalanced = (input) => {

//     let brackets = "[]{}()<>"
//     let stack = []

//     for(let bracket of input) {
//         let bracketsIndex = brackets.indexOf(bracket)

//         if(bracketsIndex % 2 === 0) {
//             stack.push(bracketsIndex + 1)
//         } else {
//             if(stack.pop() !== bracketsIndex) {
//                 return false;
//             }   
//         }
//     }
//     return stack.length === 0
// }
// console.log(isBalanced('()'));

var rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
// var count = 0;
// while(count <10) {
//     rl.question("What's your favourite food: ", answer => {
//         console.log("Oh, so your favorite food is " + answer);
//     });
//     count ++;
// }

var recursiveAsyncReadLine = function () {
    rl.question('Command: ', function (answer) {
        if (answer == 'exit')
            return rl.close();
        console.log("Got it! Your answer was: "+ answer);
        recursiveAsyncReadLine();
    });
};

recursiveAsyncReadLine();