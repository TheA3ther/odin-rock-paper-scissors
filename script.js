let humanScore = 0, computerScore = 0, hasWinner = false;

const humanChoice = document.querySelector("#humanChoice");
const resultDisplay = document.querySelector("#result");
const humanScoreDisplay = document.querySelector("#humanScore");
const computerScoreDisplay = document.querySelector("#computerScore");
const computerChoiceDisplay = document.querySelector("#computerChoice");
const reset = document.querySelector("#reset");

humanChoice.addEventListener('click', (event) => playRound(event.target.id, getComputerChoice()));
reset.addEventListener('click', resetGame);

function getComputerChoice() {
    let result = Math.random() * 3;
    return (result < 1 ? "rock" : result < 2 ? "paper" : "scissors");
}

function playRound(humanChoice, computerChoice) {
    console.log(hasWinner);
    computerChoiceDisplay.textContent = computerChoice;
    const result = `${humanChoice},${computerChoice}`;
    switch (result) {
        case ("rock,scissors"):
        case ("paper,rock"):
        case ("scissors,paper"):
            resultDisplay.textContent = "Human wins!"
            humanScoreDisplay.textContent = (++humanScore).toString();
            break;
        case ("scissors,rock"):
        case ("rock,paper"):
        case ("paper,scissors"):
            resultDisplay.textContent = "Computer wins!"
            computerScoreDisplay.textContent = (++computerScore).toString();
            break;
        default:
            resultDisplay.textContent = "Tie!"
    }
    if ((humanScore == 5 || computerScore == 5) && !hasWinner){    
        if (humanScore == 5) alert("Human wins!!!");
        if (computerScore == 5) alert("Computer wins!!!");
        if (!hasWinner) hasWinner = true;
    }
}

function resetGame(){
    hasWinner = false;
    humanScore = 0;
    computerScore = 0;
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    computerChoiceDisplay.textContent = '';
    result.textContent = '';
}