/**
 * 1. Modify the Queue class to create a Deque class. A deque is a queue-like structure
 * that allows elements to be added and removed from both the front and the back of
 * the list. Test your class in a program.
 */

const { readFile } = require('fs');

function Deque() {
    this.dataStore = [];
    this.enqueueFromFront = enqueueFromFront;
    this.enqueueFromBack = enqueueFromBack;
    this.dequeueFromFront = dequeueFromFront;
    this.dequeueFromBack = dequeueFromBack;
    this.front = front;
    this.back = back;
    this.isEmpty = isEmpty;
}

function enqueueFromFront(element) {
    this.dataStore.unshift(element);
}

function dequeueFromFront() {
    return this.dataStore.shift();
}

function enqueueFromBack(element) {
    return this.dataStore.push(element);
}

function dequeueFromBack() {
    return this.dataStore.pop();
}

function front () {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length-1];
}

function length() {
    return this.dataStore.length;
}

function isEmpty() {
    return this.dataStore.length === 0;
}

// test program

var deque = new Deque();

deque.enqueueFromFront(2);
deque.enqueueFromFront(1);
deque.enqueueFromBack(0);
deque.enqueueFromBack(5);

console.log(deque.dequeueFromBack());
console.log(deque.dequeueFromFront());
console.log(deque.front());
console.log(deque.back());

/**
 * 2. Use the Deque class you created in Example 5-1 to determine if a given word is a 
 * palindrome.
 */
function isPalindrome(word) {
    var dq = new Deque();
    for (var i=0; i<word.length; ++i) {
        dq.enqueueFromFront(word[i]);
    }
    var front, back;
    var isPalindrome = true
    while(!dq.isEmpty()) {
        front = dq.dequeueFromFront();
        back = dq.dequeueFromBack();

        if (back && front !== back) {
            isPalindrome = false;
        }
    }
    return isPalindrome;
}

var word = "adada";
console.log(isPalindrome(word));

/**
 * 3. Modify the priority queue example from Example 5-5 so that the higher-priority
 * elements have higher numbers rather than lower numbers. Test your implementa‐
 * tion with the example in the chapter.
 */
function PriorityQ() {
    this.dataStoreP = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.toString = toString;
}
function Patient(name, code) {
    this.name = name;
    this.code = code;
}

function enqueue(element) {
    this.dataStoreP.push(element);
}
function dequeue() {
    // var entry = 0;
    // for (var i=0; this.dataStoreP.lengthP; ++i) {
    //     if (this.dataStoreP[i].code > this.dataStoreP[entry].code) {
    //         entry = i;
    //     }
    // }
    // return this.dataStoreP.splice(entry, 1);

    return this.dataStoreP.splice(this.dataStoreP.map(a => a.code).indexOf(Math.max.apply(null, this.dataStoreP.map(a => a.code))), 1)
}

function toString() {
    var retStr = "";
    for (var i=0; i<this.dataStoreP.length; ++i) {
        retStr += this.dataStoreP[i].name + " code: " +
                this.dataStoreP[i].code + "\n";
    }
    return retStr;
}

var dq = new PriorityQ();
var p = new Patient('Samuel', 8);
dq.enqueue(p);
p = new Patient('Exoussia', 12)
dq.enqueue(p);
p = new Patient('Kueta', 5);
dq.enqueue(p);

console.log(dq.toString());

// first round
seen = dq.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(dq.toString());

// second round
seen = dq.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(dq.toString());

// third round 
seen = dq.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(dq.toString());


/**
 * 4. Modify the ED example (Example 5-5) so the user can control the activity in the
 * ED. Create a menu system that allows the user to choose from the following activ‐
 * ities:
 * a. Patient enters ED.
 * b. Patient is seen by doctor.
 * c. Display list of patients waiting to be seen.
 */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var pq = new PriorityQ();

console.log(`ED ACTIVITY PROGRAM\n
        a) Patient enters ED.\n
        b) Patient is seen by doctor.\n
        c) Display list of patients waiting to be seen.\n
        e) Exit.`);

var seen = [];
readline.question("line", line => {
    switch (line) {
        // queue event
        case "a": {
            console.log('Enter name and code');
            console.log(readFile._prompt)
            readline.once('line', li => {
                var lsplit = li.split(' ');
                if (Number.isNaN(lsplit[1])){'Wrong entry'}
                else {
                    pq.enqueue(new Patient(lsplit[0], lsplit[1]))
                }
                console.log(pq.dataStoreP[pq.dataStoreP.length-1]);
            })
            break;
        }
        // dequeue event
        case "b": {
            seen.push(pq.dequeue());
            console.log(seen[seen.length-1]);
            break;
        }
        // waiting list event
        case "c": {
            for (pat of seen) {
                console.log(pat);
            }
            break;
        }
        // quit event
        case "e": 
            process.exit(0);
            break;
    }

    readline.close();
});