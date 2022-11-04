console.warn("Propiedades y métodos en un objeto de JS");

var persona = {
	nombre: 'juan',
	edad: 23,
	saludar : function() {
		return 'hola soy ' + this.nombre;
	}
}
console.log(persona);

console.log('La persona se llama '+ persona.nombre + ' y tiene '+persona.edad+' anos.'+
'Saluda de la siguiente manera: '+persona.saludar());

//string methods
console.warn('string methods');

var miStr = '          hola                     ';
console.log(miStr,miStr.length);

var miStrSinEspacios = miStr.trim();
console.log(miStrSinEspacios, miStrSinEspacios.length);


// arrays methods
console.warn('arrays methods');

var miArray = [1, 2, 3, 4];
console.log(miArray);

miArray.push(5);
console.log(miArray);

miArray.push(18);
console.log(miArray);

