/******************************
 * A List Class Implementation
 ******************************/

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.previous = previous;
    this.next = next;
    this.hasPrevious = hasPrevious;
    this.hasNext = hasNext;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    for (var i=0; i<this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt,1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos+1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

function contains(element) {
    for (var i=0; i<this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

        /* Trvaversing a List */
function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize-1;
}

function previous() {
    return this.dataStore[--this.pos];
}

function next() {
    return this.dataStore[this.pos++];
}

function hasNext() {
    if (this.pos > this.listSize-1) {
        return false;
    }
    else {
        return true;
    }
}

function hasPrevious() {
    if (this.pos <= 0) {
        return false;
    }
    else {
        return true;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

// short test program 
var names = new List();
names.append("Kimia");
names.append("Victoria");
names.append("Kimpa");
names.append("Agape");
names.append("Marie");
names.append("Exoussia");
console.log(names.toString());
names.remove("Victoria");
console.log(names.toString());
names.insert("Tumba", "Kimpa");
console.log(names.toString());

names.front();
console.log(names.getElement());

console.log(names.next());
console.log(names.next());
names.next();
names.previous();
console.log(names.previous());

// Iterating through a List
for(names.front(); names.hasNext();) {
    console.log(names.next());
}

// We can also traverse a list backward using an iterator. Here is the code:
for (names.end(); names.hasPrevious();) {
    console.log(names.previous());
}


/****************************
 * A List-Based Application
 ****************************/

//var movies = read("file.txt").split("\n");

var fs = require("fs");
function createArr(file) {
    var arr = fs.readFileSync(file).toString().split("\n");
    for (var i=0; i<arr.length; ++i) {
        arr[i] = arr[i].trim();
    }
    return arr;
}

function displayList(list) {
    for (list.front(); list.hasNext();) {
        var listItem = list.next();
        if (listItem instanceof Customer) {
            console.log(listItem.name + ", " + listItem.movie);
        }
        else {
            console.log(listItem);
        }
    }
}

function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}

function checkOut(name, movie, movieList, customerList) {
    if (movieList.contains(movie)) {
        var c = new Customer(name, movie);
        customerList.append(c);
        movieList.remove(movie);
    }
    else {
        console.log(movie + " is not available.");
    }
}

// Test the checkOut() function
var movies = createArr("films.txt");
console.log(movies.length);
var movieList = new List();
var customers = new List();
for (var i=0; i<movies.length; ++i) {
    movieList.append(movies[i]);
}
console.log("Available movies: \n");
//displayList(movieList);

checkOut("Kimia Agape", "The Godfather", movieList, customers);
console.log("\nCustomer Rentals: \n");
displayList(customers);
console.log("###############")
displayList(movieList);