$(document).ready(function () {

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
        $("#answers").append(`<div class="btn-group-vertical"> 
    <button type="button" class="btn btn-primary" id="a">${nonSequitur}</button>
    <button type="button" class="btn btn-primary" id="b">${strawMan}</button>
    <button type="button" class="btn btn-primary" id="c">${beggingTheQuestion}</button>
    <button type="button" class="btn btn-primary" id="d">${slipperySlope}</button> </div>`)
        
        $()
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