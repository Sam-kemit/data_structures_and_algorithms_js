/**
 * 1. Write a program that takes a set of names and phone numbers from a text file and
 * stores them in a Dictionary object. Include in your program the ability to display
 * one phone number, display all phone numbers, add new phone numbers, remove
 * phone numbers, and clear out the list of numbers.
 */
function Dictionary() {
    this.dataStore = {};
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showOne = showOne;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

function add(key, value) {
    this.dataStore[key] = value;
}

function find(key) {
    return this.dataStore[key];
}

function remove(key) {
    delete this.dataStore[key];
}

function showOne(item) {
    var key = Object.keys(this.dataStore);
    key.sort();
    console.log(key[item] + " -> " + this.dataStore[key[item]]);
}

function showAll() {
    var keys = Object.keys(this.dataStore);
    keys.sort();
    for (var i=0; i<keys.length; ++i) {
        console.log(keys[i] + " -> " + this.dataStore[keys[i]]);
    }
}

// Auxilliary Functions for the Dictionary Class
function count() {
    var n=0; 
    for (var key in this.dataStore) {
        ++n;
    }
    return n;
}

function clear() {
    for (var key in this.dataStore) {
        delete this.dataStore[key];
    }
}

var fs = require('fs');

function insertDataFromFile(file, dictionary) {
    var buffer = fs.readFileSync(file, {encoding:'utf-8'})
                .toString()
                .split("\n");
    console.log(buffer);
    for (entry of buffer) {
        entry = entry.split(' ');
        entry[0] != '' ? dictionary.add(entry[0],entry[1]) : null
        console.log(entry);
    }
}

var pbook = new Dictionary();
insertDataFromFile('dictionaries.txt',pbook);
console.log(pbook.showAll());
console.log(pbook.showOne(1));

pbook.add("Osiris", "965872");
console.log(pbook.showAll());

pbook.remove("Vicky");
console.log(pbook.showAll());

console.log(pbook.clear());

/**
 * 2. Using the Dictionary class, write a program that stores the number of occurrences
 * of words in a text. Your program should display each word in a text just once as
 * well as the number of times the word occurs in the text. For example, given the text
 * “the brown fox jumped over the blue fox,” the output will be:
 *   the: 2
 *   brown: 1
 *   fox: 2
 *   jumped: 1
 *   over: 1
 *   blue: 1
 */

function wordCount(text) {
    var storage = new Dictionary();
    for (var word of text.toLowerCase().split(' ')) {
        if (!storage.find(word)) {
            storage.add(word,1);
        }
        else {
            storage.dataStore[word] += 1;
        }
    }
    return storage.showAll();
}
console.log(wordCount("the brown fox jumped over the blue fox"));

/**
 * 3. Rewrite exercise 2 so that it displays the words in sorted order.
 */
function wordCountSortByOccurance(text) {
    var storage = new Dictionary();
    for (var word of text.toLowerCase().split(' ')) {
        if (!storage.find(word)) {
            storage.add(word,1);
        } 
        else {
            storage.dataStore[word] += 1;
        }
    }
    // sort
    var sorted = () => {
        var vault = [];
        for (var occ of Object.keys(storage.dataStore)) {
            vault.push(occ + ' ' + storage.dataStore[occ]);
        }
        return vault
        .sort((a,b) => Number.parseInt(a.split(' ')[1]) < Number.parseInt(b.split(' ')[1]))
        .join('\n')
        .replace(/ /g,':');
    }
    return sorted();
}
console.log(wordCountSortByOccurance("the brown fox jumped over the blue fox"));