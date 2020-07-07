/**
 * Chapter 2. Arrays
 */

/***************
 * Using Arrays
 **************/

        /* Creating Arrays */
var numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);

var numbers1 = new Array(1,2,3,4,5); // call Array constructor
console.log(numbers1.length);

var objects = [1, "Samuel", true, null];

var numbers2 = 3;
var arr = [6,12,1996];
console.log(Array.isArray(numbers2)); // displays false
console.log(Array.isArray(arr)); // displays true

        /* Accessing and Writing Array Elements */
var nums = [1,2,3,5,8,13,21];
var sum = 0;
for (var i=0; i<nums.length; ++i) {
    sum += nums[i];
}
console.log(sum);

        /* Creating Arrays from Strings */
var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");
for (var i=0; i<words.length; ++i) {
    console.log("word " + i + ": " + words[i]);
}

        /* Aggregate Array Operations */
var nums = [];
for (var i=0; i<100; ++i) {
    nums[i] = i + 1;
}
var samenums = nums; // shallow copy 
console.log("Avant changement -> " + nums[0]);
nums[0] = 400;
console.log(samenums[0]);

// make a deep copy. to create a function to perform the task
function copy(arr1, arr2) {
    for (var i=0; i<arr1.length; ++i) {
        arr2[i] = arr1[i];
    }
}
var nums1 = [];
for (var i=0; i<100; ++i) {
    nums1[i] = i + 1;
}
var samenums1 = [];
copy(nums1, samenums1);
console.log("Avant changement -> " + nums1[0]);
nums1[0] = 400;
console.log(samenums1[0]);


/**********************
 * Accessor Functions
 *********************/

        /* Searching for a Value */
var names = ["Exoussia", "Victoria", "Kimpa", "Victoria", "Kimia", "Kimia"];
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// readline.question("Enter a name to search for: ", name => {
//     var firstPos = names.indexOf(name);
//     var lastPos = names.lastIndexOf(name);
//     if (firstPos >= 0 || lastPos >= 0) {
//         console.log("First found " + name + " at position " + firstPos); 
//         console.log("Last found " + name + " at position " + lastPos); 
//     }
//     else {
//         console.log(name + " not found in array.");
//     }
//     readline.close();
// });

        /* String Representations of Arrays 
        * there are two functions : join() and toString().
        */
var namestr = names.join();
console.log(namestr);
namestr = names.toString();
console.log(namestr);

        /* Creating New Arrays from Existing Arrays 
        * there are two accessor : concat() and splice().
        * concat() -> function allows you to put together two or more arrays to create a new array.
        * splice() -> function allows you to create a new array from a subset of an existing array.
        */
var cisDept = ["Exoussia", "Victoria", "Kimpa", "Kimia"];
var dmpDept = ["Kemit", "Kueta"];
var itDiv = cisDept.concat(dmpDept);
console.log(itDiv.join());

var dmpDept1 = itDiv.splice(3,3);
var cisDept1 = itDiv;
console.log(dmpDept1.join());
console.log(cisDept1.join());

/********************
 * Mutator Functions
 ********************/

        /* Adding Elements to an Array 
        * there are two mutator functions for adding elements to an array:
        * push() -> function adds an element to the end of an array
        * unshift() -> function adds an element to the beginning of an array
        */
var nums2 = [1,2,3,4,5];
console.log(nums2);
nums2.push(6);
console.log(nums2);

var newnum = 1;
nums2.unshift(newnum);
console.log(nums2);
nums2 = [7,8,9];
nums2.unshift(newnum,1,2);
console.log(nums2);

        /* Removing Elements from an Array 
        * pop() -> removing an element from the end of an array
        * shift() -> remove an element from the beginning of an array
        */
nums2.pop();
console.log(nums2);
nums2.shift();
console.log(nums2);
// collect the values return from shift and pop
var arr = [6,1,2,3,4,5];
var first = arr.shift(); // first gets the value 6
console.log(first);
arr.push(first);
console.log(arr);

        /* Adding and Removing Elements from the Middle an Array
        * splice()
         */
var nums3 = [1,2,3,7,8,9];
var newElements = [4,5,6];
nums3.splice(3,0,4,5,6);
console.log(nums3);
// use splice() to remove elements
nums3.splice(3,4);
console.log(nums3); // 1,2,3,8,9

        /* Putting Array Elements in Order 
        * reverse() -> reverses the order of the elements of an array
        */
var nums4 = [1,2,3,4,5];
nums4.reverse();
console.log(nums4);
// sort() works very well with strings and doesn't work so well with numbers
var names = ["Exoussia", "Victoria", "Kimpa", "Kimia", "Samuel"];
names.sort();
console.log(names);

/*********************
 * Iterator Functions
 *********************/

        /* Non-Array Generating Iterator Functions
         * forEach() -> this function takes a function as an argument and applies the called function to each element of an array. 
         * every() -> applies a boolean function to an array. Determines whether all the members of an array satisfy the specified test
         * some() -> function will take a boolean function and return true if at least one of the elements in the array meets the criterion of the boolean function.
         * reduce() -> 
         */
// forEach()
function square(num) {
    console.log(num, num * num);
}
var nums5 = [1,2,3,4,5,6,7,8,9,10];
nums5.forEach(square);

// every()
function isEven(num) {
    return num % 2 == 0;
}
var nums6 = [2,4,6,8,10];
var even = nums6.every(isEven);
if (even) {
    console.log("all numbers are even");
}
else {
    console.log("not all numbers are even");
}

