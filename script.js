var startButton = document.querySelector(".start-button");
var quiz = document.querySelector(".quiz");
var questionEl = document.querySelector("#question");
var optionsEl = document.querySelector("#options");
var timeEl = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen");
var highScores = document.querySelector(".highscore");
var scoreEl = document.querySelector(".score");
var scoreFormEl = document.querySelector("#highscore-form")




// create array of string objects for the questions, choices, and answers

var javascriptQuestions = [
    {
        question: "Which of the fullowing elements is used to embed Javascript code?",
        options: ["a", "link", "href", "script"],
        answer: "script"
    },
    {
        question: "Which of the fullowing will output a boolean value?",
        options: ["console.log(5 === 5);", "consule.log('boulean');", "consule.log('5 === 5');", "consule.log('true');"],
        answer: "console.log(5 === 5);"
    },
    {
        question: "(T/F) The value of a 'var' variable can be re-defined.",
        options: ["True", "False", "null", "0"],
        answer: "True"
    },
    {
        question: "(T/F) Javascript can be used for styling elements.",
        options: ["True", "False", "158", "7985413"],
        answer: "True"
    }
];
var currentQuestionNumber = 0;
var timer;
var score;
var time = 60;



// function started when start button is clicked, this function calls the startTimer function for time countdown
function startGame() {
// hide start screen
    startScreen.setAttribute("class", "hidden");
    // display question container
    quiz.classList.remove("hidden");
    startTimer();
    getQuestions();
}

// the startTimer function starts and ends the timer

function startTimer() {
    // start timer countdown
    timer = setInterval(function() {
        time--;
        timeEl.textContent = time;
        // if (timerCount >= 0) {

        // }
    },1000)

}

function getQuestions() {
    var currentQuestion = javascriptQuestions[currentQuestionNumber];

    questionEl.textContent = currentQuestion.question;

    optionsEl.innerHTML = "";

    // for loop to create choices
    for (var i = 0; i < currentQuestion.options.length; i++){
        var option = currentQuestion.options[i];
        var createBTN = document.createElement("button");
        createBTN.setAttribute("class", "options");
        createBTN.setAttribute("value", option);
        createBTN.textContent = option;
        optionsEl.appendChild(createBTN);
    }
}

function checkAnswer(event){
    var optionBTN = event.target;
    if (!optionBTN.matches(".options")) {
        return;
    }

    if (optionBTN.value !== javascriptQuestions[currentQuestionNumber].answer){
        time -= 10;
        timeEl.textContent = time;
    } else {
        currentQuestionNumber++;
    }

    if (time <= 0 || currentQuestionNumber === javascriptQuestions.length){
        gameover();
    } else {
        getQuestions();
    }

}

function gameover() {
    // stop timer & set score
    score = time;
    scoreEl.textContent = "Score :" + score;

    clearInterval(timer);
    timeEl.textContent = "";
    
    // hide question screen show highscore
    quiz.classList.add("hidden");
    highScores.classList.remove("hidden");
}

function handleFormSubmit(event){
    event.preventDefault();

    var userRecord = input("highscore-input").val();

    if (!userRecord) {
        console.log("No Initials entered!");
        return;
    }

    // append to highscore list

    // clear the form


}





// event listener for start button click
startButton.addEventListener("click", startGame);

optionsEl.addEventListener("click", checkAnswer);

scoreFormEl.onfullscreenchange('submit', handleFormSubmit);


