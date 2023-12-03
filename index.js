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

}

playRound(prompt('Your selection: '), getComputerChoice());