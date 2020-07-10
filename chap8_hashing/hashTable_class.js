function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.newPut = newPut;
    this.get = get;
}
// Choosing a Hash Fucntion
function simpleHash(data) {
    var total = 0;
    for (var i=0; i<data.length; ++i) {
        total += data.charCodeAt(i);
    }
    console.log("Hash value: " + data + " -> " + total);
    return total % this.table.length;
}
// Attention : A find a problem of the collision.

function put(data) {
    //var pos = this.simpleHash(data);
    var pos = this.betterHash(data);
    this.table[pos] = data;
}

function showDistro() {
    var n=0;
    for (var i=0; i<this.table.length; ++i) {
        if (this.table[i] != undefined) {
            console.log(i + ": " + this.table[i]);
        }
    }
}

// A better Hash Function
function betterHash(string) {
    var H = 31;
    var total = 0;
    for (var i=0; i<string.length; ++i) {
        total += H * total + string.charCodeAt(i);
    }
    total %= this.table.length;
    if (total < 0) {
        total += this.table.length - 1;
    }
    return parseInt(total);
}

var someNames = ["Samuel", "Exoussia", "Kueta", "Kemit", "Osiris", 
                "Isis", "Maat", "Hotep", "Menes"];
var hTable = new HashTable();
for (var i=0; i<someNames.length; ++i) {
    hTable.put(someNames[i]);
}
hTable.showDistro();


// Hashing Integer Keys
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}
function genStuData(arr) {
    for (var i=0; i<arr.length; ++i) {
        var num = "";
        for (var j=1; j<=9; ++j) {
            num += Math.floor(Math.random() * 10);
        }
        num += getRandomInt(50, 100);
        arr[i] = num;
    }
}

var numStudents = 10;
var arrSize = 97;
var idLen = 9;
var students = new Array(numStudents);
genStuData(students);
console.log("\nStudent data: \n");
for (var i=0; i<students.length; ++i) {
    console.log(students[i].substring(0,8) + " " + 
                students[i].substring(9));
}
console.log("\n\nData distribution: \n");
var hTable2 = new HashTable();
for (var i=0; i<students.length; ++i) {
    hTable2.put(students[i]);
}
hTable2.showDistro();

// Storing and Retrieving Data in a Hash Table
function newPut(key, data) {
/*To do this, we have to modify the put() function so that it accepts both 
a key and data, hashes the key, and then uses that information to store the 
data in the table */
    var pos = this.betterHash(key);
    this.table[pos] = data;
}
function get(key) {
    return this.table[this.betterHash(key)];
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var pnumbers = new HashTable();
var name, number;

// for (var i=0; i<3; ++i) {
//     readline.question("line", enterName => {
//         name = enterName;
//         console.log(name);
//         return readline.close();
//     });  
//     // readline.on("Enter a number: ", enterNumber => {
//     //     number = enterNumber;
//     //     console.log(number);
//     //     readline.close();
//     // });  
// }


/**
 * Handling Collisions
 */
