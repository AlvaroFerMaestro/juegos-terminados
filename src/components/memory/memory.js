import './memory.css'


export const initializeMemoryGame = (place) => {

  const gameContainer = document.createElement('div');
  gameContainer.id = 'game-container';
  place.appendChild(gameContainer);

  const memoryGame = document.createElement('div');
  memoryGame.id = 'memory-game';
  gameContainer.appendChild(memoryGame);

  const symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const cards = [...symbols, ...symbols];

  const shuffleCards = () => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  };

  const revealCard = (card) => {
    card.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');

    if (flippedCards.length === 2) {
      setTimeout(() => {
        if (flippedCards[0].textContent === flippedCards[1].textContent) {
          flippedCards.forEach((card) => card.classList.add('matched'));
        } else {
          flippedCards.forEach((card) => card.classList.remove('flipped'));
        }

        checkWin();
      }, 1000);
    }
  };

  const checkWin = () => {
    const matchedCards = document.querySelectorAll('.matched');
    if (matchedCards.length === cards.length) {
      alert('¡Has ganado!');
      resetGame();
    }
  };

  const resetGame = () => {
    memoryGame.innerHTML = '';
    startGame();
  };

  const startGame = () => {
    shuffleCards();

    for (const symbol of cards) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.textContent = symbol;
      card.addEventListener('click', () => revealCard(card));

      memoryGame.appendChild(card);
    }
    let flippedCount = 0;
  let isProcessing = false; 

  const revealCard = (card) => {
    if (isProcessing) return; 

    if (!card.classList.contains('flipped') && flippedCount < 2) {
      card.classList.add('flipped');
      flippedCount++;

      if (flippedCount === 2) {
        isProcessing = true;
        setTimeout(() => {
          const flippedCards = document.querySelectorAll('.flipped');

          if (flippedCards[0].textContent === flippedCards[1].textContent) {
            flippedCards.forEach((card) => card.classList.add('matched'));
          } else {
            flippedCards.forEach((card) => card.classList.remove('flipped'));
          }

          checkWin();
          flippedCount = 0;
          isProcessing = false;
        }, 1000);
      }
    }
  };

  };

  startGame(); 
  };

