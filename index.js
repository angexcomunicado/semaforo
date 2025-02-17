const luzVerde = document.getElementById('verde');
const luzRoja = document.getElementById('rojo');
const luzAmarillo = document.getElementById('amarillo')

const botonVerde = document.getElementById('green');
const botonRojo = document.getElementById('red');
const botonAmarillo = document.getElementById('yellow');


function turnOn(color) {
    luzVerde.style.backgroundColor = 'grey';
    luzRoja.style.backgroundColor = 'grey';
    luzAmarillo.style.backgroundColor = 'grey';
    luzVerde.style.boxShadow = '0 0 0px 0px rgba(0, 0, 0, 0)';
    luzRoja.style.boxShadow = '0 0 0px 0px rgba(0, 0, 0, 0)';
    luzAmarillo.style.boxShadow = '0 0 0px 0px rgba(0, 0, 0, 0)';

    if (color === 'green') {
        luzVerde.style.backgroundColor = 'green'
        luzVerde.style.boxShadow = '0 0 20px 10px rgba(0, 128, 0, 0.8)';
        luzRoja.style.boxShadow = '0 0 0px 0px rgba(0, 0, 0, 0)';
        luzAmarillo.style.boxShadow = '0 0 0px 0px rgba(0, 0, 0, 0.8)';
    } else if (color === 'red') {
        luzRoja.style.backgroundColor = 'red'
        luzRoja.style.boxShadow = '0 0 20px 10px rgba(255, 0, 0, 0.8)';
        luzVerde.style.boxShadow = '0 0 0px 0px rgba(0, 0, 0, 0)';
        luzAmarillo.style.boxShadow = '0 0 0px 0px rgba(0, 0, 0, 0.8)';
    } else if (color === 'yellow') {
        luzAmarillo.style.backgroundColor = 'yellow'
        luzAmarillo.style.boxShadow = '0 0 20px 10px rgba(255, 255, 0, 0.8)';
        luzRoja.style.boxShadow = '0 0 0px 0px rgba(0, 0, 0, 0)';
        luzVerde.style.boxShadow = '0 0 0px 0px rgba(0, 0, 0, 0.8)';
    }
}


botonVerde.addEventListener('click', () => turnOn('green'));
botonRojo.addEventListener('click', () => turnOn('red'));
botonAmarillo.addEventListener('click', () => turnOn('yellow'));