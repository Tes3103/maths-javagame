// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listenener to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementByTagName("button");

    for (let button of buttons){
        button.addEventListener("click" , function() {
            if (this.getAttribute("data.type")=== "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type")
                alert('You clicked ${gameType}');
            }
        })


    }
})


function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function increentWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}