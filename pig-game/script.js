"use strict";

// selecting element
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
// current score element
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
// player element
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
// dice element
const diceEl = document.querySelector(".dice");
// button element
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

// Starting conditions
let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--winner");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    // generate random number
    const randomDice = Math.trunc(Math.random() * 6) + 1;

    // display dice
    diceEl.src = `dice-${randomDice}.png`;
    diceEl.classList.remove("hidden");

    // check for rolled 1
    if (randomDice !== 1) {
      currentScore += randomDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // Add current score to active player's score
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // Switch player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", function () {
  init();
});
