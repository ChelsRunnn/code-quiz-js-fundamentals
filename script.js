var questions = [
    {ask: "Horses can rotate their ears 180 degrees and move them independantly from one another. How many muscles doe horses have in their ears?",
     answer: ["7", "15", "32", "10"],
     correct: "10"},
    {ask: "On average, horse hearts weigh between 4kg and 4.5kg, and are about the same size as which of the following:",
     answer: ["A grapefruit", "A basketball", "A tennis ball", "A  microwave"],
     correct: "A basketball"},
    {ask: "The worlds smallest horse breed is a Falabella, which ranges from 15in to 30in in height. The tallest horse on record, Sampson stood at which measurement?",
     answer: ["5 feet 6.5in", "8 feet 2in", "7 feet 2.5in", "10 feet 0.5in"],
     correct: "7 feet 2.5in"},
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
// function: correct/incorrect feedback displayed 

// function: time added/deducted for correct/incorrect answer

// function: next question, on click of any button a-d


var container = document.querySelector(".container");
var choices = document.querySelector(".choices");

container.addEventListener("click", function(event) {
    var element = event.target;
    console.log(element)


// MOVE ALL ELEMENTS TO HTML
    // if (element.matches("#startButton")) {
    //     // insert startQuiz function here?
    //     var choiceA = document.createElement("button");
    //     var choiceB = document.createElement("button");
    //     var choiceC = document.createElement("button");
    //     var choiceD = document.createElement("button");

    //     choices.appendChild(choiceA);
    //     choices.appendChild(choiceB);
    //     choices.appendChild(choiceC);
    //     choices.appendChild(choiceD);
    // console.log(choiceA)
    // }
})

// on click ()
// if statement for correct choice, else wrong