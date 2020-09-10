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
    border: 2px solid #f1f3f8;
    border-radius: 7px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 30px;
    color: #f1f3f8;
    font-size: 100px;
    font-family: 'Anonymous Pro', monospace;
    @media (max-width: 480px) {
      font-size: 80px;
      padding: 20px;
    }
  }
  
  > p {
    margin-top: 8px;
    color: #f1f3f8;
    font-size: 18px;
    opacity: 0.7;
    @media (max-width: 480px) {
      font-size: 14px;
    }
    font-family: "Source Code Pro", monospace;
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
