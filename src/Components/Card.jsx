import React from 'react'
import { useState } from 'react'
import './Card.css'

//Turno
let turn = 0
let numberToCompare, lastCard

const Card = ({ number, aciertos, setAciertos, setMensaje }) => {
  const [clicked, setClicked] = useState(false)

  const showNumber = e => {
    e.target.textContent = number.toString()
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
        setMensaje('Bien')
        e.target.style.visibility = 'hidden'
        lastCard.style.visibility = 'hidden'
      } else {
        //Si no son iguales
        setMensaje('Mal')
        e.target.style.backgroundColor = 'tomato'
        lastCard.style.backgroundColor = 'tomato'

        setTimeout(() => {
          e.target.style.backgroundColor = '#242424'
          lastCard.style.backgroundColor = '#242424'
          lastCard.textContent = ''
          lastCard = null
          numberToCompare = undefined
          e.target.textContent = ''
          setMensaje('Seguimos')
        }, 1000)
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
