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

    // get breathing-activity
    var breathingActivity = document.getElementById("breathing-activity");

    // give howTo a pointer cursor
    howTo.onmouseover = function() {
      howTo.style.cursor = "pointer";
      howTo.style.color = "ghostwhite";
      howTo.style.transition = "all 0.5s";
    }

    howTo.onmouseout = function() {
      howTo.style.color = "#DCC6E0";
    }

    // make the popUp open when you press howTo
    howTo.onclick = function() {
      instructions.style.display = "block";
      breathingActivity.style.display = "none";
    }

    // give close a pointer cursor
    close.onmouseover = function() {
      close.style.cursor = "pointer";
      close.style.border = "2px solid #22313F";
      close.style.transition = "all 0.3s";
    }

    close.onmouseout = function() {
      close.style.transition = "all 0.3s";
      close.style.border = "2px solid #1BA39C";
    }
    // close the popUp
    close.onclick = function() {
      instructions.style.display = "none";
      instructions.style.transition = "all 1s";
      breathingActivity.style.display = "block";
    }

    //
    //
    //

    var tooltip = document.getElementById("tooltip");
    var tooltiptext = document.getElementById("tooltiptext");
    var carrot = document.getElementById("carrot");
    var ifClick = false;

    tooltip.addEventListener("mouseover", function() {
      tooltip.style.cursor = "pointer";
      tooltip.style.color = "ghostwhite";
      tooltip.style.transition = "all 0.5s";
    });

    tooltip.onmouseout = function() {
      tooltip.style.color = "#DCC6E0";
    }

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


    var exerciseBtn = document.getElementById("exerciseBtn");

var instruction = document.getElementById("instruction");

var ifExercise = false;

exerciseBtn.onclick = function() {
  if (!ifExercise) {
      instruction.style.display = "block";
      exerciseBtn.innerHTML = "Stop";
      var t = setInterval(dec, 1000);
      ifExercise = true;
  } else {
    instruction.style.display = "none";
    exerciseBtn.innerHTML = "Start";
    ifExercise = false;
  }
}

function startExercise() {
 // var time = setInterval(inc(time), 1000);
  var time = 1;
  instruction.innerHTML = "Breathe in for " + time + " seconds";
};


function dec(i) {
  instruction.innerHTML = "Breathe in for " + i + " seconds";
  if (i == 0) {
    return;
  } else {
      dec(i--);

}
}



});
var mic;
//var circles = [];
var randomw = [];

  var randomh = [];
// setup()
function setup(){
  console.log('setup function');
 windowWidth = screen.width;
 windowHeight = screen.height;

  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('indexCanvas');
  mic = new p5.AudioIn();         // create a new Audio Input object
  mic.start();                    // connect to speakers

  // testing
  //  for (var i = 0; i < 50; i++) {
  //  circles.push(new Circle());
  //}

  var width = document.getElementById("indexCanvas").offsetWidth;
  var height = document.getElementById("indexCanvas").offsetHeight;

  for (var i = 0; i < 200; i ++) {
    randomw[i] = random(0, width);
  }

  for (var i = 0; i < 200; i ++) {
    randomh[i] = random(0, height);
  }

} // setup()


// draw()
function draw() {

  console.log('draw function')
  background(29, 30, 44);

  // get amplitude
  var amp = mic.getLevel();
  var h = map(amp, 0, 1, 20, 200);

  if (h <= 20) {
    h--;
  }

//var shiftX = map(mouseX, 0, width, 5, 10);

  // Foreground shifts
var shiftX1 = map(mouseX, 0, width, 5, 10);
var shiftY1 = map(mouseY, 0, height, 2, 5);
// Background shifts
var shiftX2 = map(mouseX, 0, width, 2, 5);
var shiftY2 = map(mouseY, 0, height, 1, 3);

// Foreground
fill(29, 30, 44);
stroke(255);
var c=0;

(randomw[c] + shiftX1, randomh[c] + shiftY1, h - 5, h - 5);

ellipse(randomw[c++]+ shiftX1, randomh[c++] + shiftY1, h + 40, h + 40);
ellipse(randomw[c++] + shiftX1, randomh[c++] + shiftY1, h, h);
ellipse(randomw[c++] - shiftX1, randomh[c++] - shiftY1, h + 100, h + 100);
ellipse(randomw[c++] + shiftX1, randomh[c] + shiftY1, h - 5, h - 5);

ellipse(randomw[c++] - shiftX1, randomh[c++] + shiftY1, h + 40, h + 40);
ellipse(randomw[c++] - shiftX1, randomh[c++] + shiftY1, h, h);
ellipse(randomw[c++] + shiftX1, randomh[c++] - shiftY1, h + 100, h + 100);

// Background
ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h - 13, h - 13)
ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h - 13, h - 13)
ellipse(randomw[c++] - shiftX2, random[c++] + shiftY2, h - 13, h - 13)
ellipse(randomw[c++] - shiftX2, randomh[c++] + shiftY2, h-13, h - 13)
ellipse(randomw[c++] + shiftX1, randomh[c] + shiftY1, h - 5, h - 5);

