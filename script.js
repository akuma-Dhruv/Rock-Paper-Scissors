/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {

    let x = Math.floor((Math.random() * 3) + 1);
    let choice = "";
    switch (x) {
        case 1:
            choice = "Rock";
            break;
        case 2:
            choice = "Paper";
            break;
        case 3:
            choice = "Scissors";
            break;
    }
    console.log(choice);
    return choice;

}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {

    let score = 0;

    if (playerChoice === computerChoice) {
        return score;

    }
    else if (playerChoice === "Rock") {
        if (computerChoice === "Paper") {
            score--;
        }
        else if (computerChoice === "Scissors") {
            score++;
        }
    }
    else if (playerChoice === "Paper") {
        if (computerChoice === "Scissors") {
            score--;
        }
        else if (computerChoice === "Rock") {
            score++;
        }
    }
    else if (playerChoice === "Scissors") {
        if (computerChoice === "Paper") {
            score++;
        }
        else if (computerChoice === "Rock") {
            score--;
        }
    }

    return score;

}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {

    let result = "";
    let divID = document.getElementById("result");

    score = getResult(playerChoice, computerChoice);
    if (score === 0)
        result = "It's a Draw!";
    else if (score === -1)
        result = 'You Lose!';
    else
        result = 'You Win!';

    divID.innerText = result;
    return score;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {

    
    let computerChoice = getComputerChoice();
    
    return showResult(0, playerChoice, computerChoice);
     
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
    const rpsButtons = document.querySelectorAll(".rpsButton");
    var handsDiv = document.getElementById('hands');
    var  playerScoreDiv= document.getElementById('player-score');
    let score, hands=0,playerScore=0;
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => {
            score= onClickRPS(rpsButton.value);
            hands++;
            playerScore+=score;
            playerScoreDiv.innerText ="Score: "+ playerScore;
            handsDiv.innerText = "Hands: "+hands;
        }});




}

// ** endGame function clears all the text on the DOM **
function endGame() {

}

playGame()