/**
 * Queue Operations :
 * inserting -> enqueue
 * removing -> dequeue
 * viewing -> peek
 */

 /**
  * An Array-Based Queue Class Implementation
  * push()
  * shift()
  */

function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.dequeueP = dequeueP;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.count = count;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}

function front () {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length-1];
}

function toString() {
    var retStr = "";
    for (var i=0; i<this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty() {
    if (this.dataStore.length === 0) {
        return true;
    }
    else {
        return false;
    }
}

function count() {
    return this.dataStore.length;
}

// Test program
var q = new Queue();
q.enqueue("Victoria");
q.enqueue("Kimpa");
q.enqueue("Kimia");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());

/**
 * Using the Queue Class: Assigning Partners at a Square Dance
 */
function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

var fs = require("fs");
function getDancers(males, females) {
    var names = fs.readFileSync("dancers.txt").toString().split("\n");
    for (var i=0; i<names.length; ++i) {
        names[i] = names[i].trim();
    }
    for (var i=0; i<names.length; ++i) {
        var dancer = names[i].split(" ");
        var sex = dancer[0];
        var name = dancer[1];
        if (sex == "F") {
            females.enqueue(new Dancer(name, sex));
        }
        else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}

function dance(males, females) {
    console.log("The dance partners are: \n");
    while(!females.empty() && !males.empty()) {
        person = females.dequeue();
        console.log("Female dancer is: " + person.name);
        person = males.dequeue();
        console.log(" and the male dancer is: " + person.name);
    }
    console.log();
}

// test program
var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (!femaleDancers.empty()) {
    console.log(femaleDancers.front().name + " is waiting to dance.");
}
if (!maleDancers.empty()) {
    console.log(maleDancers.front().name + " is waiting to dance.");
}

// Providing a count of dancers waiting to dance
if (maleDancers.count() > 0) {
    console.log("There are " + maleDancers.count() + 
    " male dancers waiting to dance.");
}
if (femaleDancers.count() > 0) {
    console.log("There are " + femaleDancers.count() + 
    " female dancers waiting to dance.");
}

/**
 * Sorting Data with Queues
 * radix sort
 */

function distribute(nums, queues, n, digit) {
    // digit represents either the 1s or 10s place
    for (var i=0; i<n; ++i) {
        if (digit == 1) {
            queues[nums[i]%10].enqueue(nums[i]);
        }
        else {
            queues[Math.floor(nums[i]/10)].enqueue(nums[i]);
        }
    }
}

function collect(queues, nums) {
    var i=0;
    for (var digit=0; digit<10; ++digit) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}

// Performing a radix sort
function dispArray(arr) {
    for (var i=0; i<10; ++i) {
        console.log(arr[i] + " ");
    }
}

// test program
var queues = [];
for (var i=0; i<10; ++i) {
    queues[i] = new Queue();
}
var nums = [];
for (var i=0; i<10; ++i) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
console.log("Before radix sort: ");
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log("\n\nAfter radix sort: ");
dispArray(nums);

/**
 * Priority Queues
 */

function Patient(name, code) {
/* The value for code will be an integer that represents the patient’s 
priority, or severity.*/
    this.name = name;
    this.code = code;
}
/**
 * Now we need to redefine the dequeue() function that removes the element 
 * in the queue with the highest priority. We will define the highest 
 * priority element as being the element with the lowest code.
 */
function dequeueP() {
    var entry = 0;
    for (var i=0; i<this.dataStore.length; ++i) {
        if (this.dataStore[i].code > this.dataStore[entry].code) {
            entry = i;
        }
    }
    return this.dataStore.splice(entry, 1);
}

function toString() {
    var retStr = "";
    for (var i=0; i<this.dataStore.length; ++i) {
        retStr += this.dataStore[i].name + " code: " +
                this.dataStore[i].code + "\n";
    }
    return retStr;
}

// test program
var ed = new Queue();
var p = new Patient("Exoussia", 5);
ed.enqueue(p);
p = new Patient("Obed", 4);
ed.enqueue(p);
p = new Patient("Japhet", 6);
ed.enqueue(p);
p = new Patient("Prisca", 1);
ed.enqueue(p);
p = new Patient("Paulo", 1);
ed.enqueue(p);

console.log(ed.toString());
// first round
seen = ed.dequeueP();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());

// second round
seen = ed.dequeueP();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());

// third round 
seen = ed.dequeueP();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());

// fourth round 
seen = ed.dequeueP();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());