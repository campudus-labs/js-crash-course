function check_cell(neighbors, state) {
	
	if (state == 'live') {
		if (neighbors < 2) {
			return 'dead';
		}
		
		if (neighbors == 2 || neighbors == 3) {
			return 'live';
		}
		
		if (neighbors > 3) {
			return 'dead';
		}
	}
	else if (state == 'dead') {
		if (neighbors == 3) {
			return 'live';
		}
		else {
			return 'dead';
		}
	}
}

function get_living_neighbors(x, y, playground) {
	
}

describe('check neighbors', function() {
	var playground = [['dead', 'dead', 'dead'],['dead', 'live', 'dead'], ['dead', 'dead', 'live']];
	it('one neighbor', function () {
		expect(get_living_neighbors(1,1, playground)).toBe(1);
	})
});

describe('check current cell', function () {
	
	it('less than two neighbors - dies', function () {
		expect(check_cell(1, 'live')).toBe('dead');
	});
	
	it('less than two neighbors - dies', function () {
		expect(check_cell(0, 'live')).toBe('dead');
	});
	
	it('two or three live neighbors - live', function () {
		expect(check_cell(2, 'live')).toBe('live');
	});
	
	it('two or three live neighbors - live', function () {
		expect(check_cell(3, 'live')).toBe('live');
	});
	
	it('four neighbors - live', function () {
		expect(check_cell(4, 'live')).toBe('dead');
	});
	
	it('three neighbors - dead', function () {
		expect(check_cell(3, 'dead')).toBe('live');
	});
	
	it('four neighbors - dead', function () {
		expect(check_cell(4, 'dead')).toBe('dead');
	});
});


