# Tic Tac Toe Tutorial for browser console

## author: Ryan Morales

### Step-4 Instructions

1. You will be carrying over your `myGame.js` file from step 3.

In order to bring over this file run the following commands:

`git checkout step-3 -- myGame.js`

2. Compare your `myGame.js` script to the `step3script.js` to make sure you're on the right track.

3. Follow the next steps to add to your `myGame.js` script.

### Add condition checks for edge cases and user error

1. Create functions that extract out the prompt logic and add error handling for incorrect user inputs
```js

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
```

2. Modify the code in the `insertCharacter()` function
```js
// function insertCharacter() {
let character = promptForCharacter();
  let row = promptForRow();
  let column = promptForColumn();

  // Check if the cell is already occupied
  if (board[row][column] !== "_") {
    alert("Cell is already occupied. Please choose another cell.");
    return insertCharacter(); // Re-run the entire function if the cell is occupied
  }

  // board[row][column] = character;
  
```


Finally, Run 
> `git add myGame.js`
> `git commit -m "finished myGame.js step-4`
> `git checkout step-4`