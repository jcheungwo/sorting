describe('Bubble Sort', function(){
	var arr;
	beforeAll(function(){
		arr = [11, 15, -5, 32, 37, 11, 9, 1];
	})

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('array should be sorted', function(){
  	expect(bubbleSort(arr)).toEqual([-5, 1, 9, 11, 11, 15, 32, 37]);
  });


});
