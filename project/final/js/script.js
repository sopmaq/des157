// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
});
var mic;
var circles = [];


// setup()
function setup(){
  console.log('setup function');
//  var windowWidth = document.getElementById("indexCanvas").offsetWidth;
//  var windowHeight = document.getElementById("indexCanvas").offsetHeight;

 windowWidth = screen.width;
 windowHeight = screen.height;

  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('indexCanvas');
  mic = new p5.AudioIn();         // create a new Audio Input object
  mic.start();                    // connect to speakers

  // testing
  for (var i = 0; i < 50; i++) {
    circles.push(new Circle());
  }

} // setup()

// draw()
function draw() {

  console.log('draw function')
  background(0);
  var amp = mic.getLevel();        // get amp
   var h = map(amp, 0, 1, 20, 200);
  // testing
  for (var i = 0; i < 50; i ++) {
    circles[i].diameter = h;
    circles[i].show();
  }

};

/* Circle class */


// ellipse(150, 150, h, h)

// Circle class
function Circle() {
  this.x = random(width);
  this.y = random(height);
//  var h = map(amp, 0, 1, 20, 200);
  this.diameter = 0;
  console.log('made h variable');

  this.show = function() {
    fill(142, 68, 173);
    stroke(255);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
};
