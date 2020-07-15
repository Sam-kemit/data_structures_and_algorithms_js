/**
 * Building a Binary Search Tree Implementation
 */ 
function Node(data, left, right) {
    this.data = data;
    this.count = 1;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
    this.remove = remove;
    this.removeNode = removeNode;
    this.getSmallest = getSmallest;
    this.update = update;
    this.genArray = genArray;
    this.prArray = prArray;
}

function insert(data) {
    var n = new Node(data, null, null);
    if (this.root === null) {
        this.root = n;
    }
    else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current === null) {
                    parent.left = n;
                    break;
                }
            }
            else {
                current = current.right;
                if (current === null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

// Traversing a Binary Search Tree
function inOrder(node) {
    if (node !== null) {
        inOrder(node.left);
        console.log(node.show() + " ");
        inOrder(node.right);
    }
}

function preOrder(node) {
    if (node !== null) {
        console.log(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node) {
    if (node !== null) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + " ");
    }
}

/**
 * BST Searches
 */

// Searching for the Minimum and Maximum Value
function getMin() {
    var current = this.root;
    while (current.left !== null) {
        current = current.left;
    }
    return current.data;
}

function getMax() {
    var current = this.root;
    while (current.right !== null) {
        current = current.right;
    }
    return current.data;
}
// Searching for a Spefic Value
function find(data) {
    var current = this.root;
    while (current && current.data != data) {
        if (data < current.data) {
            current = current.left;
        }
        else {
            current = current.right;
        }
    }
    return current;
}
// Removing Nodes from a BST
function remove(data) {
    root = removeNode(this.root, data);
}

function removeNode(node, data) {
    if (node === null) {
        return null;
    }
    if (data == node.data) {
        // node has no children
        if (node.left === null && node.right === null) {
            return null;
        }
        // node has no left child
        if (node.left === null) {
            return node.right;
        }
        // node has no right child
        if (node.right === null) {
            return node.left;
        }
        // node has two children
        var tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = this.removeNode(node.right, tempNode.data);
        return node;
    }
    else if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
    }
    else {
        node.right = this.removeNode(node.right, data);
        return node;
    }
}

function getSmallest(node) {
    if (node.left == null) {
        return node;
    }
    else {
        return getSmallest(node.left);
    }
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Inorder traversal: ");
inOrder(nums.root);

console.log("Preorder traversal: ");
preOrder(nums.root);

console.log("Postorder traversal: ");
postOrder(nums.root);

var min  = nums.getMin();
console.log("The minimum value of BST is: " + min);

var max  = nums.getMax();
console.log("The maximum value of BST is: " + max);

console.log("To search for a value: ");
var value = 5;
var found = nums.find(value);
if (found !== null) {
    console.log("Found " + value + " in the BST.");
}
else {
    console.log(value + " was not found in the BST.");
}

/**
 * Counting Occurrences
 */

function update(data) {
    var grade = this.find(data);
    grade.count++;
    return grade;
}

function prArray(arr) {
    console.log(arr[0].toString() + " ");
    for (var i=0; i<arr.length; ++i) {
        console.log(arr[i].toString() + " ");
        if (i % 10 === 0) {
            console.log("\n");
        }
    }
}

function genArray(length) {
    var arr = [];
    for (var i=0; i<length; ++i) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
}

var grades = genArray(100);
prArray(grades);
var gradedistro = new BST();
for (var i=0; i<grades.length; ++i) {
    var g = grades[i];
    var grade = gradedistro.find(g);
    if (grade === null) {
        gradedistro.insert(g);
    }
    else {
        gradedistro.update(g);
    }
}