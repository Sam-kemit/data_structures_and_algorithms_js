/***************
 * Exercices 
 ***************/

/**
 * 1. Write a function that inserts an element into a list only if the element to be inserted
 * is larger than any of the elements currently in the list. Larger can mean either greater
 * than when working with numeric values, or further down in the alphabet, when
 * working with textual values.
 */

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.insertBigger = insertBigger;
    this.insertSmaller = insertSmaller;
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
    if (insert > -1) {
        this.dataStore.splice(insertPos+1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

// function insert bigger
function insertBigger(list, element) {
    for (list.front(); list.hasNext();) {
        var listItem = list.next();
        if (element > listItem) {
            list.append(element);
            break;
        }
    }
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

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize-1;
}

function previous() {
    return this.dataStore[--this.pos];
}

function hasPrevious() {
    if (this.pos <= 0) {
        return false;
    }
    else {
        return true;
    }
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

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

/**
 * 2. Write a function that inserts an element into a list only if the element to be inserted
 * is smaller than any of the elements currently in the list.
 */


function insertSmaller(list, element) {
    for (list.front(); list.hasNext();) {
        var listItem = list.next();
        if (element < listItem) {
            list.append(element);
            break;
        }
    }
}

var values = new List();
values.append(2);
values.append(3);
values.append(4);
values.append(6);
console.log(values.toString());
console.log("########## Exercice 1 ##########");
insertBigger(values, 10);
console.log(values.toString());

insertBigger(values, 1);
console.log(values.toString());
console.log("########## Exercice 2 ##########");
insertSmaller(values, 5);
console.log(values.toString());

/**
 * 3. Create a Person class that stores a person’s name and their gender. Create a list of
 * at least 10 Person objects. Write a function that displays all the people in the list of
 * the same gender.
 */
console.log("########## Exercice 3 ##########");

function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

function displayPeopleSameGender(list, gender) {
    for (list.front(); list.hasNext();) {
        var listItem = list.next();
        if (listItem instanceof Person) {
            if (listItem.gender == gender) {
                console.log(listItem.name);
            }
        }
    }
}

var listsPersons = new List();

var p1 = new Person("Samuel", "M");
var p2 = new Person("Victoria", "F");
var p3 = new Person("Kimpa", "F");
var p4 = new Person("Obed", "M");
var p5 = new Person("Japhet", "M");
var p6 = new Person("Kimia", "F");
var p7 = new Person("Elizeth", "F");
var p8 = new Person("Carla", "F");
var p9 = new Person("Agape", "F");
var p10 = new Person("Exoussia", "M");

listsPersons.append(p1);
listsPersons.append(p2);
listsPersons.append(p3);
listsPersons.append(p4);
listsPersons.append(p5);
listsPersons.append(p6);
listsPersons.append(p7);
listsPersons.append(p8);
listsPersons.append(p9);
listsPersons.append(p10);

//console.log(listsPersons.toString());
displayPeopleSameGender(listsPersons, "F");

/**
 * 4. Modify the video-rental kiosk program so that when a movie is checked out it is
 * added to a list of rented movies. Display this list whenever a customer checks out
 * a movie.
 */
console.log("########## Exercice 4 ##########");

var fs = require("fs");
const { throws } = require("assert");
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

function checkOut(name, movie, movieList, movieRentedList, customerList) {
    if (movieList.contains(movie)) {
        var c = new Customer(name, movie)
        movieRentedList.append(c.movie);
        customerList.append(c);
        movieList.remove(movie);
    }
    else {
        console.log(movie + " is not available.");
    }
}

var movies = createArr("films.txt");
var movieList = new List();
var movieRentedList = new List();
var customerList = new List();

for (var i=0; i<movies.length; ++i) {
    movieList.append(movies[i]);
}
console.log("Available movies: \n");
displayList(movieList);
checkOut("Samuel KUETA", "The Matrix", movieList, movieRentedList, customerList);
checkOut("Victoria MOUSTIN", "The Dark Knight", movieList, movieRentedList, customerList);
console.log("\n Customer Rentals: ");
displayList(customerList);
console.log("List of rented movies: ");
displayList(movieRentedList);

/**
 * 5. Create a check-in function for the video-rental kiosk program so that a returned
 * movies is deleted from the rented movies list and is added back to the available
 * movies list.
 */
console.log("########## Exercice 5 ##########");

function checkIn(name, movie, movieList, movieRentedList, customerList) {
    if (!movieList.contains(movie)) {
        var c = new Customer(name, movie);
        movieRentedList.remove(c.movie);
        customerList.remove(c);
        movieList.append(c.movie);
    }
    else {
        console.log(movie + " is available.");
    }
}

checkIn("Samuel KUETA", "The Matrix", movieList, movieRentedList, customerList);
console.log("List of rented movies: ");
displayList(movieRentedList);