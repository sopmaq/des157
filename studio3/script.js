// JavaScript Document


document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


// Micron
   var micron = document.getElementById("micron");
   micron.addEventListener('mouseover', function() {
    micron.style.paddingTop = "50px";
   })
   micron.addEventListener('mouseout', function() {
     micron.style.paddingTop = "0px";
  })

  // Muji
      var muji = document.getElementById("muji");
      muji.addEventListener('mouseover', function() {
        muji.style.paddingTop = "50px";
      })
      muji.addEventListener('mouseout', function() {
        muji.style.paddingTop = "0px";
     })

// Pilot
  var pilot = document.getElementById("pilot");
  pilot.addEventListener('mouseover', function() {
    pilot.style.paddingTop = "100px";
  })
  pilot.addEventListener('mouseout', function() {
    pilot.style.paddingTop = "50px";
 })

// Prismacolor
 var prismacolor = document.getElementById("prismacolor");
 prismacolor.addEventListener('mouseover', function() {
   prismacolor.style.paddingTop = "50px";
 })
 prismacolor.addEventListener('mouseout', function() {
   prismacolor.style.paddingTop = "0px";
})

// Sakura
var sakura = document.getElementById("sakura");
sakura.addEventListener('mouseover', function() {
  sakura.style.paddingTop = "50px";
})
sakura.addEventListener('mouseout', function() {
  sakura.style.paddingTop = "0px";
})

// Stabilo
var stabilo = document.getElementById("stabilo");
stabilo.addEventListener('mouseover', function() {
  stabilo.style.paddingTop = "50px";
})
stabilo.addEventListener('mouseout', function() {
  stabilo.style.paddingTop = "0px";
})

// Staedtler
var staedtler = document.getElementById("staedtler");
staedtler.addEventListener('mouseover', function() {
  staedtler.style.paddingTop = "50px";
})
staedtler.addEventListener('mouseout', function() {
  staedtler.style.paddingTop = "0px";
})

// Tombow
var tombow = document.getElementById("tombow");
tombow.addEventListener('mouseover', function() {
  tombow.style.paddingTop = "50px";
})
tombow.addEventListener('mouseout', function() {
  tombow.style.paddingTop = "0px";
})


});
