  // How many columns and rows?
  var cols = 18;
  var rows = 18;
  
  // This will be the 2D array
  var grid = new Array(cols);
  
  var path = []
  // Start and end
  var start;
  var end;
  
  // Width and height of each cell of grid
  var w, h;
  
  // The road taken
  let img;

  let easing = 0.05;
 
  function preload() {
    img = loadImage('assets/foto_pronto.jpg');
  }

  function setup() {
    //screen

    createCanvas(500, 500)
    console.log('Amplitude');
  
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
    end = grid[15][11];
    start.wall = false;
  }

  function draw() {
    // Am I still searching?
    new Amplitude();
    // Draw current state of everything
    
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