
function countdown(dateEnd) {

  var timer, days, hours, minutes, seconds;
  
  dateEnd = new Date(dateEnd);
  dateEnd = dateEnd.getTime();
  timer = setInterval(calculate, 1000);

  function calculate() {
    var dateStart = new Date();
    var dateStart = new Date(dateStart.getUTCFullYear(),
      dateStart.getUTCMonth(),
      dateStart.getUTCDate(),
      dateStart.getUTCHours(),
      dateStart.getUTCMinutes(),
      dateStart.getUTCSeconds());

    var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

      promise = new Promise((resolve, reject) => {

        if (timeRemaining >= 0) {
          days = parseInt(timeRemaining / 86400);
          timeRemaining = (timeRemaining % 86400);
          hours = parseInt(timeRemaining / 3600);
          timeRemaining = (timeRemaining % 3600);
          minutes = parseInt(timeRemaining / 60);
          timeRemaining = (timeRemaining % 60);
          seconds = parseInt(timeRemaining);
    
          document.getElementById("days").innerHTML = parseInt(days, 10);
          document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
          document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
          document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
        } 
        else {
          resolve (end());
        }
      })      
    } 
  }

  function end(){
    document.getElementById("days").innerHTML = "x";
    document.getElementById("hours").innerHTML = "x";
    document.getElementById("minutes").innerHTML = "x";
    document.getElementById("seconds").innerHTML = "x";
   }
  
  countdown ('11/20/2022 2:43:10 PM');
