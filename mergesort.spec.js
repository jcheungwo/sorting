describe('Merge Sort', function(){
	var arr;
	beforeAll(function(){
		arr = [19, 21, 10, 33];
	})


  describe('Split Array function', function(){
    it('is able to split an array into two halves', function() {
    var arr = [1, 2, 3, 4];
    expect(split(arr)).toEqual([[1,2], [3,4]]);
    });
  });

  describe('Merge function', function() {
    it('is able to merge two sorted arrays into one sorted array', function(){
    var arr1 = [19, 21],
    arr2 = [10, 22, 33];
    expect(merge(arr1,arr2)).toEqual([10,19,21,22, 33]);
    });
  });

  // describe('checkArray function', function() {
  //   it('checks if nested array has one number element', function(){
  //     expect(checkArray([[[1]]])).toEqual(1);
  //   })
  // })
  describe('MergeSort function', function() {
    it('handles an empty array', function(){
      expect( mergeSort([]) ).toEqual( [] );
    });
    it('array should be sorted', function(){
    	mergeSort(arr);
      expect(arr).toEqual([10, 19, 21, 33]);
    })
});

});

