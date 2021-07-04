// referencing html tags with id using queryselector
var startButton = document.querySelector("#startButton");
var timeCount = document.querySelector(".timer-count");
var secondsTextbox = document.querySelector(".secondsTextbox");
var questionsTextbox = document.querySelector("#questionBox");
var choiceReview = document.querySelector("#choiceReview");
var choiceA = document.querySelector("#choiceA");
var choiceB = document.querySelector("#choiceB");
var choiceC = document.querySelector("#choiceC");
var choiceD = document.querySelector("#choiceD");


var questionsIndex = 0;
var numberCorrect = 0;

timer = 75;

// an array will hold the questions with the questions themselves inside and object as strings
// inside the objects the options are in an array because we want to select just one option and not all the options as one string

var questionsAsked = [
    {
        question: "The condition in an if/else estatement is enclosed within ____.",
        options: ["quotes", "parentheses", "curly brackets", "square brackets"],
        answer: "parantheses"
    },
    {
        question: "Commonly used data types DO NOT include:",
        options: ["strings", "alerts", "booleans", "numbers"],
        answer: "alerts"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["terminal/bash", "for loops", "javascript", "console log"],
        answer: "console log"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        options: ["curly brackets", "paranthesis", "quotes", "commas"],
        answer: "quotes"
    },
    {
        question: "Arrays in javascript can be used to store ____.",
        options: ["other arrays", "numbers and strings", "booleans", "all of the above"],
        answer: "all of the above"
    },
];


function renderQuestions() {
    questionsTextbox.textContent = questionsAsked[questionsIndex].question;
    choiceA.textContent = questionsAsked[questionsIndex].options[0];
    choiceB.textContent = questionsAsked[questionsIndex].options[1];
    choiceC.textContent = questionsAsked[questionsIndex].options[2];
    choiceD.textContent = questionsAsked[questionsIndex].options[3];
}

function checkChoice (choice) {

    if (questionsAsked[questionsIndex].answer === questionsAsked[questionsIndex].options[choice]) {
        choiceReview.textContent = "Thats Right!"
        numberCorrect++
    } else {
        timer - 10;
        timeCount.textContent = timer;
        choiceReview.textContent = `Oh no that doesn't seem right, the correct answer is ${questionsAsked[questionsIndex].answer}`;
    }

    questionsIndex++

    if (questionsIndex < questionsAsked.length) {
        renderQuestions();
    } else {
        
    }
}