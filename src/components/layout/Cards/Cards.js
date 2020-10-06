import React from 'react'
import CardItem from './CardItem'
import pic3 from '../../../images/work.jpg'
import pic5 from '../../../images/k8.jpg'
import pic1 from '../../../images/k8.jpg'
import pic6 from '../../../images/work.jpg'
import { CardsContainer, CardsWrapper, CardsInner, CardsItemsContainer } from '../Cards/index'
import './Cards.scss'

export default function Cards() {
  return (
    <CardsContainer>
      <CardsWrapper>
        <CardsInner>
          <CardsItemsContainer>
            <CardItem
              src={pic3}
              text="// this is my projects container"
              alt="..."
              label="UI/UX"
              path="/projects"
            />
            <CardItem
              src={pic5}
              text="// this is my blog page"
              alt="..."
              label="Journal"
              path="/blog"
            />
          </CardsItemsContainer>
          <CardsItemsContainer>
            <CardItem
              src={pic1}
              text="// see my resume"
              alt="..."
              label="About"
              path="/about"
            />
            <CardItem
              src={pic6}
              text="// this is my gallery section"
              alt="..."
              label="Galllery"
              path="/gallery"
            />
          </CardsItemsContainer>
        </CardsInner>
      </CardsWrapper>
    </CardsContainer>
  )
}
