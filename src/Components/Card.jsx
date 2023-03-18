import React from 'react'
import './Card.css'

//Turno
let turn = 0
let numberToCompare, lastCard
const cards = []

const Card = ({ number, aciertos, setAciertos, setMensaje, numbersOnCards, resetGame }) => {
  const showNumber = e => {
    cards.push(e.target)
    e.target.textContent = number.toString()
    e.target.classList.add('clicked')
    //Si es turno 0 guardamos ese botón y el numero a comparar y pasamos el turno
    if (turn === 0) {
      lastCard = e.target
      numberToCompare = number
      turn = 1
    } else {
      //Si es el turno de comparar
      //Si son iguales
      if (numberToCompare === number) {
        setAciertos(aciertos + 1)
        let newAciertos = aciertos + 1
        setMensaje('Bien')
        e.target.style.visibility = 'hidden'
        lastCard.style.visibility = 'hidden'
        if (newAciertos === numbersOnCards / 2) {
          aciertos = 0
          newAciertos = 0
          resetGame(cards)
        }
      } else {
        //Si no son iguales
        setMensaje('Mal')
        e.target.style.backgroundColor = 'tomato'
        lastCard.style.backgroundColor = 'tomato'

        //Hacemos el efecto y retomamos
        setTimeout(() => {
          e.target.style.backgroundColor = '#242424'
          lastCard.style.backgroundColor = '#242424'
          lastCard.textContent = ''
          e.target.textContent = ''
          lastCard.classList.remove('clicked')
          e.target.classList.remove('clicked')
          numberToCompare = undefined
          lastCard = null
          setMensaje('Seguimos')
        }, 200)
      }
      turn = 0
    }
  }

  return (
    <div
      className='card'
      onClick={showNumber}
    ></div>
  )
}

export default Card
