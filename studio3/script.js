// JavaScript Document


document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

// Global Variables
var description = document.getElementById("description");
// Micron
   var micron = document.getElementById("micron");
   micron.addEventListener('mouseover', function() {
    micron.style.paddingTop = "50px";
    micron.style.cursor = "pointer";
    micron.style.transition = "all 0.7s";
   })
   micron.addEventListener('mouseout', function() {
     micron.style.paddingTop = "0px";
  })
  micron.addEventListener('click', function() {
    document.getElementById("description-h3").innerHTML = "SAKURA";
    document.getElementById("description-h5").innerHTML = "Pigma Micron 08";
    document.getElementById("description-p").innerHTML = "Quintessential \"design pen.\" I like to use this for hand-lettering and illustrations."
    description.style.visibility = "visible";
  })


  // Muji
      var muji = document.getElementById("muji");
      muji.addEventListener('mouseover', function() {
        muji.style.paddingTop = "70px";
        muji.style.cursor = "pointer";
        muji.style.transition = "all 0.7s";
      })
      muji.addEventListener('mouseout', function() {
        muji.style.paddingTop = "30px";
     })
     muji.addEventListener('click', function() {
       document.getElementById("description-h3").innerHTML = "MUJI";
       document.getElementById("description-h5").innerHTML = "0.38 Gel Pen";
       document.getElementById("description-p").innerHTML = "My absolute must for \"pretty\" notes - the thin weight makes for great study guides."
       description.style.visibility = "visible";
     })

// Pilot
  var pilot = document.getElementById("pilot");
  pilot.addEventListener('mouseover', function() {
    pilot.style.paddingTop = "100px";
    pilot.style.cursor = "pointer";
    pilot.style.transition = "all 0.7s";
  })
  pilot.addEventListener('mouseout', function() {
    pilot.style.paddingTop = "50px";
 })
 pilot.addEventListener('click', function() {
   document.getElementById("description-h3").innerHTML = "PILOT";
   document.getElementById("description-h5").innerHTML = "Precise V5 Retractable Rollerball Pen";
   document.getElementById("description-p").innerHTML = "My ride or die. For the past 5 years, I've used this pen for everyday note-taking!"
   description.style.visibility = "visible";
 })

// Prismacolor
 var prismacolor = document.getElementById("prismacolor");
 prismacolor.addEventListener('mouseover', function() {
   prismacolor.style.paddingTop = "55px";
   prismacolor.style.cursor = "pointer";
   prismacolor.style.transition = "all 0.7s";
 })
 prismacolor.addEventListener('mouseout', function() {
   prismacolor.style.paddingTop = "5px";
})
prismacolor.addEventListener('click', function() {
  document.getElementById("description-h3").innerHTML = "PRISMACOLOR";
  document.getElementById("description-h5").innerHTML = "Brush Pen";
  document.getElementById("description-p").innerHTML = "I used to use this for drawing, but now I find it useful for brush lettering."
  description.style.visibility = "visible";
})

// Sakura
var sakura = document.getElementById("sakura");
sakura.addEventListener('mouseover', function() {
  sakura.style.paddingTop = "50px";
  sakura.style.cursor = "pointer";
  sakura.style.transition = "all 0.7s";
})
sakura.addEventListener('mouseout', function() {
  sakura.style.paddingTop = "0px";
})
sakura.addEventListener('click', function() {
  document.getElementById("description-h3").innerHTML = "SAKURA";
  document.getElementById("description-h5").innerHTML = "Pigma Sensei 1.0 mm";
  document.getElementById("description-p").innerHTML = "A throwback to those DES 001 days. I love making chunky letters with this marker."
  description.style.visibility = "visible";
})

// Stabilo
var stabilo = document.getElementById("stabilo");
stabilo.addEventListener('mouseover', function() {
  stabilo.style.paddingTop = "100px";
  stabilo.style.cursor = "pointer";
  stabilo.style.transition = "all 0.7s";
})
stabilo.addEventListener('mouseout', function() {
  stabilo.style.paddingTop = "50px";
})
stabilo.addEventListener('click', function() {
  document.getElementById("description-h3").innerHTML = "STABILO";
  document.getElementById("description-h5").innerHTML = "Pen 68";
  document.getElementById("description-p").innerHTML = "One of the thicker markers I own. Great for brainstorming on large rolls of paper."
  description.style.visibility = "visible";
})

// Staedtler
var staedtler = document.getElementById("staedtler");
staedtler.addEventListener('mouseover', function() {
  staedtler.style.paddingTop = "60px";
  staedtler.style.cursor = "pointer";
  staedtler.style.transition = "all 0.7s";
})
staedtler.addEventListener('mouseout', function() {
  staedtler.style.paddingTop = "10px";
})
staedtler.addEventListener('click', function() {
  document.getElementById("description-h3").innerHTML = "STAEDTLER";
  document.getElementById("description-h5").innerHTML = "Fineliner";
  document.getElementById("description-p").innerHTML = "This pen leaves a fine, gray, unobtrusive mark that I use to add notes to the margins of my study guides and sketches."
  description.style.visibility = "visible";
})

// Tombow
var tombow = document.getElementById("tombow");
tombow.addEventListener('mouseover', function() {
  tombow.style.paddingTop = "115px";
  tombow.style.cursor = "pointer";
  tombow.style.transition = "all 0.7s";
})
tombow.addEventListener('mouseout', function() {
  tombow.style.paddingTop = "65px";
})
tombow.addEventListener('click', function() {
  document.getElementById("description-h3").innerHTML = "TOMBOW";
  document.getElementById("description-h5").innerHTML = "Fudenosuke";
  document.getElementById("description-p").innerHTML = "If I had to choose one pen for brush lettering and fun handwriting, this would be it!"
  description.style.visibility = "visible";
})


});
