// An object to describe a spot in the grid
function Spot(i, j) {
    // Location
    this.i = i;
    this.j = j;
  
    // Neighbors
    this.neighbors = [];
  
    // Where did I come from?
    this.previous = undefined;

    this.searched = false;
    // Am I a wall?
    this.wall = false;
    if (random(1) < 0) {
      this.wall = true;
    }

    if (i==0  && (
        j==1 || j==2 || j==3 || j==4 || j==5 || j==6 ||
        j==7 || j==8 || j==9 || j==10 || j==11 || j==12 || j==13 
      )) {
      this.wall = true
    }
    if (i==1  && (
      j==1 || j==2 || j==3 || j==4 || j==5 || j==6 ||
      j==7 || j==8 || j==10 || j==11 || j==12 || j==13 
    )) {
    this.wall = true
    }
    if (i==2 && j==13) {
      this.wall = true;
    }
    if (i==3  && (
      j==1 || j==6 ||
      j==7 || j==10 || j==11 || j==12 || j==13 
    )) {
    this.wall = true
    }

    if (i==4  && (
      j==1 || j==7 || j==8 || j==11 || j==12 || j==13 
    )) {
    this.wall = true
    }
    if (i==5  && (
     j==0 ||j==3 ||  j==9 || j==11 || j==12 
    )) {
    this.wall = true
    }

    if (i==6  && (
      j==0 ||j==1 || j==2 || j==4 || j==5 || j==9 || j==10 || j>12
     )) {
     this.wall = true
     }

     if (i==7  && (
      j==2 || j==3||j==5 || j==6  || j==10 || j==17
     )) {
     this.wall = true
     }


    if (i==8  && (
     j==3 || j==4|| j==11 || j==12 || j==16
    )) {
    this.wall = true
    }

    if (i==9  && (
      j ==0 || j== 1 || j==2 ||j==4  || j==6 || j==7|| j==13
      )) {
      this.wall = true
    }

    if (i==10  && (
      j==0 ||  j==1 || j==2 || j==6 ||j==7 || j==8 || j==13 ||j>15
    )) {
    this.wall = true
    }

    if (i==11  && (
      j==0 ||  j==1 || j==2||
      j==4|| 
      j==6 ||j==7 || j==8 || j==9 || j==15
    )) {
    this.wall = true
    }

    if (i==12  && (
      j==0 ||  j==1 || j==2 || j==4 ||j==8 || j==9 || j==10 || j==15
    )) {
    this.wall = true
    }

    if (i==13  && (
      j==0 ||  j==1 || j==2 || j==4 ||j==8 || j==9 ||
      j==10 || j==11 || j==16 || j==17
    )) {
    this.wall = true
    }

    if (i==14  && (
      j==0 ||  j==1 || j==2 || j==10|| j==12 ||
      j==10 || j==11
    )) {
    this.wall = true
    }

    if (i==15  && (
      j==0 || j==1 || j==2 || j==3 || j==4 || 
      j==5 || j==6   
    )) {
    this.wall = true
    }

    if (i==16  && (
      j==0 || j==1 || j==2 || j==3 || j==4 || 
      j==5 || j==6 || j==7 || j==8 || j==9 ||
      j==10 || j==11 || j==12 || j==14 || j== 15
    )) {
    this.wall = true
    }

    if (i==17  && (
      j==0 || j==1 || j==2 || j==3 || j==4 || 
      j==5 || j==6 || j==7 || j==8 || j==9 ||
      j==10 || j==11 || j==12 || j==14 || j== 15 ||
      j==16 || j==17
    )) {
    this.wall = true
    }

    // Display me
    this.show = function(col) {
      
      if (this.wall) {
        fill(0);
        noStroke();
        ellipse(this.i * w + w / 2, this.j * h + h / 2, w / 2, h / 2);
      } else if (col) {
        fill(col);
        rect(this.i * w, this.j * h, w, h);
      }
      
    };
  
    // Figure out who my neighbors are
    this.addNeighbors = function(grid) {
      var i = this.i;
      var j = this.j;
      if (i < cols - 1) {
        this.neighbors.push(grid[i + 1][j]);
      }
      if (i > 0) {
        this.neighbors.push(grid[i - 1][j]);
      }
      if (j < rows - 1) {
        this.neighbors.push(grid[i][j + 1]);
      }
      if (j > 0) {
        this.neighbors.push(grid[i][j - 1]);
      }
      if (i > 0 && j > 0) {
        this.neighbors.push(grid[i - 1][j - 1]);
      }
      if (i < cols - 1 && j > 0) {
        this.neighbors.push(grid[i + 1][j - 1]);
      }
      if (i > 0 && j < rows - 1) {
        this.neighbors.push(grid[i - 1][j + 1]);
      }
      if (i < cols - 1 && j < rows - 1) {
        this.neighbors.push(grid[i + 1][j + 1]);
      }
    };
  }
  