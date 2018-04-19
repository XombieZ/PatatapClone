var canvas = document.querySelector('canvas');

function resize() 
{
	canvas.width = window.innerWidth;+'px';
	canvas.height = window.innerHeight;+'px';
}

window.addEventListener('load', resize, false);
window.addEventListener('resize', resize, false);