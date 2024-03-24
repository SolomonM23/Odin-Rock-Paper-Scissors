const choices = ['rock', 'paper', 'scissors'];
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

let rockBtn = document.querySelector('.rock');
let paperBtn = document.querySelector('.paper');
let scissorBtn = document.querySelector('.scissors');

rockBtn.addEventListener('click', playRound( choices[0], computerSelection));
paperBtn.addEventListener('click', playRound(choices[1], computerSelection));
scissorBtn.addEventListener('click', playRound(choices[2], computerSelection));

function game(){
    let gamesPlayed = 0;
    let playerScore = 0;
    let compScore = 0;
    
    while (playerScore < 3 && compScore < 3 ) {
        // let user = prompt('Your selection: ').toLowerCase();
        let computer = getComputerChoice();
        console.log('Computer choice: ' + computer);
        
        let round = playRound( user, computer);
        
        if (round == 'its a tie'){
            console.log(`It's a tie. Play again.`);
        } else if ( round.slice(0, 8) == 'You Win!'){
            ++playerScore;
            console.log('Player Score: ' + playerScore + ' - Comp Score: ' + compScore);
        } else { //not a tie, the player loses 
            ++compScore;
            console.log('Player Score: ' + playerScore + ' - Comp Score: ' + compScore);
        }

        gamesPlayed++;
        console.log('games: ' + gamesPlayed);
    }

    if (playerScore == 3){
        console.log('Player Wins!');
    } else if (compScore == 3){
        console.log('Computer Wins!');
    }    
    
}
