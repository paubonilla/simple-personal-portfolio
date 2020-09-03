import React from 'react'
import Button from '../Button/Button'
import '../../../App.scss'
import './HeroSpace.scss'

export default function HeroSpace() {
  return (
    <div className="hero-container">
      <video src="/video/video-1.mp4" autoPlay loop muted />
      <h1>Aventure Awaits</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER
          </Button>
      </div>
    </div>
  )
}
