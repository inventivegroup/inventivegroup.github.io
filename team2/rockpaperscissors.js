const choices = ["rock", "paper", "scissors"];

let playerOneResults = [];
let playerTwoResults = [];

function getComputerChoice() {
    //get the random computer choice
    var randomNumber = Math.random()
    if (randomNumber < 0.33) {
        comp_element = document.getElementById("comp_choice")
        comp_element.innerText = "Computer choice is: \n Rock"
        return "rock"
    } else if (randomNumber < 0.66) {
        comp_element = document.getElementById("comp_choice")
        comp_element.innerText = "Computer choice is: \n Paper"
        return "paper"
    } else {
        comp_element = document.getElementById("comp_choice")
        comp_element.innerText = "Computer choice is: \n Scissors"
        return "scissors"
    }
    
}

function announceRoundWinner(winner) {
    let element = document.getElementById("round-number");
    element.innerText = winner;
}
counterPlayer1 = 0
counterPlayer2 = 0

function playRound(userChoice) {
    randome_element = document.getElementById("gameWinner")
    randome_element.innerText = ''

    if( playerOneResults.length < 5 ) {
        let roundWinner = whoWon(userChoice);

        if( roundWinner === "Player 1" ) {
            playerOneResults.push("won");
            playerTwoResults.push("lost");
            counterPlayer1++
            let element = document.getElementById("p1ScoreNum")
            element.innerHTML = counterPlayer1
        }
        else if( roundWinner === "Player 2" ) {
            playerOneResults.push("lost");
            playerTwoResults.push("won");
            counterPlayer2++
            let element = document.getElementById("p2ScoreNum")
            element.innerText = counterPlayer2
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

    let player1Wins = playerOneResults.filter(element => {
        return element == "won"
    }).length;
    let player2Wins = playerTwoResults.filter(element => {
        return element == "won"
    }).length;

    let element = document.getElementById("gameWinner");
    let winner = "";

    if( player1Wins > player2Wins ) {
        winner = "Player 1 wins!";
    }
    else if( player2Wins > player1Wins ) {
        winner = "Player 2 wins!";
    }
    else {
        winner = "It's a tie!";
    }

    element.innerText = winner;

    let resetBtn = document.getElementById("reset-game");
    resetBtn.style.display = "block";
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

function resetGame() {
    playerOneResults = [];
    playerTwoResults = [];
    counterPlayer1 = 0
    counterPlayer2 = 0

    document.getElementById("round-number").innerText = "";
    document.getElementById("gameWinner").innerText = "Choose Your Weapon!";
    document.getElementById("p1ScoreNum").innerText = "";
    document.getElementById("p2ScoreNum").innerText = "";
    
    document.getElementById("reset-game").style.display = "none";;
}