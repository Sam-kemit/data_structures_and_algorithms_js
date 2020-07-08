function Dictionary() {
    this.dataStore = {};
    this.add = add;
    this.find = find;
    this.remove = remove;
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

// Adding Sorting to the Dictionary Class


var pbook = new Dictionary();
pbook.add("Samuel", "123");
pbook.add("Exoussia", "345");
pbook.add("Kueta", "456");
pbook.add("Kemit", "678");
console.log("Number of entries: " + pbook.count());
// console.log("Exoussia's extension: " + pbook.find("Exoussia"));
//pbook.remove("Exoussia");
pbook.showAll();
//pbook.clear();
console.log("Number of entries: " + pbook.count());
