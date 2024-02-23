import './botones.css'

export const createButton = (place, classButton, text) => {
  const button = document.createElement('button')
  place.append(button)
 button.className = classButton
 button.innerText = text
}