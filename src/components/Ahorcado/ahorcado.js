import './ahorcado.css'

export const createAhorcado = (place) => {
  const partesAhorcado = [
    'cabeza', 'cuerpo', 'brazo-izquierdo', 'brazo-derecho', 'pierna-izquierda', 'pierna-derecha'
  ];

  const palabras = ['javascript', 'html', 'css', 'react', 'python'];
  let palabraSeleccionada = '';
  let palabraAdivinada = [];
  let intentosIncorrectos = 0;
  let letrasUsadas = [];

  const crearSvgAhorcado = () => {
    
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('height', '200');
    svg.setAttribute('width', '200');
    
    // Cabeza
    const cabeza = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cabeza.setAttribute('cx', '100');
    cabeza.setAttribute('cy', '50');
    cabeza.setAttribute('r', '20');
    cabeza.setAttribute('class', 'cabeza');
    svg.appendChild(cabeza);
    
    // Cuerpo
    const cuerpo = document.createElementNS("http://www.w3.org/2000/svg", "line");
    cuerpo.setAttribute('x1', '100');
    cuerpo.setAttribute('y1', '70');
    cuerpo.setAttribute('x2', '100');
    cuerpo.setAttribute('y2', '120');
    cuerpo.setAttribute('class', 'cuerpo');
    svg.appendChild(cuerpo);
    
    // Brazo izquierdo
    const brazoIzquierdo = document.createElementNS("http://www.w3.org/2000/svg", "line");
    brazoIzquierdo.setAttribute('x1', '100');
    brazoIzquierdo.setAttribute('y1', '80');
    brazoIzquierdo.setAttribute('x2', '70');
    brazoIzquierdo.setAttribute('y2', '100');
    brazoIzquierdo.setAttribute('class', 'brazo-izquierdo');
    svg.appendChild(brazoIzquierdo);
    
    // Brazo derecho
    const brazoDerecho = document.createElementNS("http://www.w3.org/2000/svg", "line");
    brazoDerecho.setAttribute('x1', '100');
    brazoDerecho.setAttribute('y1', '80');
    brazoDerecho.setAttribute('x2', '130');
    brazoDerecho.setAttribute('y2', '100');
    brazoDerecho.setAttribute('class', 'brazo-derecho');
    svg.appendChild(brazoDerecho);
    
    // Pierna izquierda
    const piernaIzquierda = document.createElementNS("http://www.w3.org/2000/svg", "line");
    piernaIzquierda.setAttribute('x1', '100');
    piernaIzquierda.setAttribute('y1', '120');
    piernaIzquierda.setAttribute('x2', '80');
    piernaIzquierda.setAttribute('y2', '150');
    piernaIzquierda.setAttribute('class', 'pierna-izquierda');
    svg.appendChild(piernaIzquierda);
    
    // Pierna derecha
    const piernaDerecha = document.createElementNS("http://www.w3.org/2000/svg", "line");
    piernaDerecha.setAttribute('x1', '100');
    piernaDerecha.setAttribute('y1', '120');
    piernaDerecha.setAttribute('x2', '120');
    piernaDerecha.setAttribute('y2', '150');
    piernaDerecha.setAttribute('class', 'pierna-derecha');
    svg.appendChild(piernaDerecha);
  
    return svg;
  };

  const crearBoton = () => {
    const boton = document.createElement('button');
    boton.textContent = 'Reiniciar';
    boton.className = 'reiniciar-boton';
    boton.addEventListener('click', reiniciarJuego);
    return boton;
  };

  const crearParrafo = () => {
    const parrafo = document.createElement('p');
    parrafo.setAttribute('class', 'mensaje resultado');
    return parrafo;
  };

  const crearVisualizacionContainer = () => {
    const container = document.createElement('div');
    container.setAttribute('class', 'visualizacion-container');
    container.appendChild(crearVisualizacionPalabra());
    container.appendChild(crearLetrasUsadas());
    container.appendChild(crearParrafo());
    container.appendChild(crearBoton());
    return container;
  };

  const crearVisualizacionPalabra = () => {
    const visualizacionPalabra = document.createElement('div');
    visualizacionPalabra.setAttribute('class', 'visualizacion-palabra');
    return visualizacionPalabra;
  };

  const crearLetrasUsadas = () => {
    const letrasUsadasDiv = document.createElement('div');
    letrasUsadasDiv.setAttribute('class', 'letras-usadas');
    return letrasUsadasDiv;
  };

  const reiniciarJuego = () => {
    palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];
    palabraAdivinada = new Array(palabraSeleccionada.length).fill('_');
    intentosIncorrectos = 0;
    letrasUsadas = [];

    actualizarVisualizacionPalabra();
    resetearAhorcado();
    actualizarResultado('');
    actualizarLetrasUsadas();
  };

  const actualizarVisualizacionPalabra = () => {
    const visualizacionPalabra = document.querySelector('.visualizacion-palabra');
    visualizacionPalabra.textContent = palabraAdivinada.join(' ');
  };

  const resetearAhorcado = () => {
    partesAhorcado.forEach(part => {
      const elementos = document.querySelectorAll(`.${part}`);
      elementos.forEach(elemento => {
        elemento.style.display = 'none';
      });
    });
  };

  const actualizarResultado = (mensaje) => {
    const elementoResultado = document.querySelector('.resultado');
    elementoResultado.textContent = mensaje;
  };

  const verificarAdivinanza = (letra) => {
    if (palabraSeleccionada.includes(letra)) {
      palabraSeleccionada.split('').forEach((char, index) => {
        if (char === letra) {
          palabraAdivinada[index] = letra;
        }
      });
      if (!palabraAdivinada.includes('_')) {
        actualizarResultado('¡Has ganado! La palabra es: ' + palabraSeleccionada);
      }
    } else {
      if (!letrasUsadas.includes(letra)) {
        letrasUsadas.push(letra);
        intentosIncorrectos++;
        mostrarParteAhorcado();
      }

      if (intentosIncorrectos === partesAhorcado.length) {
        actualizarResultado('¡Has perdido! La palabra era: ' + palabraSeleccionada);
      }
    }
    actualizarVisualizacionPalabra();
    actualizarLetrasUsadas();
  };

  const mostrarParteAhorcado = () => {
    const parteActual = partesAhorcado[intentosIncorrectos - 1];
    const elementoParte = document.querySelector(`.${parteActual}`);
    if (elementoParte) {
      elementoParte.style.display = 'block';
    }
  };

  const manejarTecla = (event) => {
    if (intentosIncorrectos === partesAhorcado.length || !palabraAdivinada.includes('_')) {
      return;
    }
    const letra = event.key.toLowerCase();
    if (/^[a-z]$/.test(letra) && palabraAdivinada.includes('_') && !letrasUsadas.includes(letra)) {
      verificarAdivinanza(letra);
    }
  };

  const actualizarLetrasUsadas = () => {
    const letrasUsadasDiv = document.querySelector('.letras-usadas');
    letrasUsadasDiv.textContent = `Letras ya usadas: ${letrasUsadas.join(', ')}`;
  };

  document.addEventListener('keydown', manejarTecla);

  const crearJuegoAhorcado = () => {
    const ahorcadoDiv = document.createElement('div');
    ahorcadoDiv.setAttribute('class', 'ahorcado');
    ahorcadoDiv.appendChild(crearSvgAhorcado());
    return ahorcadoDiv;
  };

  const inicializarJuegoAhorcado = () => {
    const ahorcadoContainer = document.createElement('div');
    ahorcadoContainer.setAttribute('class', 'ahorcadoContainer');
    ahorcadoContainer.appendChild(crearJuegoAhorcado());
    ahorcadoContainer.appendChild(crearVisualizacionContainer());
    place.appendChild(ahorcadoContainer);
    reiniciarJuego();

    
  };

  

  inicializarJuegoAhorcado();


}