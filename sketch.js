// Function to delete element from the array
function removeFromArray(arr, elt) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] == elt) {
        arr.splice(i, 1);
      }
    }
  }
  
  // An educated guess of how far it is between two points
  function heuristic(a, b) {
    var d = dist(a.i, a.j, b.i, b.j);
    return d;
  }
  
  // How many columns and rows?
  var cols = 18;
  var rows = 18;
  
  // This will be the 2D array
  var grid = new Array(cols);
  
  // Open and closed set
  var openSet = [];
  var closedSet = [];
  
  // Start and end
  var start;
  var end;
  
  // Width and height of each cell of grid
  var w, h;
  
  // The road taken
  var path = [];
  let img;
  var button;
  var button2;

  let easing = 0.05;
 
  function preload() {
    img = loadImage('assets/foto_pronto.jpg');
  }



  function setup() {
    //screen

    createCanvas(500, 500)
    button = createButton("teste")
    button.mousePressed(reset)
    console.log('A*');
  
    // Grid cell size
    w = width / cols;
    h = height / rows;
  
    // Making a 2D array
    for (var i = 0; i < cols; i++) {
      grid[i] = new Array(rows);
    }
    
    for (var i = 0; i < cols; i++) {
      for (var j = 0; j < rows; j++) {
        grid[i][j] = new Spot(i, j);
      }
    }
  
    // All the neighbors
    for (var i = 0; i < cols; i++) {
      for (var j = 0; j < rows; j++) {
        grid[i][j].addNeighbors(grid);
      }
    }
    start = grid[0][0];
    end = grid[1][9];
    start.wall = false;
    
    // openSet starts with beginning only
    openSet.push(start);
  }
  
  function reset() {
    console.log(`entra`)
    // Start and end
    start = grid[0][0];
    end = grid[1][10];
    start.wall = false;
    
    // openSet starts with beginning only
    openSet.push(start);
    
  }

  function draw() {
    // Am I still searching?
    new AStart(openSet, closedSet, 1);
    // Draw current state of everything
    
    // tint(255, 127); // Display at half opacity
    // Drawing path as continuous line
    noFill(); // remove the color 
    //line color
    stroke(100, 149, 237);
    strokeWeight(w / 2);
    beginShape();
    image(img, 0, 0);
    tint(255, 126)
    for (var i = 0; i < path.length; i++) {
      vertex(path[i].i * w + w / 2, path[i].j * h + h / 2);
    }
    endShape();
  }