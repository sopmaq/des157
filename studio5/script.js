// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

});

var mic;
console.log('made mic var');

/* Canvas */

function setup(){
  console.log('get setup');
  var canvas1 = createCanvas(200, 200);
  background(200);
  canvas1.parent('canvas1');
/* var canvas2 = createCanvas(200, 200);
  canvas2.parent('canvas2');
  var canvas3 = createCanvas(200, 200);
  canvas3.parent('canvas3');
  var canvas4 = createCanvas(200, 200);
  canvas4.parent('canvas4');
  var canvas5 = createCanvas(200, 200);
  canvas5.parent('canvas5');
  var canvas6 = createCanvas(200, 200);
  canvas6.parent('canvas6');*/

  // mic = an Audio Input
  mic = new p5.AudioIn();
  // connect to speakers
  mic.start();
  // variable based on amplitude
//  amplitude = new p5.amplitude();
} // setup()

function draw() {
  console.log('draw function');
  background(200);
  // Make circle move based on amplitude
  // amplitude level is between 0.0 and 1.0
  // when breathe out: amplitude approaches 1.0
  // when breathe in: amplitude approaches 00
  var amp = mic.getLevel();
  fill(127);
  stroke(0);
  var h = map(amp, 0, 1, height, 0);
  ellipse(width/2, h - 25, 50, 50);
} // draw()
