$(document).ready(function () {

    let correctCnt = 0;
    let incorrectCnt = 0;
    let unansweredCnt = 0;

    let intervalId;
    let answerTime = 30;

    let beggingTheQuestion = "Begging The Question";
    let strawMan = "Straw Man";
    let adHominem = "Ad Hominem";
    let slipperySlope = "Slippery Slope";
    let nonSequitur = "Non Sequitur";

    let questions = ["When an argument's conclusion is contained within its premises.", "Dealing with the weakest form of someone else's argument.", "Attacking the person rather than their argument", "Assuming that just because one thing happens, a snowballing effect of consequences will occur", "The argument's conclusion simply does not follow from its premises"];

    let answers = [beggingTheQuestion, strawMan, adHominem, slipperySlope, nonSequitur];

    let imgList = ["https://blacklabellogic.files.wordpress.com/2016/01/begging-the-question-animation1.gif?w=80&h=80&zoom=2", "https://siriuscoffee.files.wordpress.com/2010/03/straw-man_500.gif?w=80&h=80&zoom=2", "http://cdn1.theodysseyonline.com/files/2015/03/08/6356144326540957231904516395_leslie-knope-angry-face-gif-i12.gif", "https://media1.tenor.com/images/2050cdd916e0788bfe7fbad2912e8cad/tenor.gif?itemid=3641311", "https://media.giphy.com/media/3o6ZsTxAACbkOVzatq/giphy.gif"];

    let choicesAdder = [`<div class="btn-group-vertical"> 
    <button type="button" class="btn btn-primary">${nonSequitur}</button>
    <button type="button" class="btn btn-primary">${strawMan}</button>
    <button type="button" class="btn btn-primary">${beggingTheQuestion}</button>
    <button type="button" class="btn btn-primary">${slipperySlope}</button> </div>`,
    `<div class="btn-group-vertical"> 
    <button type="button" class="btn btn-primary">${adHominem}</button>
    <button type="button" class="btn btn-primary">${nonSequitur}</button>
    <button type="button" class="btn btn-primary">${slipperySlope}</button>
    <button type="button" class="btn btn-primary">${strawMan}</button> </div>`,
    `<div class="btn-group-vertical"> 
    <button type="button" class="btn btn-primary">${slipperySlope}</button>
    <button type="button" class="btn btn-primary">${nonSequitur}</button>
    <button type="button" class="btn btn-primary">${adHominem}</button>
    <button type="button" class="btn btn-primary">${strawMan}</button> </div>`,
    `<div class="btn-group-vertical"> 
    <button type="button" class="btn btn-primary">${nonSequitur}</button>
    <button type="button" class="btn btn-primary">${strawMan}</button>
    <button type="button" class="btn btn-primary">${beggingTheQuestion}</button>
    <button type="button" class="btn btn-primary">${slipperySlope}</button> </div>`,
    `<div class="btn-group-vertical"> 
    <button type="button" class="btn btn-primary">${adHominem}</button>
    <button type="button" class="btn btn-primary">${nonSequitur}</button>
    <button type="button" class="btn btn-primary">${beggingTheQuestion}</button>
    <button type="button" class="btn btn-primary">${slipperySlope}</button> </div>`];


    let answering = true;
    let i = 0;

    var startButton = `<button type="button" class="btn btn-primary btn-lg start-button">Start</button>`;
    $(".time-count").append(startButton);

    $(".start-button").click(function () {
        $(".start-button").detach();

        function askQuestion() {
            while (answering == true) {
                answering = false;

                intervalId = setInterval(decrement, 1000);
                function decrement() {
                    answerTime -= 1;
                    $(".time-count").show();
                    $(".placeholder").hide();
                    $(".time-count").text(`Time Remaining: ${answerTime}`);


                    if (answerTime === 0) {
                        clearInterval(intervalId);
                        unansweredCnt += 1;
                        incorrectCnt += 1;
                        answerTime = 30;
                        $(".time-count").hide();
                        $("#answers").empty();
                        $(".question").text(`You ran out of time! The correct answer was ${answers[i]}!`);
                        $("#answers").append(`<img src=${imgList[i]} />`);
                        setTimeout(function () {
                            answering = true;
                            i += 1;
                            if (i === 5) {
                                return endAndRestart();
                            }
                            askQuestion();
                        }, 1000);

                    }
                }
                $(".question").text(questions[i]);
                $("#answers").empty();
                $("#answers").append(choicesAdder[i]);


                $(".btn-group-vertical").click(function (event) {
                    if (event.target.textContent === answers[i]) {
                        clearInterval(intervalId);
                        correctCnt += 1;
                        answerTime = 30;
                        $(".time-count").hide();
                        $("#answers").empty();
                        $(".question").text(`Correct! The correct answer was ${answers[i]}!`);
                        $("#answers").append(`<img src=${imgList[i]} />`);
                        setTimeout(function () {
                            answering = true;
                            i += 1;
                            if (i === 5) {
                                return endAndRestart();
                            }
                            askQuestion();
                        }, 1000);

                    }
                    else {
                        clearInterval(intervalId);
                        incorrectCnt += 1;
                        answerTime = 30;
                        $(".time-count").hide();
                        $("#answers").empty();
                        $(".question").text(`Nope! The correct answer was ${answers[i]}!`);
                        $("#answers").append(`<img src=${imgList[i]} />`);
                        setTimeout(function () {
                            answering = true;
                            i += 1;
                            if (i === 5) {
                                return endAndRestart();
                            }
                            askQuestion();
                        }, 1000);

                    }
                });

            }
        }
        askQuestion();


        function endAndRestart() {
            clearInterval(intervalId);
            $(".time-count").empty();
            $(".question").empty();
            $("#answers").empty();
            $(".question").append(`<p>All done--here's how you did!</p>`);
            $(".question").append(`<p>Correct Answers:  ${correctCnt}</p>`);
            $(".question").append(`<p>Incorrect Answers:  ${incorrectCnt}</p>`);
            $(".question").append(`<p>Unanswered:  ${unansweredCnt}</p>`);
            $("#answers").append(`<button type="button" class="btn btn-primary btn-lg restart-button">Start Over?</button>`);
            $(".restart-button").click(function () {
                $(".restart-button").detach();
                $(".time-count").empty();
                $(".question").empty();
                $("#answers").empty();
                correctCnt = 0;
                incorrectCnt = 0;
                unansweredCnt = 0;
            
                intervalId;
                answerTime = 30;
                i = 0;
                askQuestion();
            });
        }
    });

    
});