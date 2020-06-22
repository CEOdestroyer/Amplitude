function Amplitude(){
  var queue = [];
  
  start.searched = true;
  queue.push(start);
  while (queue.length > 0) {
    var current = queue.shift();  
    if (current === end) {  
      createP('Chegou ao destino!');
      break;
    }

    var edges = current.neighbors;
    for (var i = 0; i < edges.length; i++) {
      var neighbor = edges[i];

      if (!neighbor.searched && !neighbor.wall) {
        neighbor.searched = true;
        neighbor.previous = current;
        
        queue.push(neighbor);

      }
    }
  } 
  
    for (var i = 0; i < cols; i++) {
      for (var j = 0; j < rows; j++) {
        grid[i][j].show();
      }
    }
  
    path = [];
    path.push(end);
    var next = end.previous;
    while (next != null) {
      path.push(next);
      next = next.previous;
    }
}