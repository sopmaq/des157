// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    var clock = document.getElementById("clock");

    var whatTip = document.getElementById("whatTip");
    var whatLink = document.getElementById("whatLink");

        var doingTip = document.getElementById("doingTip");
        var doingLink = document.getElementById("doingLink");

    var clockTip = document.getElementById("clockTip");
    var tipTimer;


    function makeClock() {
      var d = new Date();
      var h = d.getHours();
      var dayTime = "AM";
      if (h >= 12) {
        h -= 12;
        dayTime = "PM";
      }

      if (h == 0) {
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

    /* Change background according to time of day */

    var body = document.getElementById("pageBody");
    var header = document.getElementById("header");
    switch (new Date().getHours()) {
      case 0:
        console.log("case 0");
        body.style.backgroundColor = "#14233E";
        clockTip.innerHTML = "Napping. But by accident."
        header.style.color = "#DFF1FE";
        clock.style.color = "#DFF1FE";
        whatTip.innerHTML = "Too much homework!";
        doingTip.innerHTML = "Why isn't this compiling?";
        break;
      case 1:
        console.log("case 1");
        body.style.backgroundColor = "#1F2C43";
        header.style.color = "#DFF1FE";
        clock.style.color = "#DFF1FE";
        clockTip.innerHTML = "Falling asleep... for real this time."
        whatTip.innerHTML = "Don't feel bad!";
        doingTip.innerHTML = "Sleep is really, really important.";
        break;
      case 2:
        console.log("case 2");
        body.style.backgroundColor = "#001848";
        header.style.color = "#DFF1FE";
        clock.style.color = "#DFF1FE";
        clockTip.innerHTML = "Definitely asleep."
        whatTip.innerHTML = "Sleep is just as important as drinking water.";
        doingTip.innerHTML = "Don't wake me up...";
        break;
      case 3:
        console.log("case 3");
        body.style.backgroundColor = "#112C63";
        header.style.color = "#DFF1FE";
        clock.style.color = "#DFF1FE";
        clockTip.innerHTML = "Zzz..."
        whatTip.innerHTML = "I've got some comfy pillows!";
        doingTip.innerHTML = "Getting some needed rest.";
        break;
      case 4:
        console.log("case 4");
        body.style.backgroundColor = "#3B507B";
        header.style.color = "#DFF1FE";
        clock.style.color = "#DFF1FE";
        clockTip.innerHTML = "Hopefull still sleeping."
        whatTip.innerHTML = "Sleep is important!";
        doingTip.innerHTML = "Hoping my cat doesn't wake me up!";
        break;
      case 5:
        console.log("case 5");
        body.style.backgroundColor = "#7375A5";
        header.style.color = "#DFF1FE";
        clock.style.color = "#DFF1FE";
        clockTip.innerHTML = "Being woken up by my cat..."
        whatTip.innerHTML = "It's the middle of the night!";
        doingTip.innerHTML = "Why does she need to eat so much?";
        break;
      case 6:
        console.log("case 6");
        body.style.backgroundColor = "#D1D9FF";
        header.style.color = "#DFF1FE";
        clock.style.color = "#DFF1FE";
        clockTip.innerHTML = "Savoring the last few hours of sleep..."
        whatTip.innerHTML = "Please last longer...";
        doingTip.innerHTML = "At least my phone is on silent.";
        break;
      case 7:
        console.log("case 7");
        body.style.backgroundColor = "#D1DFFF";
        header.style.color = "#DFF1FE";
        clock.style.color = "#DFF1FE";
        clockTip.innerHTML = "Ignoring my alarm. Multiple times."
        whatTip.innerHTML = "I need more sleep...";
        doingTip.innerHTML = "7 is just too early!";
        break;
      case 8:
        console.log("case 8");
        body.style.backgroundColor = "#DFF1FE";
        header.style.color = "#DFF1FE";
        clock.style.color = "#DFF1FE";
        clockTip.innerHTML = "Waking up... after seventeen snooze alarms."
        whatTip.innerHTML = "Do I just not hear them...";
        doingTip.innerHTML = "...or do I just turn my phone on silent without realizing?";
        break;
      case 9:
        console.log("case 9");
        body.style.backgroundColor = "#D1ECFF";
        header.style.color = "#DFF1FE";
        clock.style.color = "#DFF1FE";
        clockTip.innerHTML = "Time to get ready!"
        whatTip.innerHTML = "Brushing my teeth for two minutes... I promise.";
        doingTip.innerHTML = "Where did I put my left shoe...";
        break;
      case 10:
        console.log("case 10");
        body.style.backgroundColor = "#BBE3FF";
        header.style.color = "#DFF1FE";
        clock.style.color = "#DFF1FE";
        clockTip.innerHTML = "Looking for breakfast!"
        whatTip.innerHTML = "Eggs... or bagels?";
        doingTip.innerHTML = "Not sure if I can make coffee in time for the bus...";
        break;
      case 11:
        console.log("case 11");
        body.style.backgroundColor = "#9ED7FF";
        header.style.color = "#DFF1FE";
        clock.style.color = "#DFF1FE";
        clockTip.innerHTML = "Running to catch the bus...";
        whatTip.innerHTML = "I take the A Line! Or the Z... ";
        doingTip.innerHTML = "... but I usually miss the bus by a minute or so.";
        break;
      case 12:
        console.log("case 12");
        body.style.backgroundColor = "#67BAF5";
        header.style.color = "#DFF1FE";
        clock.style.color = "#DFF1FE";
        clockTip.innerHTML = "Eating anything and everything I can find!"
        whatTip.innerHTML = "Is two bagels in one day excessive?";
        doingTip.innerHTML = "Breaking out my snacks box.";
        break;
      case 13:
        console.log("case 13");
        body.style.backgroundColor = "#9ECFFF";
        header.style.color = "#DFF1FE";
        clock.style.color = "#DFF1FE";
        clockTip.innerHTML = "At work. Slack me!"
        whatTip.innerHTML = "Work work work...";
        doingTip.innerHTML = "Sending emails, checking off boxes, going to meetings.";
        break;
      case 14:
        console.log("case 14");
        body.style.backgroundColor = "#86B8F0";
        header.style.color = "#DFF1FE";
        clock.style.color = "#DFF1FE";
        clockTip.innerHTML = "Definitely NOT falling asleep in class."
        whatTip.innerHTML = "DES 157!";
        doingTip.innerHTML = "Coding interactive experiences.";
        break;
      case 15:
        console.log("case 15");
        body.style.backgroundColor = "#69A5CD";
        header.style.color = "#DFF1FE";
        clock.style.color = "#DFF1FE";
        clockTip.innerHTML = "Still in class. Getting  a little sleepy..."
        whatTip.innerHTML = "Work time!";
        doingTip.innerHTML = "Coding (or snacking)";
        break;
      case 16:
        console.log("case 16");
        body.style.backgroundColor = "#3D83B1";
        header.style.color = "#DFF1FE";
        clock.style.color = "#DFF1FE";
        clockTip.innerHTML = "Napping (unintentionally)."
        whatTip.innerHTML = "Trying to do work - but I'm so sleepy!";
        doingTip.innerHTML = "Falling asleep on my laptop... get me a pillow please.";
        break;
      case 17:
        console.log("case 17");
        body.style.backgroundColor = "#F08D5B";
        header.style.color = "#DFF1FE";
        clock.style.color = "#DFF1FE";
        clockTip.innerHTML = "Making to-do lists. Time to get to work!"
        whatTip.innerHTML = "To-do: send emails, finish homework, write code.";
        doingTip.innerHTML = "Check off \"Make To-Do List\"";
        break;
      case 18:
        console.log("case 18");
        body.style.backgroundColor = "#A23C4A";
        clockTip.innerHTML = "Forgetting to eat dinner. I'm just so busy!"
        whatTip.innerHTML = "I have a packet of instant noodles?";
        doingTip.innerHTML = "Getting to work and checking off my to-do list!";
        break;
      case 19:
        console.log("case 19");
        body.style.backgroundColor = "#643047";
        clockTip.innerHTML = "PM coffee break! Time to stay up late."
        whatTip.innerHTML = "I like it black.";
        doingTip.innerHTML = "Is it procrastinating if I'm drinking coffee?";
        break;
      case 20:
        console.log("case 20");
        body.style.backgroundColor = "#2A1735";
        clockTip.innerHTML = "Does making toast count as cooking dinner?"
        whatTip.innerHTML = "I like to put avocados on my toast.";
        doingTip.innerHTML = "Burning on my first attempt.. ";
        break;
      case 21:
        console.log("case 21");
        body.style.backgroundColor = "#112C63";
        clockTip.innerHTML = "Study study study...";
        whatTip.innerHTML = "Lecture notes and Piazza posts.";
        doingTip.innerHTML = "Writing questions for my TAs on post-it notes!";
        break;
      case 22:
        console.log("case 22");
        body.style.backgroundColor = "#15284F";
        clockTip.innerHTML = "Trying not to fall asleep!"
        whatTip.innerHTML = "Don't give up! You can do it!";
        doingTip.innerHTML = "Wish I had more coffee...";
        break;
      case 23:
        console.log("case 23");
        body.style.backgroundColor = "#1F2C43";
        clockTip.innerHTML = "Searching for bugs... or typos.";
        whatTip.innerHTML = "Should I rewrite the whole program?";
        doingTip.innerHTML = "Forgetting a semi-colon...";
        break;

    } // switch

    /* What Tooltip */
    function showWhatTip(){
    whatTip.style.opacity = 1;
    whatTip.style.transition = 'all .5s';
    }

    function hideWhatTip(){
      whatTip.style.opacity = 0;
      whatTip.style.transition = 'all .5s';
    }


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
    doingTip.style.transition = 'all .5s';
    }

    function hideDoingTip(){
      doingTip.style.opacity = 0;
      doingTip.style.transition = 'all .5s';
    }

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
    clockTip.style.transition = 'all .5s';
    }

    function hideClockTip(){
      clockTip.style.opacity = 0;
      clockTip.style.transition = 'all .5s';
    }


    clock.addEventListener("mouseover", function(){
    clock.style.cursor = "pointer";
    tipTimer = setTimeout(showClockTip, 1000);
    });

    clock.addEventListener("mouseout", function(){
    tipTimer = setTimeout(hideClockTip, 1000);
    });

});
