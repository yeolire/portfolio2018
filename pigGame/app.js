/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as she whishes. Each result get added to her ROUND score
- BUT, if the player rolls a 1, all her ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that her ROUND score gets added to her GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
- A player looses her ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn.
- Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100.
- Add another dice to the game, so that there are two dices now. The player looses her current score when one of them is a 1.

*/



var scroes, roundScroes, activePlayer, winning, gamePlaying, dice, dot, prevDot;
var second, secondDice, secondDot, secondPrevDot;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying) {
    dot = Math.floor(Math.random() * 6) + 1;
    console.log('player' + activePlayer, prevDot, dot);

    dice.style.display = 'block';
    dice.src = 'dice-' + dot + '.png';

    if (second) {
      secondDot = Math.floor(Math.random() * 6) + 1;
      console.log('player' + activePlayer, secondPrevDot, secondDot);

      secondDice.style.display = 'block';
      secondDice.src = 'dice-' + secondDot + '.png';
    }

    if (dot === 1 || secondDot === 1) {
      nextPlayer();
      console.log('next');
    } else {
      console.log('go');

      second ? roundScore += dot + secondDot : roundScore += dot;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
      if ((dot === 6 && prevDot === 6) || (secondDot === 6 && secondPrevDot === 6)) {
        scores[activePlayer] = 0;
        document.getElementById('score-' + activePlayer).textContent = 0;
        nextPlayer();
      }
      prevDot = dot;
      secondPrevDot = secondDot;
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying) {
    prevDot = null;
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    if (scores[activePlayer] >= winning) {
      document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
      dice.style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  dice.classList.add
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click', init);

document.querySelector('.btn-winning').addEventListener('click', function() {
  alert('ok!');
  winning = parseInt(document.getElementById('set-winning').value);
});

document.querySelector('.btn-second').addEventListener('click', function() {
  alert('add second dice!');
  second = true;
  dice.style.display = 'block';
  secondDice.style.display = 'block';
});

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  winning = 100;
  gamePlaying = true;
  second = false;
  dice = document.querySelector('.dice1');
  secondDice = document.querySelector('.dice2');

  console.log(second);

  dice.style.display = 'none';
  secondDice.style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

  return dice;
}
