# Tic Tac Toe Tutorial for browser console

## author: Ryan Morales

### Step-2 Instructions

1. You will be carrying over your `myGame.js` file from step 1.

In order to bring over this file run the following commands:

`git checkout step-1 -- myGame.js`

2. Compare your `myGame.js` script to the `step1script.js` to make sure you're on the right track.

3. Follow the next steps to add to your `myGame.js` script.

4. Add console logs to the display board function to show the column number and a footer log to separate the end of the last board display with a message the user can see to know when to type go().

- also pass in the index parameter to the forEach method concatenate a row message with the index of each row for visual clarity.

```js
function displayBoard() {
  console.log("  c:0, c:1, c:2");
  board.forEach((row, index) => {
    console.log("r " + index + ": " + row.join(" | "));
  });
  console.log("*********type `go()` to play***********");
}
```

5. Create an insertCharacter() function that takes three prompts for the character, row and column you want the player to insert, utilizing a string message for what the user should do. Assign these prompts to variable names character, row and column.

- Then manipulate the board using indexing by passing the [row] and [column] variables.
- Finally, call the displayBoard() function to write out the user selection to the console.

```js
function insertCharacter() {
  let character = prompt("Enter X or O:");
  let row = prompt("Enter row number (0, 1, 2):");
  let column = prompt("Enter col number (0, 1, 2): ");

  board[row][column] = character;

  displayBoard();
}
```

6. Make sure to log the message to the user to use `go()` to play the game for the first time the script loads.

```js
console.log("type `go()` to play.");
```

7. Create a go() function that allows the user to easily call the insertCharacter() function.

```js
function go() {
  insertCharacter();
}
```
8. Paste your code into the snippet and run `ctrl + s` and `ctrl + enter` to run the program.

9. type `go()` in the console to play the game. A pop up window should open prompting you to enter X/O and a row and column number.

Finally, Run 
> `git add myGame.js`
> `git commit -m "finished myGame.js step-2`
> `git checkout step-3`