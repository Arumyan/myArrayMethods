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