function gameOfLife(neighbors, state) {
  if ((state === 'alive' && (neighbors == 2 || neighbors == 3) ||
      (state === 'dead' && neighbors == 3))) {
    return 'alive';
  } else
    return 'dead';
}

describe('Test', function () {
  it('living cell with less than two neighbors', function () {
    expect(gameOfLife(0, 'alive')).toBe('dead');
    expect(gameOfLife(1, 'alive')).toBe('dead');
  });

  it('living cell with two or three neighbors', function () {
    expect(gameOfLife(2, 'alive')).toBe('alive');
    expect(gameOfLife(3, 'alive')).toBe('alive');
  });

  it('living cell with more than three neighbors', function () {
    expect(gameOfLife(4, 'alive')).toBe('dead');
    expect(gameOfLife(5, 'alive')).toBe('dead');
    expect(gameOfLife(6, 'alive')).toBe('dead');
    expect(gameOfLife(7, 'alive')).toBe('dead');
    expect(gameOfLife(8, 'alive')).toBe('dead');
  });

  it('dead cell with exactly three neighbors', function () {
    expect(gameOfLife(3, 'dead')).toBe('alive');
    expect(gameOfLife(4, 'dead')).toBe('dead');
  });

});