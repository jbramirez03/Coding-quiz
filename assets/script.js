// referencing html tags with id using queryselector
var startButton = document.querySelector("#startButton");
var QuestiontextBox = document.querySelector(".question-textbox");
var timeCount = document.querySelector(".timer-count");
var secondsTextbox = document.querySelector(".secondsTextbox");


// making a interval function that creates a timer
function countdown () {
// timer variable defined
var timer = 60;

var timeInterval = setInterval(function () {
    if (timer > 1) {
        timeCount.textContent = timer;
        timer--;
    } else if (timer === 1) {
        timeCount.textContent = timer;
        timer--;
        secondsTextbox.textContent = "Second remaining";
    } else {
        timeCount.textContent = "";
        secondsTextbox.textContent = "";
        clearInterval(timeInterval);
    }

}, 1000);
}


countdown();
// an array will hold the questions with the questions themselves inside and object as strings
// inside the objects the options are in an array because we want to select just one option and not all the options as one string

var questionsAsked = [
    {
        question: "",
        options: ["", "", "", ""],
        answer: ""
    },
    {
        question: "",
        options: ["", "", "", ""],
        answer: ""
    },
    {
        question: "",
        options: ["", "", "", ""],
        answer: ""
    },
    {
        question: "",
        options: ["", "", "", ""],
        answer: ""
    },
    {
        question: "",
        options: ["", "", "", ""],
        answer: ""
    },
    {
        question: "",
        options: ["", "", "", ""],
        answer: ""
    }
];