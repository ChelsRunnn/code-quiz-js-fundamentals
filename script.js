var questions = [
    {
        ask: "Your trusty steed can hear better than you! Horses can rotate their ears nearly 180 degrees and move them independantly from one another. How many muscles do horses have in their ears?",
        answer: ["7", "15", "32", "10"],
        correct: "10"
    },
    {
        ask: "On average, horse hearts weigh between 4kg and 4.5kg, and are about the same size as which of the following:",
        answer: ["A grapefruit", "A basketball", "A tennis ball", "A  microwave"],
        correct: "A basketball"
    },
    {
        ask: "Oh no! Your horse is having trouble sweating. What Cowboy staple can you share to help your steed?",
        answer: ["Steak", "Beer", "Tabbaco", "Fireside guitar tunes"],
        correct: "Beer"
    },
    {
        ask: "All existing domestic horse breeds can fit into 5 categories. Which of the following is NOT one of those five?",
        answer: ["Warm-blooded", "Miniature", "Pony", "Toy", "Hot-blooded"],
        correct: "Toy"
    },
    {
        ask: "Horses are measured in 'Hands'. How many inches is 1 hand?",
        answer: ["10", "4", "6", "7"],
        correct: "4"
    }
]

// timer counts down to zero
var time = document.querySelector("#timer");
var secondsLeft = 30;

function startClock() {
    var timeInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = "Time: " + secondsLeft

        if (secondsLeft === 0) {
            clearInterval(timeInterval);
            time.textContent = "You Got Bucked Off!"
        }
    }, 1000)
}


var startButton = document.querySelector("#startButton");
var quiz = document.querySelector("#quiz");
var intro = document.querySelector("#intro");
var end = document.querySelector("#end");

// Clicking "startButton" moves display to first quiz questions & starts timer
startButton.addEventListener("click", function (event) {
    var intro = document.querySelector("#intro");
    console.log(intro);

    intro.setAttribute("class", "hidden")

    var quiz = document.querySelector("#quiz");
    console.log(quiz);

    quiz.setAttribute("class", "shown");

    startClock()
})

// ! Can these go in a FOR loop?
var askText = document.querySelector("#askText");
askText.textContent = questions[0].ask;

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


// ! function for navigating through Qs
var index = 0
var currentQuestion;
var currentAnswerA;
var currentAnswerB;
var currentAnswerC;
var currentAnswerD;

function navigate() {
    if (secondsLeft > 0)
    if (index < questions.length) {  
        index++
        console.log(index);

        currentQuestion = questions[index].ask;
        askText.textContent = currentQuestion

        currentAnswerA = questions[index].answer[0];
        answerTextA.textContent = currentAnswerA
        currentAnswerB = questions[index].answer[1];
        answerTextB.textContent = currentAnswerB
        currentAnswerC = questions[index].answer[2];
        answerTextC.textContent = currentAnswerC;
        currentAnswerD = questions[index].answer[3];
        answerTextD.textContent = currentAnswerD;
    } else {
        quiz.setAttribute("class", "hidden");
        end.setAttribute("class", "shown");
    }
}

var feedback = document.querySelector("#feedback")

var nextQuestion = document.querySelector("#nextQuestion")
nextQuestion.addEventListener("click", function (event) {
    // console.log(event.target)
    console.log(nextQuestion)
    if (event.target.matches(".choice")) {
        console.log(event.target)

    }

    navigate()
    // Feedback for right/wrong chocie
    // if(event === questions[0].correct[0]) {
    // feedback.textContent = ("Darn Tootin!")
    // } else {
    //     feedback.textContent = ("Not so fast, Partner.")
    // }

    // !here down to end of function works when active.
    // askText.textContent = questions[1].ask;

    // var answerTextA = document.querySelector("#a");
    //  console.log(answerTextA);
    // answerTextA.textContent = questions[1].answer[0];

    // var answerTextB = document.querySelector("#b");
    //  console.log(answerTextB);
    // answerTextB.textContent = questions[1].answer[1];

    // var answerTextC = document.querySelector("#c");
    //  console.log(answerTextC);
    // answerTextC.textContent = questions[1].answer[2];

    // var answerTextD = document.querySelector("#d");
    //  console.log(answerTextD);
    // answerTextD.textContent = questions[1].answer[3];

})

// Use local storage for scoreboard
var userInput = document.querySelector("#initials");
var scores = [];
function storeScores() {
    localStorage.setItem("scores", JSON.stringify(scores));
}







// function: correct/incorrect feedback displayed 

// function: time added/deducted for correct/incorrect answer

