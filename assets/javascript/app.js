var questionBank = [
    {
        question: "What is the capital of Utah?",
        answerArray: ["Provo", "St. George", "Kern", "Salt Lake City"],
        answerIndex: "Salt Lake City",
        image: "<img src=" + '"' + 'assets/images/mormon.jpg' + '"' + "/>"
    },
    {
        question: "What type of dog is Scooby Doo?",
        answerArray: ["Pit Bull", "Beagle", "Mastiff", "Great Dane"],
        answerIndex: "Great Dane",
        image: "<img src=" + '"' + 'assets/images/scooby.jpg' + '"' + "/>"
    },
    {
        question: "What is Donald Trump's Middle Inital?",
        answerArray: ["J", "P", "Q", "D"],
        answerIndex: "J",
        image: "<img src=" + '"' + 'assets/images/trump.jpeg' + '"' + "/>"
    },
    {
        question: "How old is my dog max?",
        answerArray: ["3", "4", "1", "12"],
        answerIndex: "12",
        image: "<img src=" + '"' + 'assets/images/old.jpg' + '"' + "/>"
    },
    {
        question: "what is the best movie ever?",
        answerArray: ["war games", "toy story", "2001: space odyssey", "james bond"],
        answerIndex: "war games",
        image: "<img src=" + '"' + 'assets/images/war.jpg' + '"' + "/>"
    },
    {
        question: "My dogs name is?",
        answerArray: ["thor", "max", "rex", "steve"],
        answerIndex: "max",
        image: "<img src=" + '"' + 'assets/images/max.jpg' + '"' + "/>"
    }


]

var correctAnswers = 0;

var wrongAnswers = 0;

var startingTime = 60;

var timerId;



$(document).ready(function () {


    startGame();

    $("#startGame").on("click", ".asdf", function () {
        startTrivia();
    })

    $("#questionHolder").on("click", ".answerButton", function () {

        $("#imageHolder").empty();


        var chosenAnswer = $(this)[0].dataset.value;
        var questionArrayIndex = $(this)[0].dataset.index

        checkIfCorrect(questionBank, questionArrayIndex, chosenAnswer)
    })
});

function checkIfCorrect(questionArray, index, selectedAnswer) {
    var nextIndex = parseInt(index) + 1
    if (questionArray[index].answerIndex === selectedAnswer) {

        correctAnswers++
        var imageContainer = $("#imageHolder");
        imageContainer.append(questionBank[index].image);
        // imageContainer.append("<img src=" + '"' + 'assets/images/e.jpg' + '"' + "/>");




        if (questionArray.length === nextIndex) {
            displayResult();

            console.log(questionArray.image)
        }
        else {
            clearTimeout(timerId);
            countdown(startingTime + 10);
            displayQuestions(questionArray, nextIndex);
        }




    }
    else {
        wrongAnswers++;
        if (questionArray.length === nextIndex) {
            displayResult();
        }
        else {
            displayQuestions(questionArray, nextIndex);
        }

    }
}

function displayResult() {
    $("#imageHolder").empty();
    $("#startGame").empty();
    $("#questionHolder").empty();

    var correctAnswerDiv = $("<div>");
    var wrongAnswersDiv = $("<div>");

    correctAnswerDiv.text("Correct Answers: " + correctAnswers);
    wrongAnswersDiv.text("Wrong Answers: " + wrongAnswers);

    $("#startGame").append(correctAnswerDiv);
    $("#startGame").append(wrongAnswersDiv);
}


function displayQuestions(questionArray, index) {
    console.log("displayQuestion Index Param: " + index);
    console.log(questionArray[index]);
    $("#questionHolder").empty();

    var questionDiv = $("<div>");
    questionDiv.text(questionArray[index].question);
    $("#questionHolder").append(questionDiv);

    for (var i = 0; i < questionArray[index].answerArray.length; i++) {
        var answerDiv = $("<button>");

        answerDiv.text(questionArray[index].answerArray[i]);
        answerDiv.attr(
            {
                class: "answerButton",
                "data-value": questionArray[index].answerArray[i],
                "data-index": index
            }
        )

        $("#questionHolder").append(answerDiv);
    }
}

function startGame() {
    var timerSpot = $("#startGame");
    var title = $("<h1>Play Game</h1>");
    var btnStart = $("<input></input>");


    timerSpot.append(title);
    timerSpot.append(btnStart);
    btnStart.attr({ type: 'button', value: 'Click Me', class: 'asdf' });

    // $(this).click(function () {

    // need to add function for questions after i figure out timer
    // });

}

function startTrivia() {
    $("#startGame").empty();
    timerDisplay();
    countdown(startingTime);
    displayQuestions(questionBank, 0);
}
function timerDisplay() {
    var timerSpot = $("#startGame");
    var title = $("<h1>Time Left</h1>");
    var timeSpot = $("<span id='time'>" + 60 + "</span>")
    timerSpot.append(title);
    timerSpot.append(timeSpot);
    // time goes to zero do this   
}


function countdown(timeLeft) {
    // var timeOutId;
    timerId = setTimeout(function () {
        timeLeft--;
        startingTime = timeLeft;
        // console.log(timeLeft);
        $("#time").text(timeLeft);
        if (timeLeft > 0) {
            return countdown(timeLeft);
        }
    }, 1000);
    // if (timeLeft == 0) {
    //     clearTimeout(timerId);
    //     // $('audio#timeOut')[0].play();
    //     // $(".qBox").hide();
    //     //setimout for 3secconds
    //     timeLeft = 10;
    //     timeOutId = setTimeout(function () {
    //         //increase current index by one
    //         ++currentIndex
    //         //display next questions
    //         //call generate questions again

    //         timerId = setInterval(countdown, 1000);
    //     }, 3000)
    // } else {
    //     secondsLeft = $("#time");
    //     timeLeft--;
    //     $("#time").text(timeLeft);
    //     console.log(timeLeft);

    // }
}
