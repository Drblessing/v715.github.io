'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1; // random number between 1 and 20
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🛑 No Number!';
    displayMessage('🛑 No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      displayMessage(guess > secretNumber ? '⬇️ Too high!' : '⬆️ Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      if (score === 1) {
        score--;
        document.querySelector('.score').textContent = score;
      }
      // document.querySelector('.message').textContent = '💣 You lost the game!';
      displayMessage('💣 You lost the game!');
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '⬇️ Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     if (score === 1) {
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     }
  //     document.querySelector('.message').textContent = '💣 You lost the game!';
  //     document.querySelector('body').style.backgroundColor = 'red';
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '⬆️ Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }
  // else {
  //   if (score === 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   }
  //   document.querySelector('.message').textContent = '💣 You lost the game!';
  //   document.querySelector('body').style.backgroundColor = 'red';
  // }
});
