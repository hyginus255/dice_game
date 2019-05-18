/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/


var currentPlayer, btnRollDOM, roundScore, score, btnHoldDOM, btnNewDOM, gameState;

init();

btnRollDOM = document.querySelector('.btn-roll');

btnRollDOM.addEventListener('click', function(){
  if(gameState){
  	var roundNumber = Math.floor( (Math.random() * 6) + 1);
	  if(roundNumber !== 1){
	  	roundScore += roundNumber;
	  	document.querySelector('.dice').style.display = "block";
	  	document.querySelector('.dice').src = "dice-" + roundNumber + ".png";
	  	document.getElementById("current-" + currentPlayer).textContent = roundScore;
	  }else{
	  	resetRoundScore();
	  }
  } 
  
})


btnHoldDOM = document.querySelector('.btn-hold');

btnHoldDOM.addEventListener('click', function(){

	if(gameState){

		score[currentPlayer] += roundScore;
		document.getElementById("score-" + currentPlayer).textContent = score[currentPlayer];

		if(score[currentPlayer] >= 20){
			gameState = false;
	  		document.getElementById("name-" + currentPlayer).textContent = "Winner !!!";
	  		document.querySelector(".player-" + currentPlayer + "-panel").classList.add("winner");
	  		document.querySelector('.dice').style.display = "none";
	  	}else{
			resetRoundScore();
	  	}
	}

});


btnNewDOM = document.querySelector('.btn-new');

btnNewDOM.addEventListener('click', init);


function resetRoundScore(){
	roundScore = 0;
	document.getElementById("current-" + currentPlayer).textContent = roundScore;
	currentPlayer == 0 ? currentPlayer = 1 : currentPlayer = 0;
	document.querySelector('.dice').style.display = "none";
  	document.querySelector('.player-0-panel').classList.toggle("active");
  	document.querySelector('.player-1-panel').classList.toggle("active");
}

function init(){
	score = [0,0];
	currentPlayer = 0;
	roundScore = 0 ;
	gameState = true;

	document.getElementById("current-0").textContent = 0;
	document.getElementById("current-1").textContent = 0;
	document.getElementById("score-0").textContent = 0;
	document.getElementById("score-1").textContent = 0;
	document.querySelector('.dice').style.display = "none";
	document.getElementById("name-0").textContent = "Player 1";
	document.getElementById("name-1").textContent = "Player 2";
	document.querySelector(".player-0-panel").classList.remove("winner");
	document.querySelector(".player-1-panel").classList.remove("winner");
}

