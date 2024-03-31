const $4fa36e821943b400$var$choices = [
    "rock",
    "paper",
    "scissors"
];
//Buttons
let $4fa36e821943b400$var$rockBtn = document.querySelector(".rock");
let $4fa36e821943b400$var$paperBtn = document.querySelector(".paper");
let $4fa36e821943b400$var$scissorBtn = document.querySelector(".scissors");
let $4fa36e821943b400$var$resetBtn = document.querySelector(".reset");
//Scores
let $4fa36e821943b400$var$scoreBoard = document.querySelector(".scoreBoard");
let $4fa36e821943b400$var$userScoreboard = document.querySelector(".userScore");
let $4fa36e821943b400$var$compScoreBoard = document.querySelector(".computerScore");
//Results of each round
let $4fa36e821943b400$var$main = document.querySelector("main");
let $4fa36e821943b400$var$playersDiv = document.querySelector(".players");
let $4fa36e821943b400$var$roundResults = document.createElement("div");
$4fa36e821943b400$var$roundResults.classList.add("roundResults");
//display winner
let $4fa36e821943b400$var$userCard = document.querySelector(".user");
let $4fa36e821943b400$var$compCard = document.querySelector(".computer");
let $4fa36e821943b400$var$winner = document.createElement("div");
$4fa36e821943b400$var$winner.classList.add("winner");
//display computer choices
let $4fa36e821943b400$var$btnContainer = document.querySelector(".gameButtons");
let $4fa36e821943b400$var$compChoiceDiv = document.createElement("div");
$4fa36e821943b400$var$compChoiceDiv.classList.add("computerChoice");
$4fa36e821943b400$var$game();
function $4fa36e821943b400$var$getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * $4fa36e821943b400$var$choices.length);
    return $4fa36e821943b400$var$choices[randomChoice];
}
function $4fa36e821943b400$var$playRound(playerSelection, computerSelection) {
    //check for a tie
    if (playerSelection === computerSelection) return "its a tie";
    //player choices rock
    if (playerSelection === $4fa36e821943b400$var$choices[0]) {
        if (computerSelection === $4fa36e821943b400$var$choices[1]) return "You Lose! Paper beats rock.";
        else if (computerSelection === $4fa36e821943b400$var$choices[2]) return "You Win! Rock beats scissors.";
    }
    //player chooses paper
    if (playerSelection === $4fa36e821943b400$var$choices[1]) {
        if (computerSelection === $4fa36e821943b400$var$choices[2]) return "You Lose! Scissors beats paper.";
        else if (computerSelection === $4fa36e821943b400$var$choices[0]) return "You Win! Paper beats rock.";
    }
    //player chooses scissors
    if (playerSelection === $4fa36e821943b400$var$choices[2]) {
        if (computerSelection === $4fa36e821943b400$var$choices[0]) return "You Lose! Rock beats scissors.";
        else if (computerSelection === $4fa36e821943b400$var$choices[1]) return "You Win! Scissors beats paper.";
    }
}
function $4fa36e821943b400$var$game() {
    let gamesPlayed = 0;
    let playerScore = 0;
    let compScore = 0;
    // Add event listeners for each button
    $4fa36e821943b400$var$rockBtn.addEventListener("click", function() {
        let user = $4fa36e821943b400$var$choices[0]; // Player selects rock
        let computer = $4fa36e821943b400$var$getComputerChoice();
        let round = $4fa36e821943b400$var$playRound(user, computer);
        $4fa36e821943b400$var$compChoiceDiv.textContent = "Computer choice: " + computer;
        if ($4fa36e821943b400$var$compChoiceDiv.textContent.trim()) $4fa36e821943b400$var$main.insertBefore($4fa36e821943b400$var$compChoiceDiv, $4fa36e821943b400$var$btnContainer);
        $4fa36e821943b400$var$roundResults.textContent = round;
        if ($4fa36e821943b400$var$roundResults.textContent.trim()) $4fa36e821943b400$var$main.insertBefore($4fa36e821943b400$var$roundResults, $4fa36e821943b400$var$playersDiv);
        // Update scores and display messages based on round outcome
        if (round.slice(0, 8) === "You Win!") playerScore++; // Update score in game function for player win
        else if (round.slice(0, 9) == "You Lose!") compScore++; // Update score in game function for computer win
        $4fa36e821943b400$var$userScoreboard.textContent = "Score: " + playerScore;
        $4fa36e821943b400$var$compScoreBoard.textContent = "Score: " + compScore;
        gamesPlayed++;
        $4fa36e821943b400$var$scoreBoard.textContent = "Games played: " + gamesPlayed;
        checkWinner(playerScore, compScore);
    });
    $4fa36e821943b400$var$paperBtn.addEventListener("click", function() {
        // Similar logic for paper button click
        let user = $4fa36e821943b400$var$choices[1];
        let computer = $4fa36e821943b400$var$getComputerChoice();
        let round = $4fa36e821943b400$var$playRound(user, computer);
        $4fa36e821943b400$var$compChoiceDiv.textContent = "Computer choice: " + computer;
        if ($4fa36e821943b400$var$compChoiceDiv.textContent.trim()) $4fa36e821943b400$var$main.insertBefore($4fa36e821943b400$var$compChoiceDiv, $4fa36e821943b400$var$btnContainer);
        $4fa36e821943b400$var$roundResults.textContent = round;
        if ($4fa36e821943b400$var$roundResults.textContent.trim()) $4fa36e821943b400$var$main.insertBefore($4fa36e821943b400$var$roundResults, $4fa36e821943b400$var$playersDiv);
        if (round.slice(0, 8) === "You Win!") playerScore++;
        else if (round.slice(0, 9) == "You Lose!") compScore++;
        $4fa36e821943b400$var$userScoreboard.textContent = "Score: " + playerScore;
        $4fa36e821943b400$var$compScoreBoard.textContent = "Score: " + compScore;
        gamesPlayed++;
        $4fa36e821943b400$var$scoreBoard.textContent = "Games played: " + gamesPlayed;
        checkWinner(playerScore, compScore);
    });
    $4fa36e821943b400$var$scissorBtn.addEventListener("click", function() {
        // Similar logic for scissor button click
        let user = $4fa36e821943b400$var$choices[2];
        let computer = $4fa36e821943b400$var$getComputerChoice();
        let round = $4fa36e821943b400$var$playRound(user, computer);
        $4fa36e821943b400$var$compChoiceDiv.textContent = "Computer choice: " + computer;
        if ($4fa36e821943b400$var$compChoiceDiv.textContent.trim()) $4fa36e821943b400$var$main.insertBefore($4fa36e821943b400$var$compChoiceDiv, $4fa36e821943b400$var$btnContainer);
        $4fa36e821943b400$var$roundResults.textContent = round;
        if ($4fa36e821943b400$var$roundResults.textContent.trim()) $4fa36e821943b400$var$main.insertBefore($4fa36e821943b400$var$roundResults, $4fa36e821943b400$var$playersDiv);
        if (round.slice(0, 8) === "You Win!") playerScore++;
        else if (round.slice(0, 9) == "You Lose!") compScore++;
        $4fa36e821943b400$var$userScoreboard.textContent = "Score: " + playerScore;
        $4fa36e821943b400$var$compScoreBoard.textContent = "Score: " + compScore;
        gamesPlayed++;
        $4fa36e821943b400$var$scoreBoard.textContent = "Games played: " + gamesPlayed;
        checkWinner(playerScore, compScore);
    });
    // Function to update scores and display messages
    function updateScore(round, playerScore, compScore) {
        if (round === "It's a tie") console.log(`It's a tie. Play again.`);
        else if (round.slice(0, 8) === "You Win!") {
            playerScore++;
            console.log("Player Score: " + playerScore + " - Comp Score: " + compScore);
        } else {
            compScore++;
            console.log("Player Score: " + playerScore + " - Comp Score: " + compScore);
        }
    }
    // Function to check for winner and end game
    function checkWinner(playerScore, compScore) {
        if (playerScore === 5) {
            $4fa36e821943b400$var$winner.textContent = "Player Wins!";
            $4fa36e821943b400$var$userCard.appendChild($4fa36e821943b400$var$winner);
        // You can optionally reset the game here
        } else if (compScore === 5) {
            $4fa36e821943b400$var$winner.textContent = "Computer Wins!";
            $4fa36e821943b400$var$compCard.appendChild($4fa36e821943b400$var$winner);
        // You can optionally reset the game here
        }
    }
    $4fa36e821943b400$var$resetBtn.addEventListener("click", function() {
        $4fa36e821943b400$var$rockBtn.disabled = true; // Disable buttons
        $4fa36e821943b400$var$paperBtn.disabled = true;
        $4fa36e821943b400$var$scissorBtn.disabled = true;
        playerScore = 0;
        compScore = 0;
        gamesPlayed = 0;
        $4fa36e821943b400$var$scoreBoard.textContent = "Game Reset! Scores: 0 - 0";
        $4fa36e821943b400$var$userScoreboard.textContent = "Score: " + playerScore;
        $4fa36e821943b400$var$compScoreBoard.textContent = "Score: " + compScore;
        $4fa36e821943b400$var$main.removeChild($4fa36e821943b400$var$roundResults);
        $4fa36e821943b400$var$main.removeChild($4fa36e821943b400$var$compChoiceDiv);
        //remove winner banner/div from player card on reset
        let winnerDivs = [
            $4fa36e821943b400$var$userCard,
            $4fa36e821943b400$var$compCard
        ]; // Array of both divs to check
        for(let i = 0; i < winnerDivs.length; i++){
            let currentDiv = winnerDivs[i];
            if (currentDiv.contains($4fa36e821943b400$var$winner)) {
                currentDiv.removeChild($4fa36e821943b400$var$winner);
                break; // Exit the loop after removing from the first matching div
            }
        }
        // After a short delay (optional)
        setTimeout(function() {
            $4fa36e821943b400$var$rockBtn.disabled = false; // Re-enable buttons
            $4fa36e821943b400$var$paperBtn.disabled = false;
            $4fa36e821943b400$var$scissorBtn.disabled = false;
        }, 1000); // Delay in milliseconds (adjust as needed)
    });
}


//# sourceMappingURL=index.js.map
