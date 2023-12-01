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
  
  displayBoard();
  
  console.log("type `go()` to play.");
  
  function insertCharacter() {
    let character = prompt("Enter X or O:");
    let row = prompt("Enter row number (0, 1, 2):");
    let column = prompt("Enter col number (0, 1, 2): ");
  
    board[row][column] = character;
  
    displayBoard();
  }

  function go() {
    insertCharacter();
  }