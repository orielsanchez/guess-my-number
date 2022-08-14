'use strict';

// Variables
var myNumber = getRandomInt(20);
var score = Number(document.querySelector('.score').textContent);
var highScore = 0;
var number = document.querySelector('.number').textContent;

// functions
function getRandomInt(max) {
  var r = Math.floor(Math.random() * max);
  console.log(r);
  return r;
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
function getGuess() {
  var guess = Number(document.querySelector('.guess').value);

  // no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    // correct guess
  } else if (guess === myNumber) {
    score++;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = myNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // new high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // guess is wrong
  } else if (guess !== myNumber) {
    if (score > 1) {
      displayMessage(guess > myNumber ? 'Too high!' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
}

function again() {
  // new random number
  score = 20;
  myNumber = getRandomInt(20);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}

document.querySelector('.check').addEventListener('click', getGuess);
document.querySelector('.again').addEventListener('click', again);
