// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

});

var mic;
console.log('var mic');

// setup()
function setup(){
  console.log('get setup()');
  var canvas = createCanvas(850, 500);
  canvas.parent('indexCanvas');
  console.log('add canvas to main section');
  mic = new p5.AudioIn();         // create a new Audio Input object
  mic.start();                    // connect to speakers
} // setup()

// draw()
function draw() {
  console.log('get draw()')

    background(29, 30, 44);
    var amp = mic.getLevel();        // get amp
    console.log('got amplitude')
  // Make circles
  fill(29, 30, 44);
  stroke(255);
  var h = map(amp, 0, 1, 20, 200);

  // counter/timer
  var top = 200;
  for (var i = 0; i < top; i++) {
  }

  // Foreground shifts
  var shiftX1 = map(mouseX, 0, width, 5, 10);
  var shiftY1 = map(mouseY, 0, height, 2, 5);
  // Background shifts
  var shiftX2 = map(mouseX, 0, width, 2, 5);
  var shiftY2 = map(mouseY, 0, height, 1, 3);

  // Foreground
  ellipse(50 + shiftX1, 400 + shiftY1, h - 5, h - 5);
  ellipse(450 + shiftX1, 230 + shiftY1, h + 40, h + 40);
  ellipse(150 + shiftX1, 150 + shiftY1, h, h);
  ellipse(300 - shiftX1, 300 - shiftY1, h + 100, h + 100);

  // Background
  ellipse(200 + shiftX2, 60 + shiftY2, h - 13, h - 13)
  ellipse(360 + shiftX2, 430 + shiftY2, h - 13, h - 13)
  ellipse(460 - shiftX2, 315 + shiftY2, h - 13, h - 13)
  ellipse(130 - shiftX2, 45 + shiftY2, h-13, h - 13)



}
