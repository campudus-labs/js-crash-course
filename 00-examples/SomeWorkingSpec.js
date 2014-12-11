function myFunction(a, b) {
  var i, result;

  if (b < 0) {
    throw Error('No negative values allowed');
  }

  result = 0;

  for (i = 0; i < b; i++) {
    result = result + a;
  }

  return result;
}


describe('My function', function () {

  // Basic equality
  it('should always be zero when b = 0', function () {
    expect(myFunction(0, 0)).toBe(0);
    expect(myFunction(1, 0)).toBe(0);
    expect(myFunction(5, 0)).toBe(0);
    expect(myFunction(-5, 0)).toBe(0);
    expect(myFunction(1234, 0)).toBe(0);
  });

  it('should be the input value when b = 1', function () {
    expect(myFunction(0, 1)).toBe(0);
    expect(myFunction(1, 1)).toBe(1);
    expect(myFunction(5, 1)).toBe(5);
    expect(myFunction(-5, 1)).toBe(-5);
    expect(myFunction(1234, 1)).toBe(1234);
  });

  it('should be the product of a * b, if b > 0', function () {
    expect(myFunction(2, 3)).toBe(6);
    expect(myFunction(-2, 3)).toBe(-6);
    expect(myFunction(7, 10)).toBe(70);
  });

  // Throwing errors
  it('should not work for values below 0', function () {
    expect(function () {
      myFunction(5, -7);
    }).toThrow();
  });

});
