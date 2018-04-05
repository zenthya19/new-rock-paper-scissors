let userScore = 0;
let computerScore = 0;
let rounds = 1;
rock_div = document.getElementById("r");
paper_div = document.getElementById("p");
scissors_div = document.getElementById("s");
userScore_p = document.getElementById("user-score");
compScore_p = document.getElementById("comp-score");
result_p = document.getElementById("result");
rounds_p = document.getElementById("rounds");
roundMessage_p = document.getElementById("roundMessage");
reset_div = document.getElementById("reset");





function game(userChoices) {
	let computerChoice = computerPlay()
	let turns = playRound(userChoices, computerChoice);
	let anotherRound = addRound();
	}


function addRound() {
	if (rounds === 5 && userScore === computerScore) {
		roundMessage_p.innerHTML = "You tied for this set!<br> Press the reset button to play again.";
	} if (rounds === 5 && userScore > computerScore) {
		roundMessage_p.innerHTML = "You won this set!<br> Press the reset button to play again.";
	} if (rounds === 5 && userScore < computerScore) {
		roundMessage_p.innerHTML = "You lost this set!<br> Press the reset button to play again."
	}

	rounds_p.innerHTML = "Round " + rounds;
	rounds++;

	if (rounds === 6) {
		document.getElementById("r").disabled = true;
		document.getElementById("p").disabled = true;
		document.getElementById("s").disabled = true;
	}
}


function computerPlay() {	
	let choices = ["r", "p", "s"];	
	let computerPick = Math.floor(Math.random() * 3);
	return choices[computerPick];

	}

function win(user, computer) {
	userScore++;
	userScore_p.innerHTML = userScore;
	compScore_p.innerHTML = computerScore;
	result_p.innerHTML = `You chose ${convertText(user)}. The computer chose ${convertText(computer)}. You win!`;
}

function lose(user, computer) {
	computerScore++;
	userScore_p.innerHTML = userScore;
	compScore_p.innerHTML = computerScore;
	result_p.innerHTML = `You chose ${convertText(user)}. The computer chose ${convertText(computer)}. You lose!`;

}

function draw(user, computer) {
	result_p.innerHTML = `You chose ${convertText(user)}. The computer chose ${convertText(computer)}. It's a draw!`;
}

function convertText(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissors";
}



function playRound(player) {

	let computer = computerPlay();
		if (player === computer) {
				draw(player, computer);

		} else if (player === "r") {
				if (computer === "p") {
					lose(player, computer);

			} else {
					win(player, computer);
			}

		} else if (player === "p") {
				if (computer === "r") {
					win(player, computer);
			} else {
					lose(player, computer);
			}
					
	} else if (player === "s") {
				if (computer === "p") {
					win(player, computer);
			} else {
					lose(player, computer);
			}
	
}
}

function resetGame() {
	reset_div.innerHTML = location.reload();
}

	

function main() {

	rock_div.addEventListener('click', () =>	game("r"));
	paper_div.addEventListener('click', () =>	game("p"));
	scissors_div.addEventListener('click', () => game("s"));
	reset_div.addEventListener('click', () => resetGame());
}

main();
	
