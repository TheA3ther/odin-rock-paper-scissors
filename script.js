let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let result = Math.random() * 3;
    return (result < 1 ? "rock" : result < 2 ? "paper" : "scissors");
}

function getHumanChoice() {
    return (prompt("What do you play? ")).toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    console.log(`Computer's Choice: ${computerChoice}`);
    const result = `${humanChoice},${computerChoice}`;
    switch (result) {
        case ("rock,scissors"):
        case ("paper,rock"):
        case ("scissors,paper"):
            console.log("You win! One point for you!");
            humanScore++;
            break;
        case ("scissors,rock"):
        case ("rock,paper"):
        case ("paper,scissors"):
            console.log("You lose! One point for the computer!");
            computerScore++;
            break;
        default:
            console.log("Tie! Try again!");
    }
}

function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        console.log(`ROUND #${i + 1}`);
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}!`);
        console.log(`${rounds - (i + 1)} rounds left!`);
        console.log("---------------------------------------");
    }
    console.log("RESULT");
    if (humanScore > computerScore) {
        console.log("Human wins!");
    }
    else if (computerScore < humanScore) {
        console.log("Computer wins!");
    }
    else {
        console.log("It's a tie!");
    }
}

playGame(5);