function setup() {
    var myCanvas = createCanvas(800, 200);
    myCanvas.parent('interactiveHeader');
}

var i = 0; 
var transRate = 0; 

function draw() {
  
  var size = abs(mouseX - pmouseX) + abs(mouseY - pmouseY);
  transRate++;  
 
  stroke(68, 68, 68);
  strokeWeight(2);
  fill(68, 68, 68, transRate)
  ellipse(mouseX, mouseY, size, size); 

  
  if (i < 255) {
    i++;
  } else {
    i = 0;
    transRate = 0; 
  } // if
    
} // draw()