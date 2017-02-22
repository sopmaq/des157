// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    var mic;
    /* Canvas */
    function setup() {
      var canvas = createCanvas(500, 500);
      canvas.parent('micCanvas');

      // mic = an Audio Input
      mic = new p5.AudioIn();
      // connect to speakers
      mic.start();
  } // setup()

  function draw() {
    background(0);

    // create a variable based on respiratory rate
    var
  } // draw()
});
