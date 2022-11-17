// Javascript structure

// game {
//     score-integer
//     currentGame -array
//     playerMoves -array
//     choices -array 
// }

// newGame()
    // Should:
    // reset the score to zero
    // clear the playerMoves Array
    // clear the currentGame Array
    // call showScore() function
    // call addTurn() function

// addTurn()
// showTurns()
// lightsOn()
// playerTurn()
// showScore()

let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"]
}

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    showScore()
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

module.exports = { game, newGame, showScore };
