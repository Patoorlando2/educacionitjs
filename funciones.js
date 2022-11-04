// funciones
function representarValoresArray(array){
	console.log(array);
	for(var i = 0; i < array.length; i++){
		console.log("el elemento del indice "+i+" contiene "+array[i]);
	}
}

var array1 = [23, 55, 37, 654, 1, 77];
representarValoresArray(array1);


var array2 = [true, 44, 'Juan', [1, 2, 3]];
representarValoresArray(array2);


