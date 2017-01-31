// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    document.mainForm.onsubmit = processForm;

    function processForm() {
      var sigName = document.mainForm.sigName.value;
      var synonym = document.mainForm.synonym.value;
      var number = document.mainForm.number.value;
      var time = document.mainForm.timeUnit.value;
      var activity = document.mainForm.activity.value;
      var pet = document.mainForm.pet.value;
      var clothing = document.mainForm.clothing.value;
      var food = document.mainForm.food.value;
      var greeting = document.mainForm.greeting.value;
      var posession = document.mainForm.posession.value;
      var soHobby = document.mainForm.soHobby.value;

      var soPhone = document.getElementById('soPhone');
      var message1 = document.getElementById('message1');
      var message2 = document.getElementById('message2');
      var message3 = document.getElementById('message3');

      soPhone.innerHTML = sigName;
      message1.innerHTML = "we need to " + synonym + ". " + " i've been thinking about this for " + number + " " + time + ".";
      message2.innerHTML = "i don't like " + activity + " with u and u don't like " + pet + " and ur " + clothing + " always smells like " + food + ". also, " + soHobby + " is for nerds. " + "don't even say " + greeting + " the next time I see u - I just want my " + posession + " back.";
      message3.innerHTML = "i'm breaking up w u btw";

      return false;
    } // processForm()
}); // DOMContentLoaded
