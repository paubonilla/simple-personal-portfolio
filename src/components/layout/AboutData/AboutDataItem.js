import React from 'react'
import { AboutContainer, AbaoutTopHeadline, AboutWrapper, Form } from './index'
import './AboutData.scss'

export default function AboutDataItems({ fullName, field, location, desc, header5 }) {
  return (
    <AboutContainer>
      <AbaoutTopHeadline>
        <AboutWrapper>
          <div className="row__one">
            <div className="column">
              <p className="header"><span>{fullName} <br /> &#60;<span className="__span">{field}</span> &#47;&#62; <br /> {location}</span></p>

              <p>{desc}</p>
            </div>
            <div className="column">
              <strong>{header5}</strong>
              <p className="subheader">This site was built with React <i>Hooks</i>.</p>
            </div>
          </div>
          <div className="row__two">
            <div className="column">
              <strong>UI Tools</strong>
              <p>VS Code</p>
              <p>Adobe XD</p>
              <p>Figma</p>
            </div>
            <div className="column">
              <strong>Writing Tools</strong>
              <p>HTML</p>
              <p>SCSS</p>
              <p>Javascript</p>
              <p>Styled Components</p>
            </div>
          </div>
          <div className="row__three">
            <Form>
              <h5>Got a project? <br /> Big or small. Hit me up.</h5>
              <a href="mailto:impaubonilla@gmail.com" target="_blank" rel="noopener noreferrer">impaubonilla@gmail.com</a>
            </Form>
          </div>
        </AboutWrapper>
      </AbaoutTopHeadline>
    </AboutContainer>
  )
}
