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

// var scoreboard = [];
// var storageArray = JSON.parse(localStorage.getItem("scores"));
// scoreboard.push(scores)


// timer counts down to zero
var time = document.querySelector("#timer");
var secondsLeft = 40;
var timeInterval;

// function for timer, including what happens when timer reaches 0
function startClock() {
    timeInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = "Time: " + secondsLeft

        if (secondsLeft === 0) {
            clearInterval(timeInterval);
            time.textContent = "You Got Bucked Off!"
            quiz.setAttribute("class", "hidden");
            end.setAttribute("class", "shown");
        }
    }, 1000)
}


var startButton = document.querySelector("#startButton");
var quiz = document.querySelector("#quiz");
var intro = document.querySelector("#intro");
var end = document.querySelector("#end");
var scorecard = document.querySelector("#scorecard");

// Clicking "startButton" moves display to first quiz questions & starts timer
startButton.addEventListener("click", function (event) {
    console.log(intro);
    intro.setAttribute("class", "hidden")

    console.log(quiz);
    quiz.setAttribute("class", "shown");

    startClock()
})

// Populates correct text for the first question of the quiz
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


var index = 0
var currentQuestion;
var currentAnswerA;
var currentAnswerB;
var currentAnswerC;
var currentAnswerD;

// function for moving through questions
function navigate() {
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
    } 
    // if clock runs to zero, or the last question is clicked, display moves to initial entry page and timer stops
    else {
        clearInterval(timeInterval)
        quiz.setAttribute("class", "hidden");
        end.setAttribute("class", "shown");
        console.log(timeInterval)
    }
}


var nextQuestion = document.querySelector("#nextQuestion")
nextQuestion.addEventListener("click", function (event) {
    // console.log(event.target)
    console.log(nextQuestion)
    if (event.target.matches(".choice")) {
        console.log(event.target)
    }

    navigate()
})

// Use local storage for scoreboard
var submitUserInput = document.querySelector("#submit");
var userInput = document.querySelector("#initials");

var storageArray = JSON.parse(localStorage.getItem("storageArray")) || [];
console.log(storageArray);

console.log(submitUserInput.value)

submitUserInput.addEventListener("click", function (event) {
    event.preventDefault();
    // var storageArray = JSON.parse(localStorage.getItem("storageArray")) || [];

    var scores = {
        initials: userInput.value.trim(),
        score: secondsLeft
    };
    storageArray.push(scores);

    console.log(scores)
    localStorage.setItem("storageArray", JSON.stringify(storageArray));

    end.setAttribute("class", "hidden");
    scorecard.setAttribute("class", "shown");
    // displayScores()
})

// function displayScores (){
for (var i = 0; i < storageArray.length; i++) {
    var li = document.createElement("li");
    var text = document.createTextNode(storageArray[i]);
    li.appendChild(text);
    document.getElementById("storedScores").appendChild(li);
}
// }

// 1) submit clicked= transition to score-card page & create FOR loop to create li for every array pair
// .textContent for each item to display 


// function: time added/deducted for correct/incorrect answer

