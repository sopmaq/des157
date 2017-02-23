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

  // CIRCLE [0][0] - AMPLITUDE
  // Make circle move based on amplitude
  // amplitude level is between 0.0 and 1.0
  // when breathe out: amplitude approaches 1.0
  // when breathe in: amplitude approaches 00
  var amp = mic.getLevel();
  fill(190, 144, 212);
  stroke(255);
  var h = map(amp, 0, 1, 20, 200);
  ellipse(150, 150, h, h)


  // CIRCLE [1][0] - AMPLITUDE
  // Change color based on amplitude
  // Circle inside changes radius based
  // on amplitude
  var r1 = map(amp, 0, 0.5, 174, 107)
  var g1 = map(amp, 0, 0.5, 168, 185)
  var b1 = map(amp, 0, 0.5, 211, 240)
  fill(r1, b1, g1);
  stroke(255);
  ellipse(150, 300, 80, 80)

  var r2 = map(amp, 0, 0.5, 174, 107)
  var g2 = map(amp, 0, 0.5, 168, 185)
  var b2 = map(amp, 0, 0.5, 211, 240)
  fill(r2, b2, g2);
  stroke(255);
  ellipse(150, 300, h, h)

  // 2 - AMPLITUDE
  var w = map(amp, 0, 0.5, 0, 100)
  fill(54, 215, 183);
  stroke(54, 215, 183);
  rect(300, 130, w, 30)
  fill(54, 215, 183);
  stroke(54, 215, 183);
  rect(300, 130, -w, 30)

} // draw()
