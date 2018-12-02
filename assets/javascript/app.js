$(document).ready(function(){

 // start the game when user clicks on Start button
 $("#start-button").on("click", gameStart.startTimer);
 });


 var gameStart = {
    // set the time at 60 seconds, and count down by 1 second
    timeRemaining : 60,
    // start the timer, hide the start page, show the questions
    startTimer: function() {
      $("#timer").text("Time Remaining: "+ gameStart.timeRemaining);
      setInterval(gameStart.countdown, 1000);
      $("#start-page").hide();

    },
    countdown: function() {
        gameStart.timeRemaining--;
        $("#timer").text("Time Remaining: "+ gameStart.timeRemaining);
        if (gameStart.timeRemaining === 0){
          gameStart.stopTimer();
          $("#timer").empty();
          $("#start-page").show();
          alert("times up!!")
          $("#timer").hide();
        }
          
    },
    
    // stop the timer and reset
    stopTimer: function(){
        clearInterval();
        
    },



};