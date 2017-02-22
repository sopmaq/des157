// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

});

var mic;
console.log('made mic var');

/* Canvas */

function setup(){
  console.log('get setup');
  var canvas = createCanvas(500, 500);
  canvas.parent('micCanvas');

  // mic = an Audio Input
  mic = new p5.AudioIn();
  // connect to speakers
  mic.start();
} // setup()

function draw() {
  console.log('draw function');
  background(200);
  // create a variable based on respiratory rate
} // draw()
