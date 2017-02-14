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
      } else if (h == 0) {
        h = 12;
      }

      var m = d.getMinutes();
      if (m < 10) {
        m = "0" + m;
      }
      var s = d.getSeconds();
      clock.innerHTML = h + ":" + m + " " + dayTime;
      var timer = setTimeout(makeClock, 1000);
    }

    makeClock();

    /* What Tooltip */
    function showWhatTip(){
    whatTip.style.opacity = 1;
    whatTip.style.transition = 'all .3s';
    }

    function hideWhatTip(){
      whatTip.style.opacity = 0;
      whatTip.style.transition = 'all .3s';
    }

    var whatTip = document.getElementById("whatTip");
    var whatLink = document.getElementById("whatLink");

    whatLink.addEventListener("mouseover", function(){
    whatLink.style.cursor = "pointer";
    tipTimer = setTimeout(showWhatTip, 1000);
    });

    whatLink.addEventListener("mouseout", function(){
    tipTimer = setTimeout(hideWhatTip, 1000);
    });


    /* Doing Tooltip */
    function showDoingTip(){
    doingTip.style.opacity = 1;
    doingTip.style.transition = 'all .3s';
    }

    function hideDoingTip(){
      doingTip.style.opacity = 0;
      doingTip.style.transition = 'all .3s';
    }

    var doingTip = document.getElementById("doingTip");
    var doingLink = document.getElementById("doingLink");

    doingLink.addEventListener("mouseover", function(){
    doingLink.style.cursor = "pointer";
    tipTimer = setTimeout(showDoingTip, 1000);
    });

    doingLink.addEventListener("mouseout", function(){
    tipTimer = setTimeout(hideDoingTip, 1000);
    });

    /* Clock Tooltip */

    function showClockTip(){
    clockTip.style.opacity = 1;
    clockTip.style.transition = 'all .3s';
    }

    function hideClockTip(){
      clockTip.style.opacity = 0;
      clockTip.style.transition = 'all .3s';
    }

    var clockTip = document.getElementById("clockTip");
    var tipTimer;

    clock.addEventListener("mouseover", function(){
    clock.style.cursor = "pointer";
    tipTimer = setTimeout(showClockTip, 1000);
    });

    clock.addEventListener("mouseout", function(){
    tipTimer = setTimeout(hideClockTip, 1000);
    });


});
