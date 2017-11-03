function split(wholeArray) {
	var midpoint = wholeArray.length / 2;
	return [wholeArray.slice(0, midpoint), wholeArray.slice(midpoint)];
}

function merge(arr1, arr2, returnArray) {
	if (returnArray === undefined)
		returnArray = [];
	if (arr1.length === 0)
		return returnArray.concat(arr2);
	if (arr2.length === 0)
		return returnArray.concat(arr1);
	if (arr1[0] < arr2[0]) {
		returnArray.push(arr1[0]);
		arr1.shift();
		return merge(arr1, arr2, returnArray);
	}
	else {
		returnArray.push(arr2[0]);
		arr2.shift();
		return merge(arr1, arr2, returnArray);
	}
}

function mergeSort(arr) {
	if(arr.length < 2) 
		return arr;
	var splits = split(arr);
	return merge(mergeSort(splits[0]), mergeSort(splits[1]));
	// console.log(arr, 'hello');
	// var newArr = [];
	// if(arr.length === 0)
	// 	return arr;
	// if(checkArray(arr[0]) !== null){
	// 	return;
	// }
	// return mergeSort(betterSplit(arr));
}

// function checkArray(array) {
// 	if(array[1] != undefined)
// 		return null;
// 	if(typeof array[0] === 'number') {
// 		if(array[1] === undefined)
// 			return array[0];
// 	}	
// 	else {
// 		return checkArray(array[0]);
// 	}
// }