const choices = ['rock', 'paper', 'scissors'];

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
    // let playerSelection = prompt('Your selection: ');
    
    if (playerSelection === choices[0] && computerSelection === choices[1]){
        console.log('You Lose! Paper beats rock.');
    } else if (playerSelection === choices[1] && computerSelection === choices[2]){
        console.log('You Lose! Scissors beats paper.');
    } else if (playerSelection === choices[2] && computerSelection === choices[0]){
        console.log('You lose! Rock beats scissors.');
    } else {
        console.log('You win!');
    }
}

playRound(prompt('Your selection: '), getComputerChoice());
console.log(getComputerChoice());