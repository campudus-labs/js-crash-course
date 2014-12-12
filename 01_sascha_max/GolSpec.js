function isAlive(neighbours, cell) {
  if (cell) {
    if (neighbours === 2 || neighbours === 3) {
      return true;
    }
    return false;
  } else {
    if (neighbours === 3) {
      return true;
    } else {
      return false;
    }
  }
}

function isCellInArrayAlive(arr) {
  var row, col, neighbourCount = 0;
  for (row = 0; row < arr.length; row++) {
    for (col = 0; col > arr[0].length; col++) {
      if (arr[row][col]) {
        neighbourCount++;
      }
    }
  }

  return isAlive(neighbourCount, arr[1][1]);
}

describe('less than two', function () {
  it('cell alive -> dies less 2 neighbour', function () {
    expect(isAlive(1, true)).toBe(false);
  });

  it('cell alive -> alive 2 or 3 neighbour', function () {
    expect(isAlive(2, true)).toBe(true);
    expect(isAlive(3, true)).toBe(true);
  });

  it('cell alive -> dies more than 3 neighbour', function () {
    expect(isAlive(4, true)).toBe(false);
  });

  it('cell dead -> alive with 3 neighbour', function () {
    expect(isAlive(3, false)).toBe(true);
  });

  it('cell dead -> dead less 2 neighbour', function () {
    expect(isAlive(1, false)).toBe(false);
  });

  it('cell dead -> dead with 2 neighbour', function () {
    expect(isAlive(2, false)).toBe(false);
  });

  it('cell dead -> dies more than 3 neighbour', function () {
    expect(isAlive(4, false)).toBe(false);
  });

  it('actual array (less than 2 nb) -> dead', function () {
    expect(isCellInArrayAlive([
      [false, false, false],
      [false, true, false],
      [false, false, true]
    ])).toBe(false);
  });


});