function Graph(v) {
    this.vertices = v;
    this.vertexList = [];
    this.edges = 0;
    this.adj = [];
    for (var i=0; i<this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.showGraph2 = showGraph2;
    this.marked = [];
    for (var i=0; i<this.vertices; ++i) {
        this.marked[i] = false;
    }
    this.dfs = dfs;
    this.bfs = bfs;
    this.edgeTo = [];
    this.pathTo = pathTo;
    this.hasPathTo = hasPathTo;
    this.showPathTo = showPathTo;
    this.topSortHelper = topSortHelper;
    this.topSort = topSort;
}

function addEdge(v,w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for (var i=0; i<this.vertices; ++i) {
        console.log(i + " -> ");
        for (var j=0; j<this.vertices; ++j) {
            if (this.adj[i][j] != undefined) {
                console.log(this.adj[i][j] + " ");
            }
        }
        console.log();
    }
}
// a new function to display symbolic names instead of numbers
function showGraph2() {
    for (var i=0; i<this.vertices; ++i) {
        console.log(this.vertexList[i] + " -> ");
        for (var j=0; j<this.vertices; ++j) {
            if (this.adj[i][j] !== undefined) {
                var w = this.adj[i][j];
                console.log(this.vertexList[w] + " ");
            }
        }
        console.log();
    }
}


// depth-first search function
function dfs(v) {
    this.marked[v] = true;
    // if statement for print is not required
    if (this.adj[v] !== undefined) {
        console.log("Visisted vertex: " + v);
    }
    for (var i in this.adj[v]) {
        var w = this.adj[v][i];
        if (!this.marked[w])
            this.dfs(w);
    }
}

// breadth first serach
function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s); // add to back of queue
    while (queue.length > 0) {
        var v = queue.shift(); // remove from front of queue
        if (v !== undefined) {
            console.log("Visited vertex: " + v);
        }
        for (var i in this.adj[v]) {
            var w = this.adj[v][i];
            if (!this.marked[w]) {
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
}

function pathTo(source, v) {
    if (!this.hasPathTo(v)) {
        return undefined;
    }
    var path = [];
    for (var i=v; i!=source; i=this.edgeTo[i]) {
        path.push(i);
    }
    path.push(source);
    return path;
}

function hasPathTo(v) {
    return this.marked[v];
}

function showPathTo(paths) {
    while (paths.length > 0) {
        if (paths.length > 1) {
            console.log(paths.pop() + '-');
        }
        else {
            console.log(paths.pop());
        }
    }
}

// Implementing the Topological Sorting Algorithm
function topSort() {
    var stack = [];
    var visited = [];
    for (var i=0; i<this.vertices; ++i) {
        visited[i] = false;
    }
    for (var i=0; i<this.vertices; ++i) {
        if (!visited[i]) {
            this.topSortHelper(i, visited, stack);
        }
    }
    for (var i=0; i<stack.length; ++i) {
        if (stack[i] !== undefined && stack[i] !== false) {
            console.log(this.vertexList[vertex[i]]);
        }
    }
}

function topSortHelper(v, visited, stack) {
    visited[v] = true;
    for (var i=0; i<this.adj[v]; ++i) {
        w = this.adj[v][i];
        if (!visited[w]) {
            this.topSortHelper(visited[w], visited, stack);
        }
    }
    stack.push(v);
}

var g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();

//g.dfs(0);
g.bfs(0);

// finding the shortest path for a vertex
var vertex = 4;
var source = 0;
var paths = g.pathTo(source,vertex);
g.showPathTo(paths);


// test topological sorting
var z = new Graph(6);
z.addEdge(1,2);
z.addEdge(2,5);
z.addEdge(1,3);
z.addEdge(1,4);
z.addEdge(0,1);
z.vertexList = ["CS1", "CS2", "Data Structures", "Assembly Language", "Operating Systems", "Algorithms"];
z.showGraph2();
console.log();
z.topSort();
