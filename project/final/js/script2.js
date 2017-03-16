// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    alert("Hold the microphone on the headphones underneath your nose. \n \n SEE EXAMPLE: https://sopmaq.github.io/des157/project/example.JPG" )

    var tooltip = document.getElementById("tooltip");
    var tooltiptext = document.getElementById("tooltiptext");
    var carrot = document.getElementById("carrot");
    var ifClick = false;

    tooltip.addEventListener("mouseover", function() {
      tooltip.style.cursor = "pointer";
    });

    tooltip.addEventListener("mouseout", function() {
    });


    tooltip.addEventListener("click", function()  {
      if (ifClick == false) {
        tooltiptext.style.display = "block";
        tooltip.style.transition = "all 0.7s";
        carrot.innerHTML = "&#9652;"
        ifClick = true;
        console.log("show tooltiptext");
      } else {
        tooltiptext.style.display = "none";
        tooltip.style.transition = "all 0.7s";
        carrot.innerHTML = "&#x25BE;"
        ifClick = false;
      }
    });

    var exerciseLink = document.getElementById("exerciseLink");
    var exerciseOn = false;
    var time1 = 4;
    var time2 = 7;
    var time3 = 8;

    exerciseLink.addEventListener("mouseover", function() {
      exerciseLink.style.cursor = "pointer";
    });

    exerciseLink.addEventListener("click", function() {

      if (exerciseOn == false) {
        // exercise goes here
        exerciseLink.innerHTML = "Breathe in for " + time1 + " seconds."
        exerciseLink.innerHTML = "Hold for " + time2 + " seconds."
        exerciseLink.innerHTML = "Breathe out for " + time3 + " seconds."
        exerciseOn = true;
      } else {
        // exercise is complete
        exerciseLink.innerHTML = "Begin exercise &#9656;"
        exerciseOn = false;
        return;
      }
    });

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
