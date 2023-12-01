# Tic Tac Toe Tutorial for browser console

## author: Ryan Morales

### Step-1 Instructions

You will be writing your code into the `myGame.js` file.

Once you have followed the following steps you will copy the code into the Chrome Dev Tools >> Sources >> Snippets
to make sure it's working correctly.

1. Initialize the array that will hold our game board. It will be a multi-dimensional array of three rows with three colmuns each assigned to a string value of an underscore as a place value.

```js
let board = [
  ["_", "_", "_"],
  ["_", "_", "_"],
  ["_", "_", "_"],
];
```

2. We need a function to display the board to the console. This function will use the forEach method to log each row of our board. We will use the join() method to place a vertical pipe "|" between each column of the rows. We will also log a line break character so all rows get printed to the console.

```js
function displayBoard() {
  board.forEach((row) => {
    console.log(row.join("|"));
    console.log("\n");
  });
}
```

3. We will display the board to the console by calling the function at the bottom of the script.

```js
displayBoard();
```

4. Test your code in the browser snippets by pasting your completed code and running `ctrl+s` then `ctrl+enter`, the expected output should look like this
```console
_|_|_

_|_|_

_|_|_
-> undefined
```
5. If your code does not work as expected run the following steps to see what the code should look like and continue on to the nekxt step.

> `git add myGame.js`
> `git commit -m "finished myGame.js step-1`
> `git checkout step-2`