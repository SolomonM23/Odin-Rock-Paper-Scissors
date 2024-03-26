const choices = ['rock', 'paper', 'scissors'];

let rockBtn = document.querySelector('.rock');
let paperBtn = document.querySelector('.paper');
let scissorBtn = document.querySelector('.scissors');

game();

function getComputerChoice() {
    
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection){
    
    //check for a tie
    if (playerSelection === computerSelection) {
        return('its a tie');
    } 
    
    //player choices rock
    if (playerSelection === choices[0]){
        if (computerSelection === choices[1]){
            return('You Lose! Paper beats rock.');
        } else if (computerSelection === choices[2]){
            return('You Win! Rock beats scissors.');
        }
    } 
    
    //player chooses paper
    if (playerSelection === choices[1]){
        if (computerSelection === choices[2]){
            return('You Lose! Scissors beats paper.');
        } else if (computerSelection === choices[0]){
            return('You Win! Paper beats rock.')
        }
    } 
    
    //player chooses scissors
    if (playerSelection === choices[2]){
        if (computerSelection === choices[0]){
            return('You Lose! Rock beats scissors.');
        } else if (computerSelection === choices[1]){
            return('You Win! Scissors beats paper.');
        }   
    } 
}

function game(){
    let gamesPlayed = 0;
    let playerScore = 0;
    let compScore = 0;
    
    // Add event listeners for each button
    rockBtn.addEventListener('click', function() {
        let user = choices[0]; // Player selects rock
        let computer = getComputerChoice();
        let round = playRound(user, computer);
        console.log('Computer choice: ' + computer);
        console.log(round);
        // Update scores and display messages based on round outcome
        updateScore(round, playerScore, compScore);
        gamesPlayed++;
        console.log('Games played: ' + gamesPlayed);
        checkWinner(playerScore, compScore);
    });

    paperBtn.addEventListener('click', function() {
    // Similar logic for paper button click
        let user = choices[1];
        let computer = getComputerChoice();
        let round = playRound(user, computer);
        console.log('Computer choice: ' + computer);
        console.log(round);
        updateScore(round, playerScore, compScore);
        gamesPlayed++;
        console.log('Games played: ' + gamesPlayed);
        checkWinner(playerScore, compScore);
    });

    scissorBtn.addEventListener('click', function() {
    // Similar logic for scissor button click
        let user = choices[2];
        let computer = getComputerChoice();
        let round = playRound(user, computer);
        console.log('Computer choice: ' + computer);
        console.log(round);
        updateScore(round, playerScore, compScore);
        gamesPlayed++;
        console.log('Games played: ' + gamesPlayed);
        checkWinner(playerScore, compScore);
    });

    // Function to update scores and display messages
    function updateScore(round, playerScore, compScore) {
        if (round === 'It\'s a tie') {
          console.log(`It's a tie. Play again.`);
        } else if (round.slice(0, 8) === 'You Win!') {
          playerScore++;
          console.log('Player Score: ' + playerScore + ' - Comp Score: ' + compScore);
        } else {
          compScore++;
          console.log('Player Score: ' + playerScore + ' - Comp Score: ' + compScore);
        }
    }

    // Function to check for winner and end game
    function checkWinner(playerScore, compScore) {
        if (playerScore === 3) {
          console.log('Player Wins!');
          // You can optionally reset the game here
        } else if (compScore === 3) {
          console.log('Computer Wins!');
          // You can optionally reset the game here
        }
    }
}
