
function validateForm(){
  var MM = document.getElementById("month").value;
  var DD = document.getElementById("date").value;
  var year = document.getElementById("year").value;

  if (MM === "" || MM < 1 || MM > 12 || DD === "" || DD < 0 || DD > 31 || year === "" || year > 2030 || year < 1900 || year.length > 4 || year.length < 4 ){
    return false;
  }else{
    var CC = year.slice(0, 1);
    var YY = year.slice(2, 3);
      var dayoFtheWeek = Math.floor((((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10)) + DD) % 7);
      return dayoFtheWeek;
  }
}


function checkGender(){

  var radioCheck = document.getElementsByName('gender');
  const radio1  = document.getElementById('gender1');
  const radio2  = document.getElementById('gender2');



   if(!(radioCheck[0].checked || radioCheck[1].checked))
   {
   return false;
  }else
  {
      if (radio1.checked) {
          radioCheck = radio1.value;
          return radioCheck;      
      }else if (radio2.checked){
          radioCheck = radio2.value;
          return radioCheck;

      }
  }

}

function akanName(){
  var boy = ["Kwasi!", "Kwadwo!", "Kwabena!", "Kwaku!", "Yaw!", "Kofi!", "Kwame!"];
  var days = ["Sunday." ,"Monday." , "Tuesday." , "wednesday." , "Thursday." , "Friday." , "Saturday."]
  var girl = ["Akosua!", "Adwoa!", "Abenaa!", "Akua!", "Yaa!", "Afua!", "Ama!"];
var arrive =  document.getElementById("post");
var arrive2 = document.getElementById('post2');

  if (checkGender() === "male")
    {
      arrive.innerHTML="Your Akan Name is " +  boy[validateForm()];
      arrive2.innerHTML="Born on " + days[validateForm()];


      var duration = 15 * 1000;
      var animationEnd = Date.now() + duration;
      var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
      
      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }
      
      var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
      
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
      
        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 250);

  }else if(checkGender() === "female"){
      arrive.innerHTML = "Your Akan Name is "  + girl[validateForm()];
      arrive2.innerHTML= "Born on " + days[validateForm()];

       var duration = 15 * 1000;
      var animationEnd = Date.now() + duration;
      var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
      
      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }
      
      var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
      
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
      
        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 250);

    }
}



