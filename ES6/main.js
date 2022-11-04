console.warn(document.querySelector('title').textContent);

// Nuevos constructores de variables en ES6

/*console.warn("JS5 - VAR");

var numero = 5;
var numero = 6;
//numero = 'pepe'; // justificación de tipado débil
console.log(numero, typeof numero);

var PI = 3.14;
PI = 2.71;
console.log(PI);

for(var i = 0; i < 5; i++){
	console.log(i);
}
console.log(i);*/

//----
console.warn("ES6 - let / const");


let numero = 5;
//let numero = 6;
//numero = 'pepe'; // justificación de tipado débil
console.log(numero, typeof numero);

const PI = 3.14;
//PI = 2.71;
console.log(PI);

for(let i = 0; i < 5; i++){
	console.log(i);
}
//console.log(i);

// Nuevos constructores de funciones en ES6
console.warn("JS5 - funciones");

function sumar(a,b){
	return a + b;
}

var restar = function(a,b){
	return a - b;
}

console.log(sumar(5,6));
console.log(restar(5,6));

console.warn("ES6 - Arrow function");





