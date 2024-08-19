"use strict";

//button write o or x on click
//button reset to clear all text
//turn function
//
var ticTac;
let counterClick = 0;
const player1 = "O";
const player2 = "X";
var p1 = "Player 1";
var p2 = "Player 2";
var p2 = "Computer";

const cells = document.querySelectorAll(".cell");
const start = document.querySelector("button");
const text = document.querySelector("#winner");
let started = false;

function startGame() {
  ticTac = Array.from(Array(10).keys());
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.addEventListener("click", mark);
  });
  started = true;
  counterClick = 0;
  start.style.display = "none";
  text.textContent = "";
}
function mark(square) {
  let clickedbutt = square.target.id;
  let player = "";
  if (typeof ticTac[clickedbutt] == "number" && started) {
    if (!(counterClick % 2)) {
      ticTac[clickedbutt] = player1;
      player = player1;
      if (p2 == "Computer" && counterClick < 8 && !winnerOfGame()) {
        Ai();
      }
    } else {
      ticTac[clickedbutt] = player2;
      player = player2;
    }
    document.getElementById(`${clickedbutt}`).textContent = player;
    counterClick += 1;
    if (counterClick >= 9 || winnerOfGame()) {
      result(winnerOfGame());
    }
  }
}

function winnerOfGame() {
  let winner = null;
  let i = 1;
  let j = 1;
  while (i < 8) {
    if (ticTac[i] === ticTac[i + 1] && ticTac[i + 1] === ticTac[i + 2]) {
      ticTac[i] == "O" ? (winner = p1) : (winner = p2);
      return winner;
    }
    i += 3;
    if (ticTac[j] === ticTac[j + 3] && ticTac[j + 3] === ticTac[j + 6]) {
      ticTac[j] == "O" ? (winner = p1) : (winner = p2);
      return winner;
    }
    j += 1;
  }
  if (
    (ticTac[1] === ticTac[5] && ticTac[5] == ticTac[9]) ||
    (ticTac[3] === ticTac[5] && ticTac[5] == ticTac[7])
  ) {
    ticTac[5] == "O" ? (winner = p1) : (winner = p2);
    return winner;
  } else {
    return winner;
  }
}
function result(winner) {
  start.style.display = "block";
  start.textContent = "Restart";
  started = false;
  winner
    ? (text.textContent = `${winner} won the game`)
    : (text.textContent = "Draw");
}
function emptySquare() {
  return ticTac.filter((s) => typeof s == "number");
}
function Ai() {
  counterClick += 1;
  let unmarked = emptySquare();
  let computerMark =
    unmarked[Math.floor(Math.random() * (unmarked.length - 1)) + 1];
  console.log(unmarked, computerMark);
  ticTac[computerMark] = player2;
  console.log(ticTac, computerMark);
  document.getElementById(`${computerMark}`).textContent = player2;
}
