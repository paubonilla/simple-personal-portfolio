import React from 'react'
import Button from '../Button/Button'
import vid2 from '../../../videos/baybayintagalog.mp4'
import '../../../App.scss'
import './HeroSpace.scss'
import { ButtonsContainer, HeroContainer, Video } from './index'

export default function HeroSpace() {
  return (
    <HeroContainer className="hero-container">
      <Video src={vid2} autoPlay loop muted />
      <h1> Hello
      <br /> World,
      <br /> I'm
      <br /> Paulo
      </h1>
      <p>&#47;&#47; a frontend web developer</p>
      <ButtonsContainer className="hero-btns">
        <a href="http://github.com/paubonilla" target="_blank" rel="noopener noreferrer">
          <Button
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            View GitHub
        </Button></a>
      </ButtonsContainer>
    </HeroContainer>
  )
}
