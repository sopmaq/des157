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


} // setup()

// draw()
function draw() {

  console.log('draw function')
  background(29, 30, 44);

  // get amplitude
  var amp = mic.getLevel();
  var h = map(amp, 0, 1, 20, 200);


  /*var shiftX = map(mouseX, 0, width, 5, 10);
  var ellipseX = random(100, 200);
  var ellipseY = random(100, 200);

  // create cirlces

  for (var i = 0; i < 50; i ++) {
    fill(142, 68, 173);
    stroke(255);
    ellipse(ellipseX, ellipseY, h, h);
    //circles[i].parallax();
  }*/

getCircle();

};

// ellipse(150, 150, h, h)

// Circle class
function Circle() {

  this.x = random(width);
  this.y = random(height);
//  var h = map(amp, 0, 1, 20, 200);
  this.diameter = random(10, 30);
  console.log('made h variable');

  this.show = function() {
    fill(142, 68, 173);
    stroke(255);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
/*
  this.parallax = function() {
    // create parallax
    var shiftX = map(mouseX, 0, width, 5, 10);
    var shiftY = map(mouseY, 0, height, 2, 5);
    this.x += shiftX;
  }*/
};


function getCircle(){
  ellipse(random(width), random(height), 5, 5);
  ellipse(random(width), random(height), 5, 5);
  ellipse(random(width), random(height), 5, 5);
  ellipse(random(width), random(height), 5, 5);
  ellipse(random(width), random(height), 5, 5);
  ellipse(random(width), random(height), 5, 5);
}
