$(document).ready(function () {

    let correctCnt = 0;
    let incorrectCnt = 0;
    let unansweredCnt = 0;

    let intervalId;
    let answerTime = 30;

    let beggingTheQuestion = "Begging The Question";
    let circularReasoning = "Circular Reasoning";
    let strawMan = "Straw Man";
    let adHominem = "Ad Hominem";
    let slipperySlope = "Slippery Slope";
    let nonSequitur = "Non Sequitur";


    $(".start-button").click(function () {

        $(".start-button").detach();
        intervalId = setInterval(decrement, 1000);
        function decrement() {
            answerTime -= 1;
            $(".time-count").text(`Time Remaining: ${answerTime}`);
            if (answerTime === 0) {
                clearInterval(intervalId);
            }
        }
        $(".question").text("Stating an argument in a way that assumes its conclusions are true--thereby avoiding the controversial point")
        $("#answers").append(`<div class="btn-group-vertical" id="firstQ"> 
    <button type="button" class="btn btn-primary">${nonSequitur}</button>
    <button type="button" class="btn btn-primary">${strawMan}</button>
    <button type="button" class="btn btn-primary">${beggingTheQuestion}</button>
    <button type="button" class="btn btn-primary">${slipperySlope}</button> </div>`)
        

        $(".btn-group-vertical").click(function (event) {
            if (event.target.textContent === "Begging The Question") {
                correctCnt += 1;

                console.log(correctCnt);
            } 
            else {
                incorrectCnt += 1;
            }
        });

        if (answerTime == 0) {
            unansweredCnt += 1;
        }


    });




//     on click of answer button...

//     -if selected right answer
//     set timer for 5 seconds--clear answers, "Correct! <br> the correct answer was..." (where question was), add image/gif (where answers were), correctCnt ++

//     -if selected wrong answer, 
//     set timer for 5 seconds--clear answers, "Nope! <br> the correct answer was..." (where question was), add image/gif (where answers were), incorrectCnt ++


// -if timer <= 0
// set timer for 5 seconds--clear answers, "You ran out of time! <br> the correct answer was..." (where question was), add image/gif (where answers were), incorrectCnt ++, unansweredCnt ++




// clear question:
// "All done, here's how you did!"

// clear answers:
// append Correct Answers: correctCnt
// append Incorrect Answers: incorrectCnt
// append Unanswered: unansweredCnt


// append large button Start Over?


// onclick of start over button, reset to what happens after onclick of start button

































});