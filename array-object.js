// Clase 5 - JavaScript Desde Cero
//ejemplo 1
var arrayNumerico = [56,45,23,12,34,89,14,61];
	console.log("El array tiene "+arrayNumerico.length+" elementos.");
	console.log(arrayNumerico, typeof arrayNumerico, Array.isArray(arrayNumerico));
	console.log("El primer elemento del array es: "+arrayNumerico[0]);
	console.log("El ultimo elemento del array es: "+arrayNumerico[(arrayNumerico.length - 1)]);

	for (var i = 0; i<arrayNumerico.length; i++) {
		console.log("el elemento "+i+" del array es "+arrayNumerico[i]);
	}
// arrays ejemplo 2

var diasSemana = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
var numDia = new Date().getDay();

console.log(diasSemana, numDia);
console.log("Hoy es: "+diasSemana[numDia]);

// arrays ejemplo 3

arrayPersona = [true,'Patricio', 'Orlando', 24, '41586808'];

console.log(arrayPersona);

// Accedo a los elementos del array por sus índices}

console.log("La persona se llama "+arrayPersona[1]+" "+arrayPersona[2]+" y tiene "+arrayPersona[3]+" anos.");


/*Variable de tipo Object*/
objetoPersona = {curso: true, nombre:'Patricio', apellido: 'Orlando', edad: 24, dni: '41586808'};

console.log(objetoPersona, typeof objetoPersona, Array.isArray(objetoPersona));

//accedo a las propiedades de un objeto utilizando la notación punto. (o corchete)

console.log("La persona se llama "+objetoPersona.nombre+" "+objetoPersona.apellido+" y tiene "+objetoPersona.edad+" anos.");

// ARRAY DE OBJETOS
var alumnos = [
{nombre: 'patricio', apellido: 'perez', edad: 24, curso: true, foto: ''},
{nombre: 'analia', apellido: 'orlando', edad: 26, curso: false, foto: ''},
{nombre: 'federico', apellido: 'orlando', edad:30, curso: false, foto: ''},
{nombre: 'adriana', apellido: 'labanca', edad: 65, curso: true, foto: ''}
]

console.log(alumnos);

///  recorrer con ciclo for
console.warn("recorrer con ciclo for");
for(i = 0; i < alumnos.length; i++){
	console.log("El alumno se llama "+
	alumnos[i].nombre+" "+
	alumnos[i].apellido+" y tiene "+
	alumnos[i].edad+" anos.");	
}

/// recorrer con el ciclo for of
console.warn("recorrer con ciclo for of"); 

for(var i of alumnos){

	console.log("El alumno se llama "+
	i.nombre+" "+
	i.apellido+" y tiene "+
	i.edad+" anos.");	
}
/// recorrer con el ciclo for Each
console.warn(" recorrer con ciclo for each")
alumnos.forEach(alumno => {
	console.log(
		"El alumno se llama "+
		alumno.nombre+" "+
		alumno.apellido+" y tiene "+
		alumno.edad+" anos."
	)
})
//Finished array de objetos
// OBJETOS DE OBJETOS
console.warn("objetos de objetos");
var alumnos = {
persona1: {nombre: 'patricio', apellido: 'perez', edad: 24, curso: true, foto: ''},
persona2: {nombre: 'analia', apellido: 'orlando', edad: 26, curso: false, foto: ''},
persona3: {nombre: 'federico', apellido: 'orlando', edad:30, curso: false, foto: ''},
persona4: {nombre: 'adriana', apellido: 'labanca', edad: 65, curso: true, foto: ''}
}
//console.log(alumnos.persona1.nombre);
console.log(alumnos);

console.warn("recorrer con ciclo for in");

for(var key in alumnos){
	
	let i = alumnos[key];
	console.log("El alumno se llama "+
	i.nombre+" "+
	i.apellido+" y tiene "+
	i.edad+" anos.");	
}
//finished objetos de objetos





