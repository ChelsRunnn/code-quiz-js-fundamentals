var questions = [
    {ask: "Horses can rotate their ears 180 degrees and move them independantly from one another. How many muscles doe horses have in their ears?",
     answer: ["7", "15", "32", "10"],
     correct: "10"},
    {ask: "On average, horse hearts weigh between 4kg and 4.5kg, and are about the same size as which of the following:",
     answer: ["A grapefruit", "A basketball", "A tennis ball", "A  microwave"],
     correct: "A basketball"},
    {ask: "Oh no! Your horse is having trouble sweating. What Cowboy staple can you share to help your steed?",
     answer: ["Steak", "Beer", "Tabbaco", "Fireside guitar tunes"],
     correct: "Beer"},
     {ask: "All existing domestic horse breeds can fit into 5 categories. Which of the following is NOT one of those five?",
     answer: ["Warm-blooded", "Miniature", "Pony", "Toy", "Hot-blooded"],
     correct: "Toy"},
     {ask: "Horses are measured in 'Hands'. How many inches is 1 hand?",
     answer: ["10", "4", "6", "7"],
     correct: "4"}
]

// timer counts down to zero
var time = document.querySelector("#timer");
var secondsLeft = 30;

function startClock () {
    var timeInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = "Time: " + secondsLeft 

    if(secondsLeft === 0) {
        clearInterval(timeInterval);
        time.textContent ="You Got Bucked Off!"
    }
    }, 1000)
    // var startButton = document.querySelector("#startButton")

    // startButton.addEventListener("click", function(event) {
    //     console.log(startButton)
    // })
}

startClock()

var startButton = document.querySelector("#startButton");

startButton.addEventListener("click", function(event) {
    var intro = document.querySelector("#intro");
    console.log(intro);

    intro.setAttribute("class", "hidden")

    var quiz = document.querySelector("#quiz");
    console.log(quiz);

    quiz.setAttribute("class", "shown");
})

var askText = document.querySelector("#askText");
 console.log(questions);
 console.log(questions[0].ask);

askText.textContent = questions[0].ask;

// ! Can these go in a FOR loop?
var answerTextA = document.querySelector("#a");
 console.log(answerTextA);
answerTextA.textContent = questions[0].answer[0];

var answerTextB = document.querySelector("#b");
 console.log(answerTextB);
answerTextB.textContent = questions[0].answer[1];

var answerTextC = document.querySelector("#c");
 console.log(answerTextC);
answerTextC.textContent = questions[0].answer[2];

var answerTextD = document.querySelector("#d");
 console.log(answerTextD);
answerTextD.textContent = questions[0].answer[3];


var choice = document.querySelector(".choice")
choice.addEventListener("click", function(event) {
    // if (event.target === questions[0].correct) {
    console.log("Darn tootin!")
    // } else {
        console.log("Not so fast, partner!")
//     }
})
// ! stopped here for the night: option a is clickable only.

// NEXT: make options clickable (setAttribute, button?)

// function: correct/incorrect feedback displayed 

// function: time added/deducted for correct/incorrect answer

// function: next question, on click of any button a-d
