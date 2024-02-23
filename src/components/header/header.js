import './header.css'

export const Header = (place) => {
  const header = document.createElement('header')
  header.className = 'divHeader'
  place.append(header)

const title = document.createElement('h1') 
title.className = 'h1'
  title.innerText = 'Los Juegos de Ari 🕹️'
  header.appendChild(title)
}