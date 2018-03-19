// All code should be written in this file.
// Set global variables for player moves
let playerOneMoveOneType;
let playerOneMoveOneValue;

let playerOneMoveTwoType;
let playerOneMoveTwoValue;

let playerOneMoveThreeType;
let playerOneMoveThreeValue;

let playerTwoMoveOneType;
let playerTwoMoveOneValue;

let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;

let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;

// Game winner
function getGameWinner () {
	if (!playerOneMoveOneType || !playerOneMoveTwoType ||
      !playerOneMoveThreeType || !playerOneMoveOneValue ||
      !playerOneMoveTwoValue || !playerOneMoveThreeValue ||
      !playerTwoMoveOneType || !playerTwoMoveTwoType ||
      !playerTwoMoveThreeType || !playerTwoMoveOneValue ||
      !playerTwoMoveTwoValue || !playerTwoMoveThreeValue) {
    return null;
  }
	
	const roundOneWinner = getRoundWinner(1);
	const roundTwoWinner = getRoundWinner(2);
	const roundThreeWinner = getRoundWinner(3);

	playerOneWins = 0;
	playerTwoWins = 0;

	addWinner(roundOneWinner);
	addWinner(roundTwoWinner);
	addWinner(roundThreeWinner);

	if (playerOneWins > playerTwoWins) {
		return 'Player One'
	} else if (playerTwoWins > playerOneWins) {
		return 'Player Two'
	} else {
		return 'Tie'
	}
};

function addWinner (winner) {
	

	if (winner === 'Player One') {
		playerOneWins ++;
	} else if (winner === 'Player Two') {
		playerTwoWins ++;
	}
}

// Round winner
function getRoundWinner (round) {
	if (!roundIsValid(round)) {
		return null 
	} else {
		switch(round) {
			case 1: 
				return getMoveWinner(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue);
				break;
			case 2:
				return getMoveWinner(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue);
				break;
			case 3:
				return getMoveWinner(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue);
				break;
			default:
			 return null
		}
	}
};

function roundIsValid (round) {
	return (round === 1 || round === 2 || round === 3)
};

// Move winner function to serve as component of getRoundWinner
function getMoveWinner (playerOneMove, playerOneValue, playerTwoMove, playerTwoValue) {
// Put the getRoundWinner edge case here

		if (playerOneMove === playerTwoMove) {
			if (playerOneValue > playerTwoValue) {
				return 'Player One'
			} else if (playerOneValue < playerTwoValue) {
				return 'Player Two'
			} else return 'Tie'
	}
		if (playerOneMove === 'rock') {
			if (playerTwoMove === 'scissors') {
				return 'Player One'
			} else if (playerTwoMove === 'paper') {
				return 'Player Two'
		} else return 'Tie'
	}

		if (playerOneMove === 'scissors') {
			if (playerTwoMove === 'paper') {
				return 'Player One'
			} else if (playerTwoMove === 'rock') {
				return 'Player Two'
		} else return 'Tie'
	}

		if (playerOneMove === 'paper') {
			if (playerTwoMove === 'rock') {
				return 'Player One'
			} else if (playerTwoMove === 'scissors') {
				return 'Player Two'
		} else return 'Tie'
	}
};

// Set player moves
function setPlayerMoves (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
	if (sumOfValues(moveOneValue, moveTwoValue, moveThreeValue) && playerIsValid(player) && moveIsValid(moveOneType) && moveIsValid(moveTwoType) && moveIsValid(moveThreeType) && 
		valueIsValid(moveOneValue) && valueIsValid(moveTwoValue) && valueIsValid(moveThreeValue)) {
		if (player === 'Player One') {
		    playerOneMoveOneType = moveOneType;
		    playerOneMoveOneValue = moveOneValue;
		    playerOneMoveTwoType = moveTwoType;
		    playerOneMoveTwoValue = moveTwoValue;
		    playerOneMoveThreeType = moveThreeType;
		    playerOneMoveThreeValue = moveThreeValue;
		  } else {
		    playerTwoMoveOneType = moveOneType;
		    playerTwoMoveOneValue = moveOneValue;
		    playerTwoMoveTwoType = moveTwoType;
		    playerTwoMoveTwoValue = moveTwoValue;
		    playerTwoMoveThreeType = moveThreeType;
		    playerTwoMoveThreeValue = moveThreeValue;
		  }
	}
};

// Determine whether moves are valid
function moveIsValid (type) {
	return (type === 'rock' ||
			type === 'paper' ||
			type === 'scissors')
};

// Determine whether values are valid
function valueIsValid (value) {
	return (value >= 1 && value <= 99)
};

function sumOfValues (valueOne, valueTwo, valueThree) {
	return (valueOne + valueTwo + valueThree <= 99)
}

function playerIsValid (player) {
	return (player === 'Player One' || player === 'Player Two')
};





