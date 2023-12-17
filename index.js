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
    let user = prompt('Your selection: ').toLowerCase();
    let computer = getComputerChoice();
    
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

console.log(playRound( user, computer));

function game(){
    let playerScore = 0;
    let compScore = 0;
    
    //replay the game
    
    //replay round if a tie
    // if (battle == 'its a tie'){
        
        // }
        
        // while (playerScore < 4 || compScore < 4){
        const round = playRound(playerSelection, computerSelection);

        if ( round.slice(0, 8) == 'You Win!'){
            ++playerScore;
            console.log('player score: ' + playerScore);
        } else if (round.slice(0, 9) == 'You Lose!'){ 
            ++compScore;
            console.log('compScore: ' + compScore);
        }

        if (playerScore == 3){
            return console.log('Player Wins!');
        } else if (compScore == 3){
            return console.log('Computer Wins!');
        }
    // }
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