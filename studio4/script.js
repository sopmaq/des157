// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    var clock = document.getElementById("clock");

    function makeClock() {
      var d = new Date();
      var h = d.getHours();
      var dayTime = "AM";
      if (h > 12) {
        h -= 12;
        dayTime = "PM";
      }
      var m = d.getMinutes();
      var s = d.getSeconds();
      clock.innerHTML = h + ":" + m + " " + dayTime;
      var timer = setTimeout(makeClock, 1000);
    }

    makeClock();



});
