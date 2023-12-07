const choices = ['rock', 'paper', 'scissors'];
let playerSelection = prompt('Your selection: ');
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
            return('You lose! Rock beats scissors.');
        } else if (computerSelection === choices[1]){
            return('You win! Scissors beats paper.');
        }   
    } 
}


playRound(playerSelection, computerSelection);