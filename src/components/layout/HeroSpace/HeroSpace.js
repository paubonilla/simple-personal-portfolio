import React from 'react'
import Button from '../Button/Button'
import vid2 from '../../../videos/baybayintagalog.mp4'
import '../../../App.scss'
import './HeroSpace.scss'
import styled from 'styled-components'

export const HeroContainer = styled.div`
  /* background: url("images/img-home.jpg") center center/cover no-repeat; */
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;

  > h1 {
    color: #fff;
    font-size: 100px;
    @media (max-width: 480px) {
      font-size: 85px;
    }
    /* margin-top: -100px; */
  }

  > p {
    margin-top: 8px;
    color: #fff;
    font-size: 32px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  }
`

export const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
`

export const ButtonsContainer = styled.div`
  margin-top: 32px;
`

export default function HeroSpace() {
  return (
    <HeroContainer className="hero-container">
      <Video src={vid2} autoPlay loop muted />
      <h1>Hello World, I'm Paulo</h1>
      <p>&#47;&#47; a front end web developer</p>
      <ButtonsContainer className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          <a href="http://github.com/paubonilla" target="_blank" rel="noopener noreferrer">View GitHub</a>
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          About me
          </Button>
      </ButtonsContainer>
    </HeroContainer>
  )
}
