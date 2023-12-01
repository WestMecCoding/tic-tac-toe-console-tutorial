let board = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ];
  
  function displayBoard() {
    board.forEach((row) => {
      console.log(row.join("|"));
      console.log("\n");
    });
  }
  
  displayBoard();