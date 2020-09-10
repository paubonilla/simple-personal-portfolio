import React from 'react'
import './About.scss'
import self from '../../../images/self.jpg'
import styled from 'styled-components'

export const AboutContainer = styled.div`
  background-image: url(${self});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #f1f3f8;
`

export const AbaoutTopHeadline = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 100vw;
  font-size: 40px;
  padding-top: 24rem;
  font-family: "Overpass Mono", monospace;
`

export const Form = styled.div`
  > h5 {
    padding-top: 10px;
    font-size: 16px;
    font-weight: 100;
  }
  > a {
    font-size: 16px;
    background-color: #f1f3f8;
    border-radius: 5px;
    color: #393b44;
    text-decoration: none;
    margin: 20px 0;
    padding: 8px 20px;
    display: flex;
    justify-content: center;
    @media (max-width: 480px) {
      width: 100%;
      border-radius: 0;
      padding: 20px 0;
    }
  }
`

export default function About() {
  return (
    <AboutContainer>
      <AbaoutTopHeadline className="aboutTopHeadline">
        <div className="container">
          <div className="row">
            <div className="column">
              <p className="header">Paulo Feliciano Bonilla <br /> &#60;<span>Frontend Developer</span> &#47;&#62; <br /> Los Angeles, CA</p>
              <p className="second-row">This is my website, please feel welcomed to browse through it and learn more about me &#38; my work. Thank you for your time, enjoy! And maybe you can help me improve my skills. If you have any feedback or ways that I can work on, you can always contact me.
              </p>
            </div>
            <Form>
              <h5>Got a project? <br /> Big or small. Hit me up.</h5>
              <a href="mailto:impaubonilla@gmail.com" target="_blank" rel="noopener noreferrer">impaubonilla@gmail.com</a>
            </Form>
          </div>
        </div>
      </AbaoutTopHeadline>
    </AboutContainer>
  )
}