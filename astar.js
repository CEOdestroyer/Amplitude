function AStart(openSet, closedSet, alg){

    if (openSet.length > 0) {
      // Best next option
      var winner = 0;
      for (var i = 0; i < openSet.length; i++) {
        if (openSet[i].f < openSet[winner].f) {
          winner = i;
        }
      }
      var current = openSet[winner];
  
      // Did I finish?
      if (current === end) {
        noLoop();
        createP('Chegou ao destino!');
      }
  
      // Remove the current array position
      removeFromArray(openSet, current);
      //add this to closed set
      closedSet.push(current);
  
      // Check all the neighbors
      var neighbors = current.neighbors;
      for (var i = 0; i < neighbors.length; i++) {
        var neighbor = neighbors[i];
  
        // Valid next spot?
        if (!closedSet.includes(neighbor) && !neighbor.wall) {
          var tempG = current.g + heuristic(neighbor, current);
  
          // Is this a better path than before?
          var newPath = false;
          if (openSet.includes(neighbor)) {
            if (tempG < neighbor.g) {
              neighbor.g = tempG;
              newPath = true;
            }
          } else {
            neighbor.g = tempG;
            newPath = true;
            openSet.push(neighbor);
          }
  
          // Yes, it's a better path
          if (newPath) {
            neighbor.h = heuristic(neighbor, end);
            if(alg === 1) {
              //aStart
              neighbor.f = neighbor.g + neighbor.h;
            } if(alg === 2) {
              //greedy
              neighbor.f = neighbor.h;
            } if (alg === 3) {
              //custo uniforme
              neighbor.f = neighbor.g;
            }
                   
            neighbor.previous = current;
            
          }
        }
      }
      // Uh oh, no solution
    } else {
      console.log('no solution');
      noLoop();
      return;
    }
    
    for (var i = 0; i < cols; i++) {
      for (var j = 0; j < rows; j++) {
        grid[i][j].show();
        
      }
    }
  
    path = [];
    var temp = current;
    path.push(temp);
    while (temp.previous) {
      path.push(temp.previous);
      temp = temp.previous;
    }
}