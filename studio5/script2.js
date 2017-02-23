// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

});

var c1 = function ( p ) {

  var mic;

  p.setup = function() {
    console.log("setup")
    p.createCanvas(200, 200);
    p.background(200);
    p.mic = new p5.AudioIn();
    p.mic.start();
  }; // setup

  p.draw = function() {
    console.log("draw")
    var amp = p.mic.getLevel();
    p.fill(127);
    p.stroke(0);
    var h = p.map(p.amp, 0, 1, 20, 150);
    p.ellipse(p.width/2, p.height/2, p.h - 20, p.h - 20);
  }; // draw
};

var myCanvas = new p5(c1, 'canvas1');
