# Tic Tac Toe Tutorial for browser console

## author: Ryan Morales

### Step-3 Instructions

1. You will be carrying over your `myGame.js` file from step 2.

In order to bring over this file run the following commands:

`git checkout step-2 -- myGame.js`

2. Compare your `myGame.js` script to the `step2script.js` to make sure you're on the right track.

3. Follow the next steps to add to your `myGame.js` script.

### Check for a winner

1. implement the following check winner function

```js
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
```

2. Insert this code inside insertCharacter() function above displayBoard()

```js

// function insertCharacter() {

//board[row][column] = character;
let winner = checkWinner();
if (winner) {
  if (winner === "Tie") {
    console.log("It's a tie!");
  } else {
    console.log(winner + " wins!");
  }
  // reset the board
  board = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ];
 
}
//displayBoard();
// }
```

#### How It Works

After each move, checkWinner is called.
It checks for three-in-a-row in each row, each column, and both diagonals.
If a winner is found, it returns the winning character ('X' or 'O').
If there are no empty cells left and no winner, it returns 'Tie'.
Otherwise, it returns null, indicating the game should continue.

Finally, Run 
> `git add myGame.js`
> `git commit -m "finished myGame.js step-3`
> `git checkout step-4`