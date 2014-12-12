/**
 * Limitations:
 * 1. No else
 * 2. No if / switch
 * 3. No for / while /
 * 4. No primitives
 * 5. No return
 */

var testResult = {};
var startBoard = {};
var newBoard = {};

function gameOfLife(obj) {

  testResult.isAlive = (obj.neighbors < 4 && obj.neighbors > 1) && obj.state == 1;
  testResult.isAlive = testResult.isAlive || (obj.state == 0 && obj.neighbors == 3);

}

function theBoard(startBoard) {

  var startBoard = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];

  newBoard =
  countNeighbors(startBoard);
  //countNeighbors
  //
  //return newBoard
}

function countNeighbors(startBoard) {
  startBoard.neighbors = startBoard[0][0] + startBoard[0][1] + startBoard[0][2] +
      startBoard[1][0] + startBoard[1][2] +
      startBoard[2][0] + startBoard[2][1] + startBoard[2][2];
}

describe('Game of Live Tests', function () {

  it('living cell should die with less than two neighbors', function () {

    gameOfLife({neighbors : 0, state : 1});
    expect(testResult.isAlive).toBe(false);

  });

  it('living cell should stay alive with two or three neighbors', function () {

    gameOfLife({neighbors : 2, state : 1});
    expect(testResult.isAlive).toBe(true);

    gameOfLife({neighbors : 3, state : 1});
    expect(testResult.isAlive).toBe(true);

  });

  it('living cell should die with more than three neighbors', function () {

    gameOfLife({neighbors : 4, state : 1});
    expect(testResult.isAlive).toBe(false);

    gameOfLife({neighbors : 5, state : 1});
    expect(testResult.isAlive).toBe(false);

    gameOfLife({neighbors : 6, state : 1});
    expect(testResult.isAlive).toBe(false);

    gameOfLife({neighbors : 7, state : 1});
    expect(testResult.isAlive).toBe(false);

    gameOfLife({neighbors : 8, state : 1});
    expect(testResult.isAlive).toBe(false);

  });

  it('dead cell with exactly three neighbors comes alive', function () {

    gameOfLife({neighbors : 3, state : 0});
    expect(testResult.isAlive).toBe(true);
    gameOfLife({neighbors : 4, state : 0});
    expect(testResult.isAlive).toBe(false);

  });

  it('checks the number of neighbors', function () {

    var startBoard = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ];
    countNeighbors(startBoard);
    expect(startBoard.neighbors).toBe(1);

    startBoard = [
        [0, 1, 0],
        [0, 1, 1],
        [0, 0, 1]
    ];

    countNeighbors(startBoard);
    expect(startBoard.neighbors).toBe(3);

  });

});