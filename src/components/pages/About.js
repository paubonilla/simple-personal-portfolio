import React from 'react'
import '../../App.scss'
import self from '../../images/self.jpg'
import styled from 'styled-components'

export const AboutContainer = styled.div`
  background-image: url(${self});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* background: #393b44; */
  color: #f1f3f8;
  /* font-size: 70px; */
  @media (max-width: 768px) {
    /* font-size: 70px; */
  }
`

export default function About() {
  return (
    <AboutContainer>
      <div className="about">
        <h1>
          Paulo Feliciano Bonilla
          <br />
          &#60;Frontend Developer &#47;&#62;
          <br />
          Los Angeles, CA
        </h1>
      </div>
    </AboutContainer>
  )
}