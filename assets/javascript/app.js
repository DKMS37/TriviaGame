$(document).ready(function(){

 // start the game when user clicks on Start button
 $("#start-button").on("click", gameStart.startTimer);

 

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
          $("#timer").hide();
        }
          
    },
    
    // stop the timer and reset
    stopTimer: function(){
        clearInterval();
        
    },
// array of objects with the questions, possible answers, and the correct answer
    questionList = [{
        question: "What kind of animal is a Komodo Dragon?",
        answer: ["Bird", "Snake", "Dog", "Lizard"],
        correct: "Lizard"
    },
    {   question: "Which Bird has the largest wingspan of any living bird?",
        answer: ["American Eagle", "Wandering Albatros", "Pelican", "Taiwanese Pigeon"],
        correct: "Wandering Albatros"
    },
    {   quetions: "What kind of creature is a Portuguese Man O War?",
        answer: ["Dog", "Cat", "Horse", "Jellyfish"],
        correct: "Jellyfish"
    },
    {   question: "Which creatures produce Gossamer?",
        answer: ["Snakes", "Worms", "Spiders", "Scorpions"],
        correct: "Spiders"
    },
    {   question: "From which animal is a Mohair obtained?",
        answer: ["Angora Goat", "Stalion Horse", "Zebra", "Monkey"],
        correct: "Angora Goat"
    },
    {   question: "How many Arms do most Starfish have?",
        answer: ["Six", "Five", "Two", "Ten"],
        correct: "Five"
    },
    {   question: "What is a Cabbage White?",
        answer: ["Rabbit", "Deer", "Turtle", "Butterfly"],
        correct: "Butterfly"
    },
    {   question: "What is the scientific name for the trunk of an Elephant?",
        answer: ["Canis Rufus", "Alouatta", "Proboscis", "Esox"],
        correct: "Proboscis"
    },
    {   question: "Murder is the collective noun for a group of which Bird?",
        answer: ["Owls", "Vultures", "Kingfishers", "Crows"],
        correct: "Crows"
    },
    {   question: "Which Ape gets its name from the Malay word meaning Man of the Forest?",
        answer: ["Orangutan", "Gorilla", "Chimpanzee", "Gibbon"],
        correct: "Orangutan"
    }],



};});