const choices = ["rock", "paper", "scissors"];

const playerOneResults = [];
const playerTwoResults = [];

function getComputerChoice() {
    //get the random computer choice
    var randomNumber = Math.random()
    if (randomNumber < 0.33) {
        return "rock"
    } else if (randomNumber < 0.66) {
        return "paper"
    } else {
        return "scissors"
    }
}

function announceRoundWinner(winner) {
    let element = document.getElementById("roundWinner");
    element.innerText = winner
}

function playRound(userChoice) {

    if( playerOneResults.length < 5 ) {
        console.log(userChoice);
        let roundWinner = whoWon(userChoice);
        console.log(roundWinner);

        if( roundWinner === "Player 1" ) {
            playerOneResults.push("won");
            playerTwoResults.push("lost");
        }
        else if( roundWinner === "Player 2" ) {
            playerOneResults.push("lost");
            playerTwoResults.push("won");
        }
        else if( roundWinner === "Tie" ) {
            playerOneResults.push("tie");
            playerTwoResults.push("tie");
        }

        announceRoundWinner(roundWinner);
    }
    else { // All 5 rounds have been played
        announceGameWinner(); // TO DO
    }    
}

function announceGameWinner() {
    
    let player1Wins = playerOneResults.filter("won").length;
    let player2Wins = playerTwoResults.filter("won").length;

    console.log(player1Wins);
    console.log(player2Wins);

    if( player1Wins > player2Wins ) {
        console.log("Player 1 wins!");
    }
    else {
        console.log("Player 2 wins!");
    }
}

function whoWon(p1Choice) {
    let player1Choice = p1Choice;
    let player2Choice = getComputerChoice();
    
    if (player1Choice == "rock" && player2Choice == "scissors") {
        return "Player 1";
    } else if (player1Choice == "scissors" && player2Choice == "paper") {
        return "Player 1";
    } else if (player1Choice == "paper" && player2Choice == "rock") {
        return "Player 1";
    } else if (player1Choice == player2Choice) {
        return "Tie";
    } else {
        return "Player 2";
    }
}
