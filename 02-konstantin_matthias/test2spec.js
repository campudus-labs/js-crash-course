function check_cell(neighbours, state){
	if (neighbours < 2 && state === "live"){
		return "dead";
	}
	
	if ((neighbours == 2 || neighbours == 3) && state == "live"){
		return "live";
	}
	
	if (neighbours > 3 && state == "live"){
		return "dead";
	}
	
	if (neighbours == 3 && state =="dead"){
		return "live";
	}else if(state == "dead" && neighbours != 3){
		return "dead";
	}
}

function checkNeighbours(playground, x, y){
	var counter = 0;
	for(var i = 0; i <= playground.length; i++){
			var cells = playground[i];
			for(var j = 0; j <= cells.length; j++){
				if(playground[i][j] === "live"){
					counter++;
				}
			}
	}
	return counter;
}

describe('check_cell',function(){
	it('living cell with less than two dies', function(){
		expect(check_cell( 1 , 'live')).toBe('dead');
	});
	
	it('living cell with two or three live neighbours lives', function(){
		expect(check_cell( 2 , 'live')).toBe('live');
	});
	
	it('living cell with less than two dies', function(){
		expect(check_cell( 3 , 'live')).toBe('live');
	});
	
	it('living cell with more than three live neighbors dies', function(){
		expect(check_cell( 4, 'live')).toBe('dead');
	});
	
	it('dead cell with exactly three live neighbours comes alive', function(){
		expect(check_cell( 3, 'dead')).toBe('live');
	});
	
	it('dead cell with more than three live neighbours dies', function(){
		expect(check_cell( 4, 'dead')).toBe('dead');
	});
	
	it('dead cell with zero living neighbours dies', function(){
		expect(check_cell( 0, 'live')).toBe('dead');
	});
});

describe('check_arrays',function(){
	
	it('dead cell with zero living neighbours dies', function(){
		var playground = [['dead', 'dead', 'dead'],['dead', 'live', 'dead'], ['dead', 'dead', 'live']];
		expect(checkNeighbours(playground, 1, 1)).toBe(1);
	});
});
