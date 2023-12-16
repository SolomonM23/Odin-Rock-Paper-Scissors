//practice code


function play(){
    let user = prompt('say something: ');

    return (user);
}


//loop game() logic

function game(){

    // play();

    let playerScore = 0;
    let compScore = 0;

    while (playerScore < 4 || compScore < 4){
        if ( play() == 'cheese'){
            ++playerScore;
            console.log('player score: ' + playerScore);
        } else if (play() == 'soup'){
            ++compScore;
            console.log('compScore: ' + compScore);
        }

        if (playerScore == 3){
            return console.log('Player Wins!');
        } else if (compScore == 3){
            return console.log('Computer Wins!');
        }
    }

    // let x = 'cheese';

    // for( let i = 0; i < 5; i++){
    //     console.log(play());
    // }
}

game();