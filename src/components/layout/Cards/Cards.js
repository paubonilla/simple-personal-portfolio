import React from 'react'
import CardItem from './CardItem'
import pic9 from '../../../images/k8.jpg'
import pic3 from '../../../images/work.jpg'
import pic5 from '../../../images/img-5.jpg'
import pic1 from '../../../images/img-1.jpg'
import pic6 from '../../../images/img-6.jpg'
import { CardsContainer, CardsWrapper, CardsInner, CardsItemsContainer } from '../Cards/index'
import './Cards.scss'

export default function Cards() {
  return (
    <CardsContainer>
      {/* <h1>Check out</h1> */}
      <CardsWrapper>
        <CardsInner>
          <CardsItemsContainer>
            <CardItem
              src={pic9}
              text="// this is my portfolio"
              alt="..."
              label="Personal"
              path="/portfolio"
            />
            <CardItem
              src={pic3}
              text="// this is my projects container"
              alt="..."
              label="UI/UX"
              path="/projects"
            />
          </CardsItemsContainer>
          <CardsItemsContainer>
            <CardItem
              src={pic5}
              text="// this is my blog page"
              alt="..."
              label="Journal"
              path="/blog"
            />
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
              label="Photography"
              path="/gallery"
            />
          </CardsItemsContainer>
        </CardsInner>
      </CardsWrapper>
    </CardsContainer>
  )
}