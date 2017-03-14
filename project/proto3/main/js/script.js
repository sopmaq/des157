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
  var amp = mic.getLevel();        // get amp
  console.log('got amplitude')

};

/* Circle class */

// var h = map(amp, 0, 1, 20, 200);
// ellipse(150, 150, h, h)


/*



var circles = [];
for (var i = 0; i < 50; i ++) {
  circles.push(new Circle());
} // for
console.log('make circles array');


// Circle class
function Circle() {
  this.x = random(width - 25);
  this.y = random(height - 25);
  var h = map(amp, 0, 1, 20, 200);
  this.diameter = h;
  console.log('made h variable');

  this.show = function() {
    fill(142, 68, 173);
    stroke(255);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
};

*/
