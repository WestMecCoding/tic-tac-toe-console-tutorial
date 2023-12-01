let board = [
  ["_", "_", "_"],
  ["_", "_", "_"],
  ["_", "_", "_"],
];

function displayBoard() {
  console.log("  c:0, c:1, c:3");
  board.forEach((row, index) => {
    console.log("r " + index + ": " + row.join(" | "));
  });
  console.log("*********type `go()` to play***********");
}

function go() {
  insertCharacter();
}

displayBoard();

console.log("type `go()` to play.");

function insertCharacter() {
  let character = prompt("Enter X or O:");
  let row = prompt("Enter row number (0, 1, 2):");
  let column = prompt("Enter col number (0, 1, 2): ");

  board[row][column] = character;

  let winner = checkWinner();

  if (winner) {
    if (winner === "Tie") {
      console.log("It's a tie!");
    } else {
      console.log(winner + " wins!");
    }
    board = [
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ];

  }

  displayBoard();
}

function checkWinner() {
  // Check rows and columns
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2] &&
      board[i][0] !== "_"
    ) {
      return board[i][0];
    }
    if (
      board[0][i] === board[1][i] &&
      board[1][i] === board[2][i] &&
      board[0][i] !== "_"
    ) {
      return board[0][i];
    }
  }

  // Check diagonals
  if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[0][0] !== "_"
  ) {
    return board[0][0];
  }
  if (
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0] &&
    board[0][2] !== "_"
  ) {
    return board[0][2];
  }

  // Check for tie (no empty cells)
  if (board.every((row) => row.every((cell) => cell !== "_"))) {
    return "Tie";
  }

  return null; // No winner or tie
}