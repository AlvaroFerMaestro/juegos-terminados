import { createTrivial } from '../trivial/trivial'
import './botonesInicio.css'
import { createAhorcado } from '../Ahorcado/ahorcado'
import { initializeMemoryGame } from '../memory/memory'


export const botonesInicio = (place) => {
  const divBotonesInicio = document.createElement('div')
  divBotonesInicio.className = 'divBotonesInicio'
  place.append(divBotonesInicio)
  const button1 = document.createElement('button')
  const button2 = document.createElement('button')
  const button3 = document.createElement('button')

  button1.className = 'buttonInicio'
  button2.className = 'buttonInicio'
  button3.className = 'buttonInicio'

  button1.innerText = 'Ahorcado'
  button2.innerText = 'Trivial'
  button3.innerText = 'Memory'

  divBotonesInicio.appendChild(button1)
  divBotonesInicio.appendChild(button2)
  divBotonesInicio.appendChild(button3)

  const divApp = document.querySelector('#app')

  button1.addEventListener('click', () => {
    divBotonesInicio.style.display = 'none'
    createAhorcado(divApp)
    const divBotonRetorno = document.createElement('div')
    divBotonRetorno.className = 'divBotonRetorno'
    divApp.append(divBotonRetorno)
    const botonRetorno = document.createElement('button')
    botonRetorno.className = 'botonRetorno'
    botonRetorno.innerText = 'Inicio'
    divBotonRetorno.append(botonRetorno)
    botonRetorno.addEventListener('click', () => {
      const ahorcadoContainer = document.querySelector('.ahorcadoContainer')
      ahorcadoContainer.remove()
      divBotonesInicio.style.display = 'flex'
      divBotonRetorno.remove()
    })

  })

  button2.addEventListener('click', () => {
    divBotonesInicio.style.display = 'none'
    createTrivial(divApp)
    const divBotonRetorno = document.createElement('div')
    divBotonRetorno.className = 'divBotonRetorno'
    divApp.append(divBotonRetorno)
    const botonRetorno = document.createElement('button')
    botonRetorno.className = 'botonRetorno'
    botonRetorno.innerText = 'Inicio'
    divBotonRetorno.append(botonRetorno)
    botonRetorno.addEventListener('click', () => {
      const trivialContainer = document.querySelector('.trivialContainer')
      trivialContainer.remove()
      divBotonesInicio.style.display = 'flex'
      divBotonRetorno.remove()
    })
    
  })

  button3.addEventListener('click', () => {
    divBotonesInicio.style.display = 'none'
    initializeMemoryGame(divApp)
    const divBotonRetorno = document.createElement('div')
    divBotonRetorno.className = 'divBotonRetorno'
    divApp.append(divBotonRetorno)
    const botonRetorno = document.createElement('button')
    botonRetorno.className = 'botonRetorno'
    botonRetorno.innerText = 'Inicio'
    divBotonRetorno.append(botonRetorno)
    botonRetorno.addEventListener('click', () => {
      const memoryContainer = document.querySelector('#game-container')
     memoryContainer.remove()
      divBotonesInicio.style.display = 'flex'
      divBotonRetorno.remove()
    })
  })
}