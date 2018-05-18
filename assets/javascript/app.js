// PSUEDO CODE
/*
ONLY a button on the screen that says "Play Game"
user clicks button and game starts
button is onclick function that has a "game" function called inside.
once clicked. on the screen comes the timer.
timer will start at 10:00:00 and count down. this will be a function.
inside the function have something go through it that "adds Time" to it when user gets answer right.

jquery question and the answers below it.  each question be an object.
q1.hint.answers.value of correct answer.

if answer = value { answer is correct)} if answer = wrong (wrong is applied);
correct answer value goes into empty array.
wrong answer goes into empty array.
if right timer + 00:00:30. if wrong timer continues to go down.
screen appears with right or wrong answer. after 5 seconds goes away and new question shows up.
total of 5 questions.
once game is over screen appears saying win or lost and button to play again. 
game resets.



*/

//function that starts the game

$(document).ready(function () {
    startGame();
});

function startGame() {
    var timerSpot = $("#startGame");
    var title = $("<h1>Play Game</h1>");
    var btnStart = $("<input></input>");


    timerSpot.append(title);
    timerSpot.append(btnStart);
    btnStart.attr({ type: 'button', value: 'Click Me', class: 'asdf' });

    $(this).click(function () {
        $("#startGame").empty();
        timerDisplay();
        // need to add function for questions after i figure out timer
    });

}
function timerDisplay(addTime) {
    timerSpot = $("#startGame");
    var title = $("<h1>Time Left</h1>");
    var timeSpot = $("<span id='time'>10</span>")
    timerSpot.append(title);
    timerSpot.append(timeSpot);
    var timerId;
    var timeOutId;



    var timeLeft = 10;
    // time goes to zero do this
    function countdown() {
        timerId = setInterval(countdown, 1000);
        if (timeLeft == 0) {
            clearTimeout(timerId);
            // $('audio#timeOut')[0].play();
            // $(".qBox").hide();
            //setimout for 3secconds
            timeLeft = 10;
            timeOutId = setTimeout(function () {
                //increase current index by one
                ++currentIndex
                //display next questions
                //call generate questions again

                timerId = setInterval(countdown, 1000);
            }, 3000)
        } else {
            secondsLeft = $("#time");
            timeLeft--;
            $("#time").text(timeLeft);
            console.log(timeLeft);

        }
    }
    countdown();
}

