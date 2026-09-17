let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;
let humanSelection;
let computerSelection;
let numberOfRound = 0;

let rockChoice = document.querySelector("#rock");
let paperChoice = document.querySelector("#paper");
let scissorsChoice = document.querySelector("#scissors");
let choiceButtons = [rockChoice, paperChoice, scissorsChoice];

let displayResult = document.querySelector("#result");
let displayRoundResult = document.createElement("p");
let displayScore = document.createElement("p");
let displayFinalScore = document.createElement("p");

let restartButton = document.createElement("button");
restartButton.textContent = "Restart game";
restartButton.style.display = "none";

displayResult.appendChild(displayRoundResult);
displayResult.appendChild(displayScore);
displayResult.appendChild(displayFinalScore);
document.body.appendChild(restartButton);

function selectChoiceEvent(event) {
    let humanChoice = event.target.textContent;
    let computerChoice = getComputerChoice();
    return playRound(humanChoice, computerChoice);
}

rockChoice.addEventListener("click", selectChoiceEvent);
paperChoice.addEventListener("click", selectChoiceEvent);
scissorsChoice.addEventListener("click", selectChoiceEvent);
restartButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    numberOfRound = 0;

    choiceButtons.forEach(choice => choice.disabled = false);
    restartButton.style.display = "none";
    displayFinalScore.textContent = "";
});

function getComputerChoice() {
    let randomNumber = Math.random() * 100;
    if (randomNumber <= 33) {
        return computerChoice = "Rock";
    } else if (randomNumber > 33 && randomNumber <= 66) {
        return computerChoice = "Paper";
    } else {
        return computerChoice = "Scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    const humanChoiceUpper = humanChoice.toUpperCase();
    const computerChoiceUpper = computerChoice.toUpperCase();
    numberOfRound += 1;
    
    if (humanChoiceUpper === computerChoiceUpper) {
        displayRoundResult.textContent = "It's a draw!";
        displayScore.innerHTML = `The score is :<br>Human: ${humanScore}<br>Computer: ${computerScore}`;
    } else if(humanChoiceUpper === "PAPER" && computerChoiceUpper === "ROCK" 
        || humanChoiceUpper === "SCISSORS" && computerChoiceUpper === "PAPER"
        || humanChoiceUpper === "ROCK" && computerChoiceUpper === "SCISSORS"
        ) {
            displayRoundResult.textContent = "You've won the round!";
            humanScore += 1;
            displayScore.innerHTML = `The score is :<br>Human: ${humanScore}<br>Computer: ${computerScore}`;
        } else {
        displayRoundResult.textContent = "You lost the round..";
        computerScore += 1;
        displayScore.innerHTML = `The score is :<br>Human: ${humanScore}<br>Computer: ${computerScore}`;
    }

    if(numberOfRound === 5) {
        endGame();
    }

}

function endGame() {
    if(humanScore > computerScore) {
        displayFinalScore.setAttribute("style", "color: green");
        displayFinalScore.textContent = "Well done you've won the game!";
    } else if(humanScore === computerScore) {
            displayFinalScore.setAttribute("style", "color: black");
            displayFinalScore.textContent = "It's a tie!";
    } else {
            displayFinalScore.setAttribute("style", "color: red");
            displayFinalScore.textContent = "You lost the game..";
    }

    choiceButtons.forEach(choice => choice.disabled = true);
    restartButton.style.display = "inline-block";
}

