import './trivial.css'

export const baseDatosTrivial = [
  {
    id: 1,
    pregunta:
      '¿Cuánto tiempo estuvo el Genio atrapado en la lámpara antes de que Aladdín lo liberara?',
    respuestas: ['10.000 años', '1.500 años', '80 años', '5.000 años'],
    respuestaCorrecta: '10.000 años'
  },
  {
    id: 2,
    pregunta: '¿Qué fruta estaba destinada a envenenar a Blancanieves?',
    respuestas: ['Manzana', 'Kiwi', 'Plátano', 'Fresa'],
    respuestaCorrecta: 'Manzana'
  },
  {
    id: 3,
    pregunta: '¿Cuántos años tiene Crush (la tortuga) en Buscando a Nemo?',
    respuestas: ['150 años', '1 año', '90 años', '1.000 años'],
    respuestaCorrecta: '150 años'
  },
  {
    id: 4,
    pregunta:
      '¿En qué animal convierte el pastel encantado de Brave a la madre de Mérida?',
    respuestas: ['En un oso', 'En un tigre', 'En un buho', 'En un gato'],
    respuestaCorrecta: 'En un oso'
  },
  {
    id: 5,
    pregunta: '¿Cuántos felices fantasmas hay en la Mansión Encantada?',
    respuestas: ['900', '13', '450', '80'],
    respuestaCorrecta: '900'
  },
  {
    id: 6,
    pregunta: 'Hay una princesa Disney con un tatuaje, ¿quién es?',
    respuestas: ['Pocahontas', 'Brave', 'Mulán', 'La sirenita'],
    respuestaCorrecta: 'Pocahontas'
  },
  {
    id: 7,
    pregunta: '¿Qué príncipe es el único protagonista de una película Disney?',
    respuestas: [
      'Aladdin',
      'El Príncipe Florian',
      'El Príncipe Felipe',
      'El Príncipe Adam'
    ],
    respuestaCorrecta: 'Aladdin'
  },
  {
    id: 8,
    pregunta: '¿Quién compuso la banda sonora de Toy Story?',
    respuestas: [
      'Randy Newman',
      'Hans Zimmer',
      'John Barry',
      'Ennio Morricone'
    ],
    respuestaCorrecta: 'Randy Newman'
  },
  {
    id: 9,
    pregunta: '¿Qué nombre eligió Mulán cuando se hizo pasar por hombre?',
    respuestas: ['Ping', 'Jan', 'Han', 'Luke'],
    respuestaCorrecta: 'Ping'
  },
  {
    id: 10,
    pregunta: '¿Qué tipo de animal es Judy Hopps?',
    respuestas: ['Coneja', 'Perro', 'Gata', 'Canguro'],
    respuestaCorrecta: 'Coneja'
  },
  {
    id: 11,
    pregunta: '¿De qué color es la aleta de Ariel en La Sirenita?',
    respuestas: ['Verde', 'Rojo', 'Azul', 'Naranja'],
    respuestaCorrecta: 'Verde'
  },
  {
    id: 12,
    pregunta: '¿Qué actriz interpretó a un par de gemelas?',
    respuestas: [
      'Lindsay Lohan',
      'Vanessa Hudgens',
      'Miley Cyrus',
      'Selena Gomez'
    ],
    respuestaCorrecta: 'Lindsay Lohan'
  },
  {
    id: 13,
    pregunta: "¿Qué personaje de Disney canta la canción 'How Far I'll Go'?",
    respuestas: ['Moana', 'Mulán', 'Cenicienta', 'Brave'],
    respuestaCorrecta: 'Moana'
  },
  {
    id: 14,
    pregunta: '¿Qué actor es la voz del Rayo McQueen en la película Cars?',
    respuestas: [
      'Owen Wilson',
      'Hans Conried',
      'Robert Ellis',
      'Candy Candido'
    ],
    respuestaCorrecta: 'Owen Wilson'
  },
  {
    id: 15,
    pregunta: '¿Qué famoso luchador fue el actor de doblaje de Maui en Moana?',
    respuestas: [
      "Dwayne Johnson 'La Roca'",
      'Hulk Hogan',
      'John Cena',
      'Dave Bautista'
    ],
    respuestaCorrecta: "Dwayne Johnson 'La Roca'"
  },
  {
    id: 16,
    pregunta: '¿Cuántos dedos tiene Mickey Mouse?',
    respuestas: ['Ocho', 'Diez', 'Cuatro', 'Seis'],
    respuestaCorrecta: 'Ocho'
  },
  {
    id: 17,
    pregunta: '¿De qué color es la ira en Intensa-mente?',
    respuestas: ['Rojo', 'Azul', 'Amarillo', 'Negro'],
    respuestaCorrecta: 'Rojo'
  },
  {
    id: 18,
    pregunta:
      '¿Quién es el único personaje principal de una película de Disney que nunca habla?',
    respuestas: ['Dumbo', 'Mickey Mouse', 'Nemo', 'Bambi'],
    respuestaCorrecta: 'Dumbo'
  },
  {
    id: 19,
    pregunta: '¿Cuántas hermanas tiene Ariel?',
    respuestas: ['Seis', 'Tres', 'Ocho', 'Once'],
    respuestaCorrecta: 'Seis'
  },
  {
    id: 20,
    pregunta: '¿Qué palabra le enseña Thumper a Bambi?',
    respuestas: ['Pájaro', 'Corre!', 'Amigo', 'Amor'],
    respuestaCorrecta: 'Pájaro'
  },
  {
    id: 21,
    pregunta: '¿Cuáles fueron las primeras palabras de Mickey?',
    respuestas: ['¡Perrito caliente!', 'Hola!', 'Cómo estás?', 'Bazinga!'],
    respuestaCorrecta: '¡Perrito caliente!'
  },
  {
    id: 22,
    pregunta: '¿Cuánto mide el pelo de Rapunzel?',
    respuestas: ['18 metros', '5 metros', '1 metro', '40 metros'],
    respuestaCorrecta: '18 metros'
  }
]

