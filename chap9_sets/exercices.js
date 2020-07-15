function Set() {
    this.dataStore = [];
    this.add = add;
    this.addSort = addSort;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.show = show;
    this.contains = contains;
    //this.higher = higher;
}

function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    }
    else {
        return false;
    }
}

function addSort(data) {
    this.dataStore.push(data);
    this.dataStore = this.dataStore.sort();
}

function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos,1);
        return true;
    }
    else {
        return false;
    }
}

function show() {
    return this.dataStore;
}

function contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
        return true;
    }
    else {
        return false;
    }
}

function union(set) {
    var tempSet = new Set();
    for (var i=0; i<this.dataStore.length; ++i) {
        tempSet.add(this.dataStore[i]);
    }
    for (var i=0; i<set.dataStore.length; ++i) {
        if (!tempSet.contains(set.dataStore[i])) {
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }
    return tempSet;
}

function intersect(set) {
    var tempSet = new Set();
    for (var i=0; i<this.dataStore.length; ++i) {
        if (set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

function subset(set) {
    if (this.size() > set.size()) {
        return false;
    }
    else {
        for (var member in this.dataStore) {
            if (!set.contains(member)) {
                return false;
            }
        }
    }
    return true;
}

function size() {
    return this.dataStore.length;
}

function difference(set) {
    var tempSet = new Set();
    for (var i=0; i<this.dataStore.length; ++i) {
        if (!set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

/**
 * 1. Modify the Set class so that the class stores its elements in sorted order. Write a
 * program to test your implementation.
 */
var names = new Set();
names.addSort("Kueta");
names.addSort("Exoussia");
names.addSort("Kimia");
names.addSort("Kemit");
names.addSort("Osiris");
names.addSort("Nzambi");
names.addSort("Agape");
console.log(names.show().join());

/**
 * 2. Modify the Set class so that it uses a linked list to store its elements rather than an
 * array. Write a program to test your implementation.
 */

/**
 * 3. Add the function higher(element) to the Set class. This function returns the least
 * element in the set strictly greater than the given element. Test your function in a
 * program.
 */