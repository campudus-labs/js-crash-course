function gameOfLife(cell, neighbors) {

  if (cell == 1) {
    if (neighbors == 2 || neighbors == 3) {
      return 1;
    }
  }
  else {
    if (neighbors == 3) {
      return 1;
    }
  }
  return 0;
}

function gameBoard(board) {

  var newBoard = new Array(3);
  for (var i = 0; i < 3; i++) {
    newBoard[i] = new Array(3);
  }

  var center = board[1][1];
  var neighbors = 0;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (board[i, j] == 1) {
        //unfinished
      }

    }
  }
  return newBoard;
}

var startBoard = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
];
console.log("The Game of live creates: ");
console.log(gameBoard(startBoard));


describe('Game of Life', function () {

  it('dead cell should die with less than two', function () {
    expect(gameOfLife(0, 0)).toBe(0);
    expect(gameOfLife(0, 1)).toBe(0);
  });

  it('dead cell should die with more than three', function () {
    expect(gameOfLife(0, 4)).toBe(0);
    expect(gameOfLife(0, 5)).toBe(0);
    expect(gameOfLife(0, 6)).toBe(0);
    expect(gameOfLife(0, 7)).toBe(0);
    expect(gameOfLife(0, 8)).toBe(0);
  });

  it('living cell should die with more than three', function () {
    expect(gameOfLife(1, 4)).toBe(0);
    expect(gameOfLife(1, 5)).toBe(0);
    expect(gameOfLife(1, 6)).toBe(0);
    expect(gameOfLife(1, 7)).toBe(0);
    expect(gameOfLife(1, 8)).toBe(0);
  });

  it('living cell should live with two neighbors', function () {
    expect(gameOfLife(1, 2)).toBe(1);
  });

  it('living cell should live with three neighbors', function () {
    expect(gameOfLife(1, 3)).toBe(1);
  });

  it('dead cell should live with three neighbors', function () {
    expect(gameOfLife(0, 3)).toBe(1);
  });

});