ellipse(randomw[c++]- shiftX1, randomh[c++] + shiftY1, h + 40, h + 40);
ellipse(randomw[c++] - shiftX1, randomh[c++] + shiftY1, h, h);
ellipse(randomw[c++] + shiftX1, randomh[c++] - shiftY1, h + 100, h + 100);

ellipse(randomw[c++] - shiftX2, random[c++] + shiftY2, h - 13, h - 13)
ellipse(randomw[c++] - shiftX2, random[c++] + shiftY2, h - 13, h - 13)
ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h - 13, h - 13)
ellipse(randomw[c++] + shiftX2, randomh[c++] + shiftY2, h-13, h - 13)
ellipse(randomw[c++] - shiftX1, randomh[c] + shiftY1, h - 5, h - 5);

ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h - 13, h - 13)
ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h - 13, h - 13)
ellipse(randomw[c++] - shiftX2, random[c++] + shiftY2, h - 13, h - 13)
ellipse(randomw[c++] - shiftX2, randomh[c++] + shiftY2, h-13, h - 13)
ellipse(randomw[c++] + shiftX1, randomh[c] + shiftY1, h - 5, h - 5);

ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h - 5, h - 5)
ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h + 5, h + 5)
ellipse(randomw[c++] - shiftX2, random[c++] + shiftY2, h - 5, h - 5)
ellipse(randomw[c++] - shiftX2, randomh[c++] + shiftY2, h - 5, h - 5)
ellipse(randomw[c++] + shiftX1, randomh[c] + shiftY1, h - 5, h - 5);

ellipse(randomw[c++] - shiftX2, random[c++] + shiftY2, h - 5, h - 5)
ellipse(randomw[c++] - shiftX2, random[c++] + shiftY2, h + 5, h + 5)
ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h - 5, h - 5)
ellipse(randomw[c++] + shiftX2, randomh[c++] + shiftY2, h - 5, h - 5)
ellipse(randomw[c++] - shiftX1, randomh[c] + shiftY1, h - 5, h - 5);

ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h - 13, h - 13)
ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h - 13, h - 13)
ellipse(randomw[c++] - shiftX2, random[c++] + shiftY2, h - 13, h - 13)
ellipse(randomw[c++] - shiftX2, randomh[c++] + shiftY2, h-13, h - 13)
ellipse(randomw[c++] + shiftX1, randomh[c] + shiftY1, h - 5, h - 5);

ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h - 5, h - 5)
ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h + 5, h + 5)
ellipse(randomw[c++] - shiftX2, random[c++] + shiftY2, h - 5, h - 5)
ellipse(randomw[c++] - shiftX2, randomh[c++] + shiftY2, h - 5, h - 5)
ellipse(randomw[c++] + shiftX1, randomh[c] + shiftY1, h - 5, h - 5);

ellipse(randomw[c++] - shiftX2, random[c++] + shiftY2, h - 5, h - 5)
ellipse(randomw[c++] - shiftX2, random[c++] + shiftY2, h + 5, h + 5)
ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h - 5, h - 5)
ellipse(randomw[c++] + shiftX2, randomh[c++] + shiftY2, h - 5, h - 5)
ellipse(randomw[c++] - shiftX1, randomh[c] + shiftY1, h - 5, h - 5);

ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h - 13, h - 13)
ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h - 13, h - 13)
ellipse(randomw[c++] - shiftX2, random[c++] + shiftY2, h - 13, h - 13)
ellipse(randomw[c++] - shiftX2, randomh[c++] + shiftY2, h-13, h - 13)
ellipse(randomw[c++] + shiftX1, randomh[c] + shiftY1, h - 5, h - 5);

ellipse(randomw[c++]- shiftX1, randomh[c++] + shiftY1, h + 40, h + 40);
ellipse(randomw[c++] - shiftX1, randomh[c++] + shiftY1, h, h);
ellipse(randomw[c++] + shiftX1, randomh[c++] - shiftY1, h + 100, h + 100);

ellipse(randomw[c++] - shiftX2, random[c++] + shiftY2, h - 13, h - 13)
ellipse(randomw[c++] - shiftX2, random[c++] + shiftY2, h - 13, h - 13)
ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h - 13, h - 13)
ellipse(randomw[c++] + shiftX2, randomh[c++] + shiftY2, h-13, h - 13)
ellipse(randomw[c++] - shiftX1, randomh[c] + shiftY1, h - 5, h - 5);

ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h - 13, h - 13)
ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h - 13, h - 13)
ellipse(randomw[c++] - shiftX2, random[c++] + shiftY2, h - 13, h - 13)
ellipse(randomw[c++] - shiftX2, randomh[c++] + shiftY2, h-13, h - 13)
ellipse(randomw[c++] + shiftX1, randomh[c] + shiftY1, h - 5, h - 5);

ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h - 5, h - 5)
ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h + 5, h + 5)
ellipse(randomw[c++] - shiftX2, random[c++] + shiftY2, h - 5, h - 5)
ellipse(randomw[c++] - shiftX2, randomh[c++] + shiftY2, h - 5, h - 5)
ellipse(randomw[c++] + shiftX1, randomh[c] + shiftY1, h - 5, h - 5);

ellipse(randomw[c++] - shiftX2, random[c++] + shiftY2, h - 5, h - 5)
ellipse(randomw[c++] - shiftX2, random[c++] + shiftY2, h + 5, h + 5)
ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h - 5, h - 5)
ellipse(randomw[c++] + shiftX2, randomh[c++] + shiftY2, h - 5, h - 5)
ellipse(randomw[c++] - shiftX1, randomh[c] + shiftY1, h - 5, h - 5);

ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h - 13, h - 13)
ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h - 13, h - 13)
ellipse(randomw[c++] - shiftX2, random[c++] + shiftY2, h - 13, h - 13)
ellipse(randomw[c++] - shiftX2, randomh[c++] + shiftY2, h-13, h - 13)
ellipse(randomw[c++] + shiftX1, randomh[c] + shiftY1, h - 5, h - 5);

ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h - 5, h - 5)
ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h + 5, h + 5)
ellipse(randomw[c++] - shiftX2, random[c++] + shiftY2, h - 5, h - 5)
ellipse(randomw[c++] - shiftX2, randomh[c++] + shiftY2, h - 5, h - 5)
ellipse(randomw[c++] + shiftX1, randomh[c] + shiftY1, h - 5, h - 5);

ellipse(randomw[c++] - shiftX2, random[c++] + shiftY2, h - 5, h - 5)
ellipse(randomw[c++] - shiftX2, random[c++] + shiftY2, h + 5, h + 5)
ellipse(randomw[c++] + shiftX2, random[c++] + shiftY2, h - 5, h - 5)
ellipse(randomw[c++] + shiftX2, randomh[c++] + shiftY2, h - 5, h - 5)
ellipse(randomw[c++] - shiftX1, randomh[c] + shiftY1, h - 5, h - 5);

ellipse(randomw[c++]+ shiftX1, randomh[c++] + shiftY1, h + 40, h + 40);
ellipse(randomw[c++] + shiftX1, randomh[c++] + shiftY1, h + 150, h + 150);
ellipse(randomw[c++] - shiftX1, randomh[c++] - shiftY1, h + 100, h + 100);
ellipse(randomw[c++] + shiftX1, randomh[c] + shiftY1, h + 110, h + 110);

ellipse(randomw[c++] - shiftX1, randomh[c++] + shiftY1, h + 60, h + 60);
ellipse(randomw[c++] - shiftX1, randomh[c++] + shiftY1, h + 70, h + 70);
ellipse(randomw[c++] + shiftX1, randomh[c++] - shiftY1, h + 80, h + 80);

ellipse(randomw[c++]+ shiftX1, randomh[c++] + shiftY1, h + 40, h + 40);
ellipse(randomw[c++] + shiftX1, randomh[c++] + shiftY1, h + 150, h + 150);
ellipse(randomw[c++] - shiftX1, randomh[c++] - shiftY1, h + 100, h + 100);
ellipse(randomw[c++] + shiftX1, randomh[c] + shiftY1, h + 110, h + 110);

fill(63, 191, 191, 0.7);
ellipse(randomw[c++] - shiftX1 , randomh[c++] + shiftY1, h + 60, h + 60);
fill(63, 191, 191, 0.7);
ellipse(randomw[c++] - shiftX1, randomh[c++] + shiftY1, h + 70, h + 70);
fill(63, 191, 191, 0.7);
ellipse(randomw[c++] + shiftX1, randomh[c++] - shiftY1, h + 80, h + 80);


//
// Timer
//
var breathingActivityText = document.getElementById("breathingActivityText")
var boolBreathe = true;
var boolHold = false;
var boolOut = false;

if (boolHold) {
setTimeout(out, 7000);
boolOut = true;
boolHold = false;
boolBreathe = false;
}

if (boolOut) {
 setTimeout(breathe, 8000);
 boolOut = false;
 boolHold = false;
 boolBreathe = trues;
}

if (boolBreathe) {
 setTimeout(hold, 4000);
 boolOut = false;
 boolHold = true;
 boolBreathe = false;
}

var time1 = 4;
var time2 = 7;
var time3 = 8;

function breathe() {
  time1--;
  breathingActivityText.innerHTML = "Breathe in for " + time1 + " seconds...";
}

function hold() {
  time2--;
  breathingActivityText.innerHTML = "Hold for " + time2 + " seconds...";
}

function out() {
  time3--;
  breathingActivityText.innerHTML = "Breathe out for " + time1 + " seconds...";
}



  // create cirlces
  //for (var i = 0; i < 50; i ++) {
  //  circles[i].show();
  //  circles[i].diameter = h;
  //circles[i].parallax();
  //}

};

// Circle class
/*
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
};*/
