import React from 'react'
import './Hero.css'

const urlSpaceShip = "https://vignette.wikia.nocookie.net/starwars/images/0/09/FOSpecForcesTIE1-Fathead.png/revision/latest?cb=20161109002850"

export function Hero() {
  return (
    <header className='Hero'>
      {/* Empty alt text because it's a presentational image */}
      <img className="Hero-spaceship" src={urlSpaceShip} alt=""/>
      <h1 className='Hero-title'>Star Wars</h1>
      <span className='Hero-subtitle'>All the resources you need</span>
    </header>
  )
}
