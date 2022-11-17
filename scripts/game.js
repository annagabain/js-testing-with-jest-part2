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
    // clear the playerMoves Array
    // randomly add a button ID to the currentGame Array
    // call showTurns() function

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
    showScore();
    addTurn();
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

function addTurn() {
    game.playerMoves = [];
    // randomly add a button ID to the currentGame Array
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    // showTurns()
}

module.exports = { game, newGame, showScore, addTurn };
