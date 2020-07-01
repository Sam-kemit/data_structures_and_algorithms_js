/**
 * 1. Create a grades object that stores a set of student grades in an object. Provide a
function for adding a grade and a function for displaying the student’s grade average.
 */

function Grades() {
    this.studentGrades = [];
    this.add = add;
    this.displayStudent = displayStudent;
}

function add(grade) {
    this.studentGrades.push(grade);
}

function displayStudent() {
    var total = 0;
    var average = 0.0;
    for (var i=0; i<this.studentGrades.length; ++i) {
        total += this.studentGrades[i];
    }
    average = total / this.studentGrades.length;

    return average;
}

var studentgrades = new Grades();
studentgrades.add(15);
studentgrades.add(13);
studentgrades.add(12);
console.log("Student average is: " + studentgrades.displayStudent().toFixed(2));

/**
 * 2. Store a set of words in an array and display the contents both forward and backward.
 */

function Words() {
    this.words = [];
    this.addword = addword; 
}

function addword(word) {
    this.words.push(word);
}

var inputWord = new Words();
inputWord.addword("Exoussia");
inputWord.addword("Victoria");
inputWord.addword("Kimia");
console.log(inputWord.words.sort());
console.log(inputWord.words.reverse());

/**
 * 3. Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
 * data using a two-dimensional array. Create functions to display the monthly aver‐
 * age, a specific week’s average, and all the weeks’ averages.
 */

function monthTemps() {
    this.dataStorage = [];
    this.addtemp = addtemp;
    this.monthlyAverage = monthlyAverage;
    this.weekAverage = weekAverage;
    this.allWeeksAverages = allWeeksAverages;
}

function addtemp(temp) {
    this.dataStorage.push(temp);
}

function monthlyAverage() {
    var total1 = 0;
    var average1 = 0.0;
    for (var row=0; row<this.dataStorage.length; ++row) {
        for (var col=0; col<this.dataStorage[row].length; ++col) {
            total1 += this.dataStorage[row][col];
        }
        average1 = total1 / this.dataStorage[row].length;
    }
    return average1 / 4;
}

function weekAverage(index) {
    var total1 = 0;
    var average1 = 0.0;
    for (var row=0; row<this.dataStorage.length; ++row) {
        for (var col=0; col<this.dataStorage[row].length; ++col) {
            total1 += this.dataStorage[row][col];
        }
        if ((row+1) == index) {
            average1 = total1 / this.dataStorage[row].length;
            console.log("Week " +parseInt(row+1)+ " average: " +average1.toFixed(2));
            break;
        } 
        total1 = 0;
        average1 = 0.0;
    }
}

function allWeeksAverages() {
    var total1 = 0;
    var average1 = 0.0;
    for (var row=0; row<this.dataStorage.length; ++row) {
        for (var col=0; col<this.dataStorage[row].length; ++col) {
            total1 += this.dataStorage[row][col];
        }
        average1 = total1 / this.dataStorage[row].length;
        console.log("Week " +parseInt(row+1)+ " average: " +average1.toFixed(2));
        total1 = 0;
        average1 = 0.0;
    }
}

var thisMonth = new monthTemps();
thisMonth.addtemp([52,55,61]);
thisMonth.addtemp([65,55,50]);
thisMonth.addtemp([49,51,38]);
thisMonth.addtemp([27,15,25]);
console.log(thisMonth.dataStorage);
console.log(thisMonth.monthlyAverage());
console.log(thisMonth.weekAverage(2));
console.log(thisMonth.allWeeksAverages());

/**
 * 4. Create an object that stores individual letters in an array and has a function for
 * displaying the letters as a single word.
 */

function StoreLetters() {
    this.letters = [];
    this.addLetter = addLetter;
    //this.displayingLetters = displayingLetters;
}

function addLetter(letter) {
    this.letters.push(letter);
}

function displayingLetters(accumulatedString, item) {
    return accumulatedString + item;
}

var inputLetter = new StoreLetters();
inputLetter.addLetter("h");
inputLetter.addLetter("e");
inputLetter.addLetter("l");
inputLetter.addLetter("l");
inputLetter.addLetter("o");
inputLetter.addLetter("!");
console.log(inputLetter.letters);
var word1 = inputLetter.letters.reduce(displayingLetters);
console.log(word1);
