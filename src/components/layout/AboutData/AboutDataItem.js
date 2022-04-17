import React from 'react'
import {
  AboutContainer,
  AbaoutTopHeadline,
  AboutWrapper,
  ContactMe,
  ProgrammingLanguages
} from './index'
import './AboutData.scss'
import { AboutFooter } from './AboutFooter'

export default function AboutDataItems({ fullName, field, location, desc, header5 }) {
  return (
    <AboutContainer>
      <AbaoutTopHeadline>
        <AboutWrapper>
          <div className="row__one">
            <div className="column">
              <p className="header"><span>{fullName}<br />&#60;<span className="__span">{field}</span> &#47;&#62; <br /> {location}</span></p>
              <p>{desc}</p>
            </div>
            <div className="column">
              <strong>{header5}</strong>
              <p className="subheader">This site is built with React.js</p>
            </div>
          </div>
          <div className="row__two">
            <WebDevelopment />
            <div className="column">
              <strong>Hobbies/Skills</strong>
              <p>Graphic Design</p>
              <p>Adobe Illustrator</p>
              <p>Adobe Photoshop</p>
              <p>Adobe Premiere Pro</p>
              <p>Adobe After Effects</p>
            </div>
          </div>
          <div className="row__three">
            <ContactMe>
              <h5>Got a project?<br />Big or small. Hit me up.</h5>
              <a href="mailto:impaubonilla@gmail.com" target="_blank" rel="noopener noreferrer">impaubonilla@gmail.com</a>
            </ContactMe>
          </div>
          <AboutFooter
            copyright='© 2020 Paulo Feliciano Bonilla'
          />
        </AboutWrapper>
      </AbaoutTopHeadline>
    </AboutContainer>
  )
}

export const WebDevelopment = () => {
  return (
    <>
      <div className="column">
        <strong>Editor/IDE</strong>
        <p>VS Code</p>
      </div>
      <div className="column">
        <strong>Illustration</strong>
        <p>Adobe XD</p>
        <p>Figma</p>
      </div>
      <div className="column">
        <strong>Javascript Frameworks</strong>
        <p>React.js&#62;Hooks&#43;Router</p>
      </div>
      <ProgrammingLanguages>
        <div className="column">
          <strong>Front End</strong>
          <p>HTML &#38; CSS</p>
          <p>SCSS</p>
          <p>Javascript&#62;Typescript</p>
          <p>Styled Components</p>
          <p>Material UI</p>
        </div>
        <div className="column">
          <strong>Back End</strong>
          <p>Node.js</p>
          <p>GraphQL</p>
          <p>Apollo</p>
          <p>Hasura</p>
        </div>
      </ProgrammingLanguages>
    </>
  )
}
