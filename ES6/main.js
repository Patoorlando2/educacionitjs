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

console.warn("Funcionamiento de var / let / const dentro de distintos bloques de codigo");

// bloque de codigo anónimo
{
	var a = 5;
	console.log(a);
}
console.log(a);


// bloque de codigo condicional
if(true){
	var b = 6;
	console.log(b);
}
console.log(b);

// bloque de codigo funcional
function foo() {
	var c = 7;
	console.log(c); 
}
foo();
console.log(c);

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

// crear funcion sin arrow
/*const mult = function(a,b){
	return a * b;
}*/
// crear función con arrow
/*const mult = (a,b) =>{
	return a * b;
}*/ 
//crear función con arrow retorno implícito
const mult = (a,b) => a * b; 
const dobleDe = (a) => 2 * a;
const prtsaludo = () => console.log("Hola!");
const getPersona = () => ({ nombre: 'Juan', edad: 23 })


let n1 = 10, n2 = 5;

//concatenación de strings 
console.log('El producto entre '+ n1 + ' y '+ n2 +' es igual a: '+mult(n1,n2));
console.log('El doble de '+n1+' es: '+dobleDe(n1));
console.log('El doble de '+n2+' es: '+dobleDe(n2));

//template Strings '' backtick
console.warn('template Strings backtick');
console.log(`El producto entre ${n1} y ${n2} es igual a: ${mult(n1,n2)}`);    
console.log(`El doble de ${n1}  es: ${dobleDe(n1)}`);    


prtsaludo();
console.log(getPersona());



