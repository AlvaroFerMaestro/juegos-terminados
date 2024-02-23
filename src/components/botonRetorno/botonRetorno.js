import './botonRetorno.css'


export const buttonRetorno = (place) => {

const ahorcadoContainer = document.querySelector('.ahorcadoContainer')
const trivialContainer = document.querySelector('.trivialContainer')
const gameContainer = document.querySelector('#game-container')
const botonesInicio = document.querySelector('.divBotonesInicio')

const divBotonRetorno = document.createElement('div')
divBotonRetorno.className = 'divBotonRetorno'
place.appendChild(divBotonRetorno)

const botonRetorno = document.createElement('button')
botonRetorno.className = 'botonRetorno'
botonRetorno.innerText = 'Inicio'
divBotonRetorno.appendChild(botonRetorno)

// botonRetorno.addEventListener('click', () => {
//   if (ahorcadoContainer.style.display = 'flex') {
//     ahorcadoContainer.style.display = 'none'
//     botonesInicio.style.display = 'flex'
//     divBotonRetorno.style.display = 'none'
//   } else if (trivialContainer.style.display = 'flex') {
//     trivialContainer.style.display = 'none'
//     botonesInicio.style.display = 'flex'
//     divBotonRetorno.style.display = 'none'
//   } else if (gameContainer.style.display = 'flex') {
//     gameContainer.style.display = 'none'
//     botonesInicio.style.display = 'flex'
//     divBotonRetorno.style.display = 'none'
//   }

// })

}


