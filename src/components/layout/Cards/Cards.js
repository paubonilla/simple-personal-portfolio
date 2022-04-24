import React from 'react'
import CardItem from './CardItem'
import pic1 from '../../../images/resume.png'
import pic3 from '../../../images/work.png'
import pic5 from '../../../images/about.png'
import pic6 from '../../../images/pictures.png'
import { CardsContainer, CardsWrapper, CardsInner, CardsItemsContainer } from '../Cards/index'
import './Cards.scss'

export default function Cards() {
  return (
    <CardsContainer>
      <CardsWrapper>
        <CardsInner>
          <CardsItemsContainer>
            <CardItem
              src={pic5}
              text="// this is my blog page"
              alt="..."
              label="Journal" // label currently hidden from Cards/index.js
              path="/blog"
            />
            <CardItem
              src={pic3}
              text="// this is my projects container"
              alt="..."
              label="UI/UX"  // label currently hidden from Cards/index.js
              path="/projects"
            />
          </CardsItemsContainer>
          <CardsItemsContainer>
            <CardItem
              src={pic1}
              text="// see my resume"
              alt="..."
              label="About" // label currently hidden from Cards/index.js
              path="/about"
            />
            <CardItem
              src={pic6}
              text="// this is my gallery section"
              alt="..."
              label="Galllery" // label currently hidden from Cards/index.js
              path="/gallery"
            />
          </CardsItemsContainer>
        </CardsInner>
      </CardsWrapper>
    </CardsContainer>
  )
}
