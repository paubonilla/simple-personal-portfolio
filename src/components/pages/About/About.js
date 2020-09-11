import React from 'react'
import './About.scss'
import { AboutContainer, AbaoutTopHeadline, Form, AboutWrapper } from './index'

export default function About() {
  return (
    <>
      <AboutContainer>
        <AboutWrapper>
          <AbaoutTopHeadline>
            <div className="container">
              <div className="row__one">
                <div className="column">
                  <p className="header"><span>Paulo Feliciano Bonilla <br /> &#60;<span className="__span">Frontend Developer</span> &#47;&#62; <br /> Los Angeles, CA</span></p>

                  <p>This is my website, please feel welcomed to browse through it and learn more about me &#38; my work. Thank you for your time, enjoy! And maybe you can help me improve my skills. If you have any feedback or ways that I can work on, you can always contact me.</p>
                </div>
                <div className="column">
                  <strong>Framework</strong>
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
            </div>
          </AbaoutTopHeadline>
          <div className="content">
            hello
          </div>
        </AboutWrapper>
      </AboutContainer>
    </>
  )
}