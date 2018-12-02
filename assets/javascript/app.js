$(document).ready(function(){

 // start the game when user clicks on Start button.
 $("#start-button").on("click", gameStart.startTimer);

 });

 var gameStart = {
    // set the time at 60 seconds, and count down by 1 second.
    timeRemaining : 60,
    // start the timer, hide the start page, show the questions.
    startTimer: function() {
      $("#timer").text("Time Remaining: "+ gameStart.timeRemaining);
      setInterval(gameStart.countdown, 1000);
      $("#start-page").hide();
      trivia.displayQuestions();
    },

    countdown: function() {
        gameStart.timeRemaining--;
        $("#timer").text("Time Remaining: "+ gameStart.timeRemaining);
        if (gameStart.timeRemaining === 0){
          gameStart.stopTimer();
          $("#timer").empty();
          $("#start-page").show();
          $("#timer").hide();
        }   
    },
    
    // stop the timer and reset.
    stopTimer: function(){
        clearInterval();   
    },
};


    
    var trivia = {
        // pull questions from the array of questions, loop through them,and append to user interface.
    displayQuestions: function(){
        var divContainer = $("#questions-box");
        divContainer.append('<h2>Answer the following questions:<h2>');
        for (var i = 0; i < questionList.length; i++){
            divContainer.append('<div id="question">' + questionList[i].question + '</div>');

            var answer1 = questionList[i].answers[0];
            var answer2 = questionList[i].answers[1];
            var answer3 = questionList[i].answers[2];
            var answer4 = questionList[i].answers[3];
            
            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label-answers" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
  
            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label-answers" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
      
            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label-answers" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
    
            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label-answers" id="radio'+i+'label" for="radio'+i+'">' + answer4 + '</label></div>');
        
    
        };

           var doneButton = '<button class="btn btn-primary" id="done-button" type="submit">Done</button>';
           divContainer.append(doneButton);
           $("#done-button").on("click", gameState.stopTimer);
    
      },
    }

// array of questions, possible answers, and the correct answer
   var questionList = [
       
    {   question: "What kind of animal is a Komodo Dragon?",
        answers: ["Bird", "Snake", "Dog", "Lizard"],
        correct: "Lizard"
    },
    {   question: "Which Bird has the largest wingspan of any living bird?",
        answers: ["American Eagle", "Wandering Albatros", "Pelican", "Taiwanese Pigeon"],
        correct: "Wandering Albatros"
    },
    {   question: "What kind of creature is a Portuguese Man O War?",
        answers: ["Dog", "Cat", "Horse", "Jellyfish"],
        correct: "Jellyfish"
    },
    {   question: "Which creatures produce Gossamer?",
        answers: ["Snakes", "Worms", "Spiders", "Scorpions"],
        correct: "Spiders"
    },
    {   question: "From which animal is a Mohair obtained?",
        answers: ["Angora Goat", "Stalion Horse", "Zebra", "Monkey"],
        correct: "Angora Goat"
    },
    {   question: "How many Arms do most Starfish have?",
        answers: ["Six", "Five", "Two", "Ten"],
        correct: "Five"
    },
    {   question: "What is a Cabbage White?",
        answers: ["Rabbit", "Deer", "Turtle", "Butterfly"],
        correct: "Butterfly"
    },
    {   question: "What is the scientific name for the trunk of an Elephant?",
        answers: ["Canis Rufus", "Alouatta", "Proboscis", "Esox"],
        correct: "Proboscis"
    },
    {   question: "Murder is the collective noun for a group of which Bird?",
        answers: ["Owls", "Vultures", "Kingfishers", "Crows"],
        correct: "Crows"
    },
    {   question: "Which Ape gets its name from the Malay word meaning Man of the Forest?",
        answers: ["Orangutan", "Gorilla", "Chimpanzee", "Gibbon"],
        correct: "Orangutan"
    }]



