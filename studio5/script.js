// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

});

var mic;
console.log('made mic var');

/* Canvas */

function setup(){
  console.log('get setup');
  var canvas1 = createCanvas(900, 400);
  background(200);
  canvas1.parent('canvas1');


  // mic = an Audio Input
  mic = new p5.AudioIn();
  // connect to speakers
  mic.start();
} // setup()

function draw() {
  console.log('draw function');
  background(34, 49, 63);
  // AMPLITUDE
  // Make circle move based on amplitude
  // amplitude level is between 0.0 and 1.0
  // when breathe out: amplitude approaches 1.0
  // when breathe in: amplitude approaches 00
  var amp = mic.getLevel();
  fill(220, 198, 224);
  stroke(255);
  //var h = map(amp, 0, 1, height, 0);
  //ellipse(width/2, h - 25, 50, 50);
  var h = map(amp, 0, 1, 20, 200);
  ellipse(150, 150, h, h)



var r = map(amp, 0, 0.5, 174, 107)
var g = map(amp, 0, 0.5, 168, 185)
var b = map(amp, 0, 0.5, 211, 240)
  fill(r, b, g);
  stroke(255);
  ellipse(150, 300, 100, 100)

} // draw()
