/**
 * Created by max on 12.12.14.
 */



function cell() {
  this.state;
  this.neighbors;

  this.setState = function(bool) {
    this.state = bool;
  }

  this.setNeighbors = function(i) {
    this.neighbors = i;
  }

  this.getState = function() {
    return this.state;
  }
}

function check_cells(obj){
  obj.setState(false);
}

describe('less than two', function () {
  var cellObj = new cell();
  var obj2 = new cell();

  it('living cell with less than two live neighbours dies', function(){
    cellObj.setNeighbors(1);
    cellObj.setState(true);

    obj2.setState(false);

    check_cells(cellObj)

    expect(cellObj.getState()).toBe(obj2.getState());
  });

  it('living cell with two or three live neighbors lives', function(){
    cellObj.setNeighbors(2);
    cellObj.setState(true);

    obj2.setState(true);

    check_cells(cellObj)

    expect(cellObj.getState()).toBe(obj2.getState());


  })
});