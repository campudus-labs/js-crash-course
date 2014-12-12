/**
 * Created by max on 12.12.14.
 */
function deadOrAlive(neighbours, cell) {


  if (neighbours < 2) {
    return false;
  } else if (neighbours === 2 || neighbours === 3) {
    return true;
  } else if (neighbours > 3) {
    return false;
  }

}

var field = [];

function fieldInit() {

  return [
    [false, false, false],
    [true, false, false],
    [false, true, true]
  ];
}

describe('less than two', function () {
    it('should die if one neighbour', function () {
      expect(deadOrAlive(1, true)).toBe(false);
    });

    it('should die if zero neighbour', function () {
      expect(deadOrAlive(0, true)).toBe(false);
    })

    it('should live if two neighbours', function () {
      expect(deadOrAlive(2, true)).toBe(true);
    })

    it('should live if three neighbours', function () {
      expect(deadOrAlive(3, true)).toBe(true);
    })

    it('should die if more than three neighbours', function () {
      expect(deadOrAlive(4, true)).toBe(false);
    })

    it('should die if more than three neighbours', function () {
      expect(deadOrAlive(5, true)).toBe(false);
    })

    it('should die if more than three neighbours', function () {
      expect(deadOrAlive(6, true)).toBe(false);
    })

    it('dead cell with three neighbours comes alive', function () {
      expect(deadOrAlive(3, false)).toBe(true);
    })

    it('should look like array with 9 fields', function () {
      var expected = [
        [false, false, false],
        [true, false, false],
        [false, true, true]
      ];
      expect(fieldInit()).toBe(expected);
    })

  }
);