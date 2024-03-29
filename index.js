const choices = ['rock', 'paper', 'scissors'];

//Buttons
let rockBtn = document.querySelector('.rock');
let paperBtn = document.querySelector('.paper');
let scissorBtn = document.querySelector('.scissors');
let resetBtn = document.querySelector('.reset');

//Scores
let scoreBoard = document.querySelector('.scoreBoard');
let userScoreboard = document.querySelector('.userScore');
let compScoreBoard = document.querySelector('.computerScore');

//Results of each round
let main = document.querySelector('main');
let playersDiv = document.querySelector('.players');
let roundResults = document.createElement('div');
roundResults.classList.add('roundResults');

//display winner
let userCard = document.querySelector('.user');
let compCard = document.querySelector('.computer');
let winner = document.createElement('div');
winner.classList.add('winner');

//display computer choices
let btnContainer = document.querySelector('.gameButtons');
let compChoiceDiv = document.createElement('div');
compChoiceDiv.classList.add('computerChoice');

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
        compChoiceDiv.textContent = ('Computer choice: ' + computer);
        if (compChoiceDiv.textContent.trim()){
            main.insertBefore(compChoiceDiv, btnContainer);
        }
        roundResults.textContent = (round);
        if (roundResults.textContent.trim()){ //append div only if there is text content. otherwise its hidden
            main.insertBefore(roundResults, playersDiv);
        }
        // Update scores and display messages based on round outcome
        if (round.slice(0, 8) === 'You Win!') {
            playerScore++; // Update score in game function for player win
        } else if (round.slice(0, 9) == 'You Lose!') { // Not a tie and not a player win, computer wins
            compScore++; // Update score in game function for computer win
        }   
        userScoreboard.textContent = ('Score: ' + playerScore);
        compScoreBoard.textContent = ('Score: ' + compScore);
        gamesPlayed++;
        scoreBoard.textContent = ('Games played: ' + gamesPlayed);
        checkWinner(playerScore, compScore);
    });

    paperBtn.addEventListener('click', function() {
    // Similar logic for paper button click
        let user = choices[1];
        let computer = getComputerChoice();
        let round = playRound(user, computer);
        compChoiceDiv.textContent = ('Computer choice: ' + computer);
        if (compChoiceDiv.textContent.trim()){
            main.insertBefore(compChoiceDiv, btnContainer);
        }
        roundResults.textContent = (round);
        if (roundResults.textContent.trim()){
            main.insertBefore(roundResults, playersDiv);
        }
        if (round.slice(0, 8) === 'You Win!') {
            playerScore++; 
        } else if (round.slice(0, 9) == 'You Lose!') { 
            compScore++;
        }    
        userScoreboard.textContent = ('Score: ' + playerScore);
        compScoreBoard.textContent = ('Score: ' + compScore);
        gamesPlayed++;
        scoreBoard.textContent = ('Games played: ' + gamesPlayed);
        checkWinner(playerScore, compScore);
    });

    scissorBtn.addEventListener('click', function() {
    // Similar logic for scissor button click
        let user = choices[2];
        let computer = getComputerChoice();
        let round = playRound(user, computer);
        compChoiceDiv.textContent = ('Computer choice: ' + computer);
        if (compChoiceDiv.textContent.trim()){
            main.insertBefore(compChoiceDiv, btnContainer);
        }
        roundResults.textContent = (round);
        if (roundResults.textContent.trim()){
            main.insertBefore(roundResults, playersDiv);
        }
        if (round.slice(0, 8) === 'You Win!') {
            playerScore++; 
        } else if (round.slice(0, 9) == 'You Lose!') { 
            compScore++; 
        }
        userScoreboard.textContent = ('Score: ' + playerScore);
        compScoreBoard.textContent = ('Score: ' + compScore);
        gamesPlayed++;
        scoreBoard.textContent = ('Games played: ' + gamesPlayed);
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
        if (playerScore === 5) {
            winner.textContent = ('Player Wins!');
            userCard.appendChild(winner);
            // You can optionally reset the game here
        } else if (compScore === 5) {
            winner.textContent = ('Computer Wins!');
            compCard.appendChild(winner);
          // You can optionally reset the game here
        }
    }

    resetBtn.addEventListener('click', function() {
        rockBtn.disabled = true; // Disable buttons
        paperBtn.disabled = true;
        scissorBtn.disabled = true;
        
        playerScore = 0;
        compScore = 0;
        gamesPlayed = 0;
        scoreBoard.textContent = ('Game Reset! Scores: 0 - 0'); 
        userScoreboard.textContent = ('Score: ' + playerScore);
        compScoreBoard.textContent = ('Score: ' + compScore);
        main.removeChild(roundResults);
        main.removeChild(compChoiceDiv);

        //remove winner banner/div from player card on reset
        let winnerDivs = [userCard, compCard]; // Array of both divs to check

        for (let i = 0; i < winnerDivs.length; i++) {
            let currentDiv = winnerDivs[i];
            if (currentDiv.contains(winner)) { // Check if winner element exists in current div
                currentDiv.removeChild(winner);
                break; // Exit the loop after removing from the first matching div
            }
        }

      
        // After a short delay (optional)
        setTimeout(function() {
          rockBtn.disabled = false; // Re-enable buttons
          paperBtn.disabled = false;
          scissorBtn.disabled = false;
        }, 1000); // Delay in milliseconds (adjust as needed)
    })
}
