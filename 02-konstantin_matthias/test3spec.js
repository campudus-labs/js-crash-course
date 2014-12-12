function Cell(initialBool, initialNeighbours) {
  this.state = initialBool;
  this.neighbours = initialNeighbours;
}

function Bool(initialBool) {
	this.bool = initialBool;
}


function Int(initialNumber) {
	number = initialNumber;
}

// =====================================================0


function isLessThan(number1, number2) {
	return number1.number < number2.number;
}

function isGreaterThan(number1, number2) {
	return number1.number > number2.number;
}

function isEqual(number1, number2) {
	return number1.number === number2.number;
}

function ifClone() {
	
}




function has_more_than_three_neighbours(Cell) {
	return new Bool(!(Cell.neighbours > 3));
}

function has_less_than_two_neighbours(Cell) {
	return new Bool(!(Cell.neighbours < 2));
}

function cell_check(Cell) {
	return has_less_than_two_neighbours(Cell);
	
}

describe('cell check', function() {
	it('living cell with less than two two dies', function() {
		expect(cell_check(new Cell(new Bool(true), 1))).toEqual(new Bool(false));
	});
	it('living cell with less than two two dies', function() {
		expect(cell_check(new Cell(new Bool(true), 0))).toEqual(new Bool(false));
	});
	
	it('living cell with two or three lives', function() {
		expect(cell_check(new Cell(new Bool(true), 2))).toEqual(new Bool(true));
	});
	
	it('living cell with more than three dies', function() {
		expect(cell_check(new Cell(new Bool(true), 4))).toEqual(new Bool(false));
	});
});