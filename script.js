function myForEach(array, callback, context) {

	let func = callback;

	if(context){
		func = callback.bind(context)
	}

	for (let i = 0; i < array.length; i++ ){
		func(array[i])
	}
}

let array = [1, 2, 3, 4, 5, 6];

myForEach(array, item => console.log(item));
myForEach(array, function (item) {console.log(this)}, array);


function myFilter(array, callback, context){

	let func = callback;
	let filterArray = []

	if(context){
		func = callback.bind(context)
	}

	for (let i = 0; i < array.length; i++ ){
		if(func(array[i])){
			filterArray[filterArray.length] = array[i]
		}
	}

	return filterArray
}

console.log(myFilter(array, item => item > 4))



function myMap(array, callback, context){

	let func = callback;
	let newArray = []

	if(context){
		func = callback.bind(context)
	}

	for (let i = 0; i < array.length; i++ ){
		newArray[i] = func(array[i])
	}

	return newArray;
}

console.log(myMap(array, item => item*item))


function mySlice(array, startIndex, endIndex){

	let newArray = [];

	for (let i = 0; i < array.length; i++ ){

		if(!endIndex && endIndex != 0){
			if(i >= startIndex){
				newArray[newArray.length] = array[i];
			}
		}
		else {
			if( i >= startIndex && i < endIndex){
				newArray[newArray.length] = array[i];
			}
		}
	}

	return newArray
}
console.log(mySlice(array, 2))

function myReduce(array, callback, initialValue){

	let result = array[0];
	let index = 1

	if(initialValue){
		result = initialValue;
		index = 0
	}

	for (let i = index; i < array.length; i++ ){
		result = callback(result, array[i])
	}

	return result

}

console.log(myReduce(array, function(sum, current) {
	return sum + current
}, 9))