export const createTrivial = (place) => {
  const trivialContainer = document.createElement('div')
  trivialContainer.className = 'trivialContainer'
  place.append(trivialContainer)

  const title = document.createElement('p')
  title.className = 'title'
  title.innerText = 'Trivial Disney'
  trivialContainer.append(title)

  let preguntasMezcladas = []
  let indicePreguntaActual = 0
  let puntuacion = 0

  const mezclarArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const iniciarJuego = () => {
    preguntasMezcladas = mezclarArray(baseDatosTrivial)
    cargarPregunta()
  }

  const cargarPregunta = () => {
    trivialContainer.innerHTML = '' 

    const contenedorPregunta = document.createElement('div')
    contenedorPregunta.className = 'contenedorPregunta'
    trivialContainer.append(contenedorPregunta)

    const pregunta = document.createElement('p')
    pregunta.className = 'pregunta'
    pregunta.innerText = preguntasMezcladas[indicePreguntaActual].pregunta
    contenedorPregunta.append(pregunta)

    const contenedorRespuestas = document.createElement('div')
    contenedorRespuestas.className = 'contenedorRespuestas'
    trivialContainer.append(contenedorRespuestas)

    const respuestasMezcladas = mezclarArray(
      preguntasMezcladas[indicePreguntaActual].respuestas
    )

    for (let i = 0; i < respuestasMezcladas.length; i++) {
      const botonRespuesta = document.createElement('button')
      botonRespuesta.className = 'botonRespuesta'
      botonRespuesta.textContent = respuestasMezcladas[i]
      botonRespuesta.addEventListener('click', (e) => {
        const respuesta = e.target.textContent
        const respuestaCorrecta =
          preguntasMezcladas[indicePreguntaActual].respuestaCorrecta
        const botonesRespuesta = document.querySelectorAll('.botonRespuesta')
        botonesRespuesta.forEach((boton) => {
          boton.disabled = true 
          if (boton.textContent === respuestaCorrecta) {
            boton.style.backgroundColor = 'green' 
          } else if (boton.textContent === respuesta) {
            boton.style.backgroundColor = 'red'
          }
        })
        if (respuesta === respuestaCorrecta) {
          puntuacion += 1
        }
      })
      contenedorRespuestas.append(botonRespuesta)
    }

    const botonSiguientePreguntaContainer = document.createElement('div')
    trivialContainer.append(botonSiguientePreguntaContainer)
    const botonSiguientePregunta = document.createElement('button')
    botonSiguientePregunta.innerText = 'Siguiente Pregunta'
    botonSiguientePregunta.className = 'botonSiguientePregunta'
    botonSiguientePregunta.addEventListener('click', () => {
      indicePreguntaActual++
      if (indicePreguntaActual < preguntasMezcladas.length) {
        cargarPregunta()
      } else {
        mostrarPuntuacionFinal()
      }
    })
    botonSiguientePreguntaContainer.append(botonSiguientePregunta)

    const contenedorPuntuacion = document.createElement('div')
    contenedorPuntuacion.className = 'contenedorPuntuacion'
    contenedorPuntuacion.innerHTML = `Puntuación: ${puntuacion}`
    trivialContainer.append(contenedorPuntuacion)
  }

  const mostrarPuntuacionFinal = () => {
    trivialContainer.innerHTML = ''

    const divPuntuacionFinal = document.createElement('div')
    trivialContainer.append(divPuntuacionFinal)
    divPuntuacionFinal.className = 'divPuntuacionFinal'
    const puntuacionFinal = document.createElement('p')
    puntuacionFinal.innerText = `Tu puntuación final es: ${puntuacion}`
    divPuntuacionFinal.append(puntuacionFinal)

    const botonReiniciar = document.createElement('button')
    botonReiniciar.innerText = 'Reiniciar Juego'
    botonReiniciar.className = 'botonReiniciar'
    botonReiniciar.addEventListener('click', reiniciarJuego)
    trivialContainer.append(botonReiniciar)
  }

  const reiniciarJuego = () => {
    puntuacion = 0
    indicePreguntaActual = 0
    iniciarJuego()
  }

  iniciarJuego()
}
