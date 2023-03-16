import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Card from './Components/Card.jsx'
import { generateNumbers } from './functions.js'

function App() {
  const [aciertos, setAciertos] = useState(0)
  const [mensaje, setMensaje] = useState('Bienvenido')

  //TODO solicitar cantidad de cartas ( que sean pares y mas de 2-4) y hacer el setNumberOfCards
  const [numberOfCards, setNumberOfCards] = useState(16)
  //Generamos los números para las cartas
  //TODO hacerlos aleatoriamente
  const numbersOnCards = generateNumbers(numberOfCards)

  let i = 0
  return (
    <main className='principal'>
      <div className='cabecera'>
        <h1>Find the pair</h1>
        <h3>Aciertos: {aciertos}</h3>
      </div>
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
              />
            )
          })}
      </div>
    </main>
  )
}

export default App
