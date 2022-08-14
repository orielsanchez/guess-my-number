'use strict';

// Variables
var highScore = 0;
var myNumber = getRandomInt(20);
var score = Number(document.querySelector('.score').textContent);
var number = document.querySelector('.number').textContent;

// functions
function getRandomInt(max) {
  var r = Math.floor(Math.random() * max) + 1;
  console.log(r);
  return r;
}

// display functions
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayScore(score) {
  document.querySelector('.score').textContent = score;
}

function displayNumber(number) {
  document.querySelector('.number').textContent = number;
}

function displayHighScore(highScore) {
  document.querySelector('.highscore').textContent = highScore;
}

// check user's guess
function getGuess() {
  var guess = Number(document.querySelector('.guess').value);

  // no input
  if (!guess) {
    displayMessage('No number!');

    // correct guess
  } else if (guess === myNumber) {
    displayScore(score);
    displayNumber(myNumber);
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // new high score
    if (score > highScore) {
      highScore = score;
      displayHighScore(highScore);
    }

    // guess is wrong
  } else if (guess !== myNumber) {
    if (score > 1) {
      displayMessage(guess > myNumber ? 'Too high!' : 'Too low');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game!');
      displayScore(0);
    }
  }
}

// new game
function again() {
  // new random number
  score = 20;
  myNumber = getRandomInt(20);
  displayScore(score);
  displayNumber('?');
  displayMessage('start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}

// event listeners
document.querySelector('.check').addEventListener('click', getGuess);
document.querySelector('.again').addEventListener('click', again);
