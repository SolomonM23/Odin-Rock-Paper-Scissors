const choices = ['rock', 'paper', 'scissors'];
let playerSelection = prompt('Your selection: ').toLowerCase();
let computerSelection = getComputerChoice();

function getComputerChoice() {

    let randomChoice = Math.floor(Math.random()*choices.length);
    
    if (randomChoice === 2) {
        return choices[2];
    } else if (randomChoice === 1){
        return choices[1];
    } else {
        return choices[0];
    }
    
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

playRound(playerSelection, computerSelection);
console.log(playRound( playerSelection, computerSelection));

function game(){
    let playerScore = 0;
    let compScore = 0;


    //replay the game
    //for (let i = 0; i <= 5; i++){
    //replay round if a tie
    if (playRound(playerSelection, computerSelection) == 'its a tie'){
        playRound(prompt('Your selection: ').toLowerCase(), computerSelection);
    }

    //player point
    if (playRound(playerSelection, computerSelection).slice(0, 8) == 'You Win!'){
        playerScore += 1;
        console.log('Player Score: ' + playerScore);
    }

    //computer point
    if (playRound(playerSelection, computerSelection).slice(0, 9) == 'You Lose!'){
        compScore += 1;
        console.log('Computer Score: ' + compScore);
    }
    //}

    //counter for player score
    for (playerScore; playerScore >= 3; playerScore++){
        console.log('Your Score: ' + (playerScore += 1));
    }

    //counter for computer score
    for (compScore; compScore >= 3; compScore++){
        console.log('Computer Score: ' + (compScore+= 1));
    }
}

game();