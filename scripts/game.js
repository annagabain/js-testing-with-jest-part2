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
    currentGame: [],
    playerMoves: [],
    score: 0,
    choices: ["button1", "button2", "button3", "button4"]
};

function newGame() {
    game.currentGame = [];
    game.playerMoves = [];
    game.score = 0;
    showScore();
    addTurn();
}

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    // showTurns();
}

function lightsOn(circ) {
    document.getElementById(circ).classList.add(circ + "light");
    setTimeout(function () {
        document.getElementById(circ).classList.remove(circ + "light");
    }, 400);
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

module.exports = { game, newGame, showScore, addTurn, lightsOn };