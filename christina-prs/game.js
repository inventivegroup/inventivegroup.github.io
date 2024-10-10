const weapons = ['Rock', 'Paper', 'Scissors'];
let player1Score = 0;
let player2Score = 0;
let currentRound = 1;
let currentPlayer = 1;
let player1Choice = null;
let player2Choice = null;

const weaponButtons = document.querySelectorAll('.weapon-btn');
const gameStatus = document.getElementById('game-status');
const scoreDisplay = document.getElementById('score');
const roundDisplay = document.getElementById('round');
const playerTurnDisplay = document.getElementById('player-turn');

weaponButtons.forEach(button => {
    button.addEventListener('click', () => playTurn(button.textContent.trim().split('\n')[1]));
});

function playTurn(choice) {
    if (currentRound > 5) return;

    if (currentPlayer === 1) {
        player1Choice = choice;
        currentPlayer = 2;
        playerTurnDisplay.textContent = "Player 2's Turn";
        gameStatus.textContent = `Player 1 has chosen. Player 2, make your choice!`;
    } else {
        player2Choice = choice;
        playRound();
    }
}

function playRound() {
    const result = getWinner(player1Choice, player2Choice);
    updateScore(result);
    updateDisplay(result);

    if (currentRound === 5) {
        endGame();
    } else {
        currentPlayer = 1;
        player1Choice = null;
        player2Choice = null;
        playerTurnDisplay.textContent = "Player 1's Turn";
        gameStatus.textContent = `Round ${currentRound}: Player 1, make your choice!`;
    }
}

function getWinner(player1, player2) {
    if (player1 === player2) return 'Tie';
    if ((player1 === 'Rock' && player2 === 'Scissors') ||
        (player1 === 'Paper' && player2 === 'Rock') ||
        (player1 === 'Scissors' && player2 === 'Paper')) {
        return 'Player 1';
    }
    return 'Player 2';
}

function updateScore(result) {
    if (result === 'Player 1') player1Score++;
    if (result === 'Player 2') player2Score++;
    currentRound++;
}

function updateDisplay(result) {
    gameStatus.textContent = `Player 1 chose ${player1Choice}, Player 2 chose ${player2Choice}. ${result} wins!`;
    scoreDisplay.textContent = `Player 1 Score: ${player1Score} | Player 2 Score: ${player2Score}`;
    roundDisplay.textContent = `Round: ${currentRound} of 5`;
}

function endGame() {
    let finalResult = player1Score > player2Score ? 'Player 1 wins the game!' :
                      player1Score < player2Score ? 'Player 2 wins the game!' :
                      'The game is a tie!';
    gameStatus.textContent = finalResult;
    weaponButtons.forEach(button => button.disabled = true);
    playerTurnDisplay.textContent = "Game Over";
}