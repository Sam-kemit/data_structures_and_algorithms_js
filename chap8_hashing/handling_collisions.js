function HashTable() {
    this.table = new Array(137);
    this.values = [];
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.newPut = newPut;
    this.get = get;
    this.buildChains = buildChains;
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
    var key = this.betterHash(data);
    var index = 0;
    if (this.table[key][index] == undefined) {
        this.table[key][index] = data;
    }
    else {
        while (this.table[key][index] !== undefined) {
            ++index;
        }
        this.table[key][index] = data;
    }
}
function showDistro() {
    var n=0;
    for (var i=0; i<this.table.length; ++i) {
        if (this.table[i][0] != undefined) {
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
// Storing and Retrieving Data in a Hash Table
function newPut(key, data) {
        var pos = this.betterHash(key);
        this.table[pos] = data;
}
function get(key) {
    var index = 0;
    var pos = this.betterHash(key);
    if (this.table[pos][index] == key) {
        return this.table[pos][index+1];
    }
    else {
        while (this.table[pos][index] != key) {
            index += 2;
        }
        return this.table[pos][index+1];
    }
    return undefined;
}

/**
 * Separate Chaining
 */
function buildChains() {
    for (var i=0; i<this.table.length; ++i) {
        this.table[i] = [];
    }
}

var hTable = new HashTable();
hTable.buildChains();
var someNames = ["Samuel", "Exoussia", "Kueta", "Kemit", "Osiris", 
                "Isis", "Maat", "Hotep", "Menes"];
for (var i=0; i<someNames.length; ++i) {
    hTable.put(someNames[i]);
}
for (var i=0; i<someNames.length; ++i) {
    hTable.put(someNames[i]);
}
hTable.showDistro();

/**
 * Linear Proibing
 */
function put2(key, data) {
    var pos = this.betterHash(key);
    if (this.table[pos] == undefined) {
        this.table[pos] = key;
        this.values[pos] = data;
    }
    else {
        while (this.table[pos] != undefined) {
            pos++;
        }
        this.table[pos] = key;
        this.values[pos] = data;
    }
}
function get2(key) {
    var hash = -1;
    hash = this.betterHash(key);
    if (hash > -1) {
        for (var i=hash; this.table[hash] !== undefined; i++) {
            if (this.table[hash] == key) {
                return this.values[hash];
            }
        }
    }
    return undefined;
}