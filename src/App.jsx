import { useState } from 'react'
import './App.css'
import Card from './Components/Card.jsx'
import { generateNumbers } from './functions.js'

let initialNumberOfCards = 8

let numbersOnCards = generateNumbers(initialNumberOfCards)
function App() {
  const [aciertos, setAciertos] = useState(0)
  const [mensaje, setMensaje] = useState('Bienvenid@')

  const resetGame = cards => {
    cards.forEach(card => {
      card.style.visibility = 'visible'
      card.textContent = ''
      card.classList.remove('clicked')
    })
    setMensaje('Ganaste!')
    setAciertos(0)
    const result = confirm('¡Ganaste!¿Quieres seguir un poco más difícil?')
    if (result) {
      initialNumberOfCards *= 2
      numbersOnCards = generateNumbers(initialNumberOfCards)
    }
  }

  let i = 0
  return (
    <main className='principal'>
      <h1>Find the pair, jugando con {initialNumberOfCards} cartas</h1>
      <br />
      <h3>Aciertos: {aciertos}</h3>
      <h2>{mensaje}</h2>
      <div className='grid'>
        {numbersOnCards &&
          numbersOnCards.map(number => {
            return (
              <Card
                key={i++}
                number={number}
                aciertos={aciertos}
                setAciertos={setAciertos}
                setMensaje={setMensaje}
                numbersOnCards={numbersOnCards.length}
                resetGame={resetGame}
              />
            )
          })}
      </div>
    </main>
  )
}

export default App
