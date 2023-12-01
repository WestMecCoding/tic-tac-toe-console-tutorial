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
  let character = promptForCharacter();
  let row = promptForRow();
  let column = promptForColumn();

  // Check if the cell is already occupied
  if (board[row][column] !== "_") {
    alert("Cell is already occupied. Please choose another cell.");
    return insertCharacter(); // Re-run the entire function if the cell is occupied
  }

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

function promptForCharacter() {
  let character = prompt("Enter the character (X/O):");
  if (character !== "X" && character !== "O") {
    alert("Invalid character. Please enter 'X' or 'O'.");
    return promptForCharacter(); // Recursively re-prompt if invalid
  }
  return character;
}

function promptForRow() {
  let row = prompt("Enter the row number (0, 1, 2):");
  if (isNaN(row) || row < 0 || row > 2) {
    alert("Invalid row. Please enter a number between 0 and 2.");
    return promptForRow(); // Recursively re-prompt if invalid
  }
  return row;
}

function promptForColumn() {
  let column = prompt("Enter the column number (0, 1, 2):");
  if (isNaN(column) || column < 0 || column > 2) {
    alert("Invalid column. Please enter a number between 0 and 2.");
    return promptForColumn(); // Recursively re-prompt if invalid
  }
  return column;
}