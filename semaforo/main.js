console.warn(document.querySelector('title').innerText);

var estadoSemaforo = 0;

function cambiarEstado() {
	console.log(estadoSemaforo);


	switch(estadoSemaforo) {
		//estado rojo
		case 0:
		cambiarLuzSemaforo('red', true);
		cambiarLuzSemaforo('yellow', false);
		cambiarLuzSemaforo('green', false);
		break;
		//estado amarillo
		case 1:
		cambiarLuzSemaforo('red', true);
		cambiarLuzSemaforo('yellow', true);
		cambiarLuzSemaforo('green', false);
		break;
		//estado verde
		case 2:
		cambiarLuzSemaforo('red', false);
		cambiarLuzSemaforo('yellow', false);
		cambiarLuzSemaforo('green', true);
		break;

		//estado amarillo
		case 3:
		cambiarLuzSemaforo('red', false);
		cambiarLuzSemaforo('yellow', true);
		cambiarLuzSemaforo('green', false);
		break;

		//estado error
		default:
		cambiarLuzSemaforo('red', false);
		cambiarLuzSemaforo('yellow', false);
		cambiarLuzSemaforo('green', false);
		estadoSemaforo = 0;
		break;
	}
	estadoSemaforo++;

	if (estadoSemaforo > 3){ estadoSemaforo = 0; }
}		


function cambiarLuzSemaforo(id, prender){
	// si el id esta en true devuelve el color llamado , si es false es #333.
	document.getElementById(id).style.backgroundColor = prender? id : '#333';
}


var modoAutomatico = false;
var refTimer = null;


function cambiarModo(){

	var button = document.querySelector('estado');


	modoAutomatico = !modoAutomatico;

	console.log(modoAutomatico);

	document.querySelector('h4').innerHTML = modoAutomatico? 'MODO AUTOMATICO' : 'MODO MANUAL';

	if (modoAutomatico) {
		button.disabled = true;
		refTimer = setInterval(cambiarModo, 2000);
	} else {
		button.disabled = true;
		clearInterval(refTimer);
	}
}


cambiarLuzSemaforo('red', false);
cambiarLuzSemaforo('yellow', false);
cambiarLuzSemaforo('green', false);

//setInterval(cambiarEstado, 2000);


