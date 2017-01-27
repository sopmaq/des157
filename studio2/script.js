// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    document.mainForm.onsubmit = processForm;

    function processForm() {
      var userName = document.mainForm.userName.value;
      var texterRel = document.mainForm.texterRel.value;
      var texterName = document.mainForm.texterName.value;
      var results = document.getElementById('results');
      results.innerHTML = "Your name is " + userName + " and you are texting your " + texterRel + " whose name is " + texterName;
      return false;
    } // processForm()
}); // DOMContentLoaded
