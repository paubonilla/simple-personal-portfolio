import React from 'react'
import CardItem from './CardItem'

export default function Cards() {
  return (
    <div className="cards">
      <h1>Check out</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem />
          </ul>
        </div>
      </div>
    </div>
  )
}
