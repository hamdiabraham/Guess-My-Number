"use strict";

const secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);

  // if there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!!";

    // when player win the game
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "✔ Correct number!!";
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    // when the input is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game over!! You lose!!";
      document.querySelector(".score").textContent = 0;
    }

    // when the input is too high
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game over!! You lose!!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
