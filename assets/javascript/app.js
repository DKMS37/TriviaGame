$(document).ready(function(){
  //hide the end page with results.
  $(".hidden").hide();
 //start the game when user clicks on Start button.
 $("#start-button").on("click", gameStart.startTimer);

 });

 var gameStart = {
    //set the time at 60 seconds, and count down by 1 second.
    timeRemaining : 60,
    // start the timer, hide the start page, show the questions.
    startTimer: function(){
      $("#timer").text("Time Remaining: " + gameStart.timeRemaining);
      setInterval(gameStart.countdown, 1000);
      $("#start-page").hide();
      trivia.displayQuestions();
    },
   //decrement the timer and update the user interface, stop the timer at 0.
    countdown: function(){
        gameStart.timeRemaining--;
        $("#timer").text("Time Remaining: "+ gameStart.timeRemaining);
        if (gameStart.timeRemaining === 0){
          gameStart.stopTimer();
          $("#timer").empty();
        
     }
    
    },
    
    //stop the timer and check the answers.
    stopTimer: function(){
        clearInterval();
        trivia.checkAnswers();
    },
     //hide the quetions and display the end page with results.
    showEndPage: function(numCorrect, numIncorrect, numUnanswered){
      $("#end-page").show();
      $("#questions-box").empty();
      $("#timer").empty();
      $("#timer").hide();
      $("#correct-answers").text("Correct answers: " + numCorrect);
      $("#incorrect-answers").text("Incorrect answers: " + numIncorrect);
      $("#unanswered").text("Skipped questions: " + numUnanswered);
    }
}

    
      var trivia = {
      //pull questions from the array of questions, loop through them,and append to user interface.
      displayQuestions: function(){
         var divContainer = $("#questions-box");
         divContainer.append('<h2>Answer the following questions:<h2>');
         for (var i = 0; i < questionList.length; i++){
            divContainer.append('<div id="question">' + questionList[i].question + '</div>');

            var answer1 = questionList[i].answers[0];
            var answer2 = questionList[i].answers[1];
            var answer3 = questionList[i].answers[2];
            var answer4 = questionList[i].answers[3];
            //append the Trivia Multiple questions page with four answers to choose from.
            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label-answers" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
  
            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label-answers" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
      
            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label-answers" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
    
            divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label-answers" id="radio'+i+'label" for="radio'+i+'">' + answer4 + '</label></div>');
        
    
         };
        //add a Done button to the end of the page and register its click handler.
           var doneButton = '<button class="btn btn-primary" id="done-button" type="submit">Done</button>';
           divContainer.append(doneButton);
           $("#done-button").on("click", gameStart.stopTimer);
            
        },
    
        //test if the user answers are correct, incorrect, or if there are unanswered questions.
        checkAnswers: function(){
        var correctAnswer;
        var userAnswer;
        var numCorrect = 0;
        var numIncorrect = 0;
        var numUnanswered = 0;
        //loop through to compare the text of the label with the user answers and increment score counts.
        for (var i = 0; i < questionList.length; i++){
        correctAnswer = questionList[i].correct;
        userAnswer = $('input[id=radio'+i+']:checked + label').text();
        console.log(i);
        if (userAnswer === correctAnswer){
            numCorrect++;
        } else if (userAnswer === ""){
            numUnanswered++;
        } else if (userAnswer !== correctAnswer){
            { numIncorrect++;}

        }
     }
        //show the end page with the score tally.
        gameStart.showEndPage( numCorrect, numIncorrect, numUnanswered);
    },
 }


   //array of questions, possible answers, and the correct answer.
   var questionList = 
   [
       
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
        answers: ["Angora Goat", "Stallion Horse", "Zebra", "Monkey"],
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
    }
]

    

