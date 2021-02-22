'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// declaring the random number between 1 and 20;
let score = 20;
//console.log(secretNumber); used during development
let highScore = 0;

//changing message text values during the game
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//Checking guesses
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    displayMessage(`🚨 No number!`);
  }
  //When player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347'; //Setting bckgnd clr to green
    document.querySelector('.number').style.width = '30rem'; //changing width of the box with correct number
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⏬Too high!' : '⏫Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('¯_(ツ)_/¯ You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//When again btn is clicked, setting back values to re-set the game
document.querySelector('.again').addEventListener('click', function () {
  console.log(highScore);
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
