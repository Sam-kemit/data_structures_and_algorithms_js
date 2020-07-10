function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.show = show;
    this.contains = contains;
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

var names = new Set();
names.add("Exoussia");
names.add("Kimia");
names.add("Kueta");
names.add("Kemit");
names.add("Osiris");
names.add("Nzambi");
names.add("Nkosi");
if (names.add("Kemit")) {
    console.log("Kemit added");
}
else {
    console.log("Can't add Kemit, must already be in set.");
}
console.log(names.show().join());
var remove = "Kemit";
if (names.remove(remove)) {
    console.log(remove + " removed.");
}
else {
    console.log(remove + " not removed.");
}
names.add("Isis");
console.log(names.show().join());
remove = "Maat";
if (names.remove(remove)) {
    console.log(remove + " removed.");
}
else {
    console.log(remove + " not removed.");
}

// Computing the union of two sets
var names2 = new Set();
names2.add("Kimia");
names2.add("Kimpa");
names2.add("Vicky");
names2.add("Exoussia");
// Computing the intersection of two sets
var un = new Set();
un = names.union(names2);
console.log(un.show().join());
var inter = names.intersect(names2);
console.log(inter.show().join());
// Computing the subset of two sets
if (names2.subset(names)) {
    console.log("Names2 is a subset of Names.");
}
else {
    console.log("Names2 is not a subset of Names.");
}
// Computing the difference of two sets
var diff = new Set();
diff = names.difference(names2);
console.log("[" + names.show() + "] difference [" + names2.show()
            + "] -> [" + diff.show() + "]");