// some()
var someEven = nums5.some(isEven);
if (someEven) {
    console.log("some numbres are even");
}
else {
    console.log("no numbers are even");
}
nums5 = [1,3,5,7,9];
someEven = nums5.some(isEven);
if (someEven) {
    console.log("some numbres are even");
}
else {
    console.log("no numbers are even");
}

// reduce()
function add(runningTotal, currentValue) {
    return runningTotal + currentValue;
}
var sum = nums5.reduce(add);
console.log(sum);

function concat(accumulatedString, item) {
    return accumulatedString + item;
}
var words = ["the ", "quick ", "brown ", "fox "];
var sentence = words.reduce(concat);
console.log(sentence);

        /* Iterator Functions That Return a New Array 
        * map() -> this function works like the forEach() function, applying a function to each element of an array. map() returns a new array with the resultats
        * filter() -> works similarly to every()
        */
function curve(grade) {
    return grade += 5;
}
var grades = [77,65,81,92,83];
var newgrades = grades.map(curve);
console.log(newgrades);

function first(word) {
    return word[0];
}
// var words1 = ["for","your","information"];
// var acronym = words1.map(first);
// console.log(acronym.join(""));

// filter()
function isOdd(num) {
    return num % 2 != 0;
}
var nums7 = [];
for (var i=0; i<20; ++i) {
    nums7[i] = i + 1;
}
var evens = nums7.filter(isEven);
console.log("Even numbers: ")
console.log(evens.join());
var odds = nums7.filter(isOdd);
console.log("Odd numbers: ");
console.log(odds.join());

function passing(num) {
    return num >= 60;
}
var grades = [];
for (var i=0; i<20; ++i) {
    grades[i] = Math.floor(Math.random() * 101);
}
var passGrades = grades.filter(passing);
console.log("All grades: ");
console.log(grades.join());
console.log("Passing grades: ");
console.log(passGrades.join());

function afterc(str) {
    if (str.indexOf("cie") > -1) {
        return true;
    }
    return false;
}
var words2 = ["recieve","deceive","percieve","deceit","concieve"];
var misspelled = words2.filter(afterc);
console.log(misspelled);

/**********************************************
 * Two Dimensional and Multidimensional Arrays
 **********************************************/

        /* Creating Two Dimensional Arrays */
Array.matrix = function(numrows, numcols, initial) {
    var arr3 = [];
    for (var i=0; i<numrows; ++i) {
        var columns = [];
        for (var j=0; j<numcols; ++j) {
            columns[j] = initial;
        }
        arr3[i] = columns;
    }
    return arr3;
}

var nums8 = Array.matrix(5,5,0);
console.log(nums8[1][1]);
var names1 = Array.matrix(3,3,"");
names1[1][2] = "Samuel";
console.log(names1[1][2]);

        /* Processing Two Dimensional Array Elements */
var grades1 = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
var total = 0;
var average = 0.0;
for (var row=0; row<grades1.length; ++row) {
    for (var col=0; col<grades1[row].length; ++col) {
        total += grades1[row][col];
    }
    average = total / grades1[row].length;
    console.log("Student " + parseInt(row+1) + " average: " + average.toFixed(2));
    total = 0;
    average = 0.0;
}

total = 0;
average = 0.0;
for (var col=0; col<grades1.length; ++col) {
    for (var row=0; row<grades1[col].length; ++row) {
        total += grades1[row][col];
    }
    average = total / grades1[col].length;
    console.log("Test " + parseInt(col+1) + " average: " + average.toFixed(2));
    total = 0;
    average = 0.0;
}

        /* Jagged Arrays 
        * that means the arrays don't have same size!
        */
var grades2 = [[89, 77],[76, 82, 81],[91, 94, 89, 99]];
total = 0;
average = 0.0;
for (var row=0; row<grades2.length; ++row) {
    for (var col=0; col<grades2[row].length; ++col) {
        total += grades2[row][col];
    }
    average = total / grades2[row].length;
    console.log("Student " + parseInt(row+1) + " average: " + average.toFixed(2));
    total = 0;
    average = 0.0;
}

/*********************
 * Arrays of Objects
 *********************/

function Point(x,y) {
    this.x = x;
    this.y = y;
}

function displayPts(arr) {
    for (var i=0; i<arr.length; ++i) {
        console.log(arr[i].x + ", " + arr[i].y);
    }
}

var p1 = new Point(1,2);
var p2 = new Point(3,5);
var p3 = new Point(2,8);
var p4 = new Point(4,4);
var points = [p1,p2,p3,p4];
for (var i=0; i<points.length; ++i) {
    console.log("Point " + parseInt(i+1) + ": " + points[i].x + ", " + points[i].y);
}
var p5 = new Point(12,-3);
points.push(p5);
console.log("After push: ");
displayPts(points);
points.shift();
console.log("After shift: ");
displayPts(points);

/*********************
 * Arrays in Objects
 *********************/

function weekTemps() {
    this.dataStore = [];
    this.add1 = add1;
    this.average1 = average1;
}

function add1(temp) {
    this.dataStore.push(temp);
}

function average1() {
    var total = 0;
    for (var i=0; i<this.dataStore.length; ++i) {
        total += this.dataStore[i];
    }
    return total / this.dataStore.length;
}

var thisWeek = new weekTemps();
thisWeek.add1(52);
thisWeek.add1(55);
thisWeek.add1(61);
thisWeek.add1(65);
thisWeek.add1(55);
thisWeek.add1(50);
thisWeek.add1(52);
thisWeek.add1(49);
console.log(thisWeek.average1().toFixed(2));