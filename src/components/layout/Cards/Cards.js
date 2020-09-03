import React from 'react'
import CardItem from './CardItem'
import explore from '../../../images/img-9.jpg'
import './Cards.scss'

export default function Cards() {
  return (
    <div className="cards">
      <h1>Check out</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={explore}
              text="Explore"
              label="Adventure"
              path="/blog"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}
