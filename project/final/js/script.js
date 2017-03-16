// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // Popup
    // get Popup
    var instructions = document.getElementById("instructions");

    // get button to open
    var howTo = document.getElementById("howTo");

    // get button to close
    var close = document.getElementById("close");

    // give howTo a pointer cursor
    howTo.onmouseover = function() {
      howTo.style.cursor = "pointer";
      howTo.style.color = "blue";
      howTo.style.transition = "all 0.5s";
    }

    howTo.onmouseout = function() {
      howTo.style.color = "ghostwhite";
    }

    // make the popUp open when you press howTo
    howTo.onclick = function() {
      instructions.style.display = "block";
    }

    // give close a pointer cursor
    close.onmouseover = function() {
      close.style.cursor = "pointer";
      close.style.border = "2px solid pink";
      close.style.transition = "all 0.3s";
    }

    close.onmouseout = function() {
      close.style.transition = "all 0.3s";
      close.style.border = "2px solid blue";
    }
    // close the popUp
    close.onclick = function() {
      instructions.style.display = "none";
      instructions.style.transition = "all 1s";
    }
});
var mic;
var circles = [];


// setup()
function setup(){
  console.log('setup function');
// var windowWidth = document.getElementById("indexCanvas").offsetWidth;
// var windowHeight = document.getElementById("indexCanvas").offsetHeight;

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
  background(29, 30, 44);

  // get amplitude
  var amp = mic.getLevel();
  var h = map(amp, 0, 1, 20, 200);


  var shiftX = map(mouseX, 0, width, 5, 10);

  // create cirlces
  for (var i = 0; i < 50; i ++) {
    circles[i].show();
    //circles[i].parallax();
  }


};

// ellipse(150, 150, h, h)

// Circle class
function Circle() {
  var shiftX = map(mouseX, 0, width, 5, 10);
  this.x = random(width) + shiftX;
  this.y = random(height);
//  var h = map(amp, 0, 1, 20, 200);
  this.diameter = random(10, 30);
  console.log('made h variable');

  this.show = function() {
    fill(29, 30, 44);
    stroke(255);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  this.parallax = function() {
    // create parallax

    var shiftY = map(mouseY, 0, height, 2, 5);
    this.x += shiftX;
  }
};
