import React from 'react'
import Button from '../Button/Button'
import vid2 from '../../../videos/video-2.mp4'
import '../../../App.scss'
import './HeroSpace.scss'

export default function HeroSpace() {
  return (
    <div className="hero-container">
      <video src={vid2} autoPlay loop muted />
      <h1>Hello World, I'm Paulo</h1>
      <p>&#47;&#47; a front end web developer</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          View GitHub
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          About me
          </Button>
      </div>
    </div>
  )
}
