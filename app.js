let boxes = document.querySelectorAll(".box");
let msg = document.getElementById("msg");
let msgContainer = document.querySelector(".msg-container");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let trunO = true;
let count = 0;

function gameDraw() {
  msg.innerText = `Game Draw`;
  msgContainer.classList.remove("hide");
  disbleBox();
}

function showWinner(winner) {
  msg.innerText = `Congragulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  msgContainer.classList.add("gif");
  disbleBox();
}

function resetGame() {
  trunO = true;
  count = 0;
  msgContainer.classList.add("hide");
  enableBox();
}

function enableBox() {
  for (const box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}

function disbleBox() {
  for (const box of boxes) {
    box.disabled = true;
  }
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (trunO) {
      //player  - O
      box.innerText = "O";
      trunO = false;
      count++;
    } else {
      //Player - X
      box.innerText = "X";
      trunO = true;
      count++;
    }
    box.disabled = true;
    let isWinner = checkWinner();
    if (count == 9 && !isWinner) {
      gameDraw();
    }
  });
});

function checkWinner() {
  for (const pattern of winPattern) {
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;

    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        showWinner(posVal1);
        return true;
      }
    }
  }
}

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);