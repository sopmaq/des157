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
  description.style.visibility = "visible";
})


});
