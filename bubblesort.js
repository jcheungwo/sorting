function bubbleSort(array) {
	var n = 0
	var check = 0;
	var count = 0;
	for (var i = 0; i < array.length - n; i++) {
		swap(array, i,count);
		console.log(count);
		if (array.length-(n+1) === i && count === check)
		 	return array;
		if (array.length-(n+1) === i) {
			check = count;
			i = -1;
			n++;
		}

	}
	return array;
}
// arr = [25, 30, 12, 16, 2, 85, 30, -7]
//helperfunction

function swap(array, index,count) {
	var hold = array[index];

	if(array[index] > array[index+1]) {
		count++;
		array[index] = array[index+1];
		array[index+1] = hold;
	}

	return array;
}