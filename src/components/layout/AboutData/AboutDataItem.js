import React from 'react'
import { AboutContainer, AbaoutTopHeadline, AboutWrapper, Form } from './index'
import './AboutData.scss'
// import Footer from '../Footer/Footer'
import { FooterLinkItem, FooterLinks, FooterLinkWrapper } from '../Footer'
import { Link } from 'react-router-dom'

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
              <h5>Got a project?<br />Big or small. Hit me up.</h5>
              <a href="mailto:impaubonilla@gmail.com" target="_blank" rel="noopener noreferrer">impaubonilla@gmail.com</a>
            </Form>
          </div>
          <FooterLinks>
            <FooterLinkWrapper>
              <FooterLinkItem style={{ margin: 0, padding: '40px 0', fontSize: '18px' }}>
                <span className="copyright">© 2020 Paulo Feliciano Bonilla</span>
              </FooterLinkItem>
            </FooterLinkWrapper>
            <FooterLinkWrapper>
              <FooterLinkItem style={{ margin: 0, padding: '40px 0', fontSize: '18px' }}>
                <h5>Email</h5>
                <Link to='/'><a href="mailto:impaubonilla@gmail.com" target="_blank" rel="noopener noreferrer">impaubonilla@gmail.com</a></Link>
              </FooterLinkItem>
            </FooterLinkWrapper>
            <FooterLinkWrapper>
              <FooterLinkItem style={{ margin: 0, padding: '40px 0', fontSize: '18px' }}>
                <h5>Location</h5>
                <p>Los Angeles, CA</p>
              </FooterLinkItem>
            </FooterLinkWrapper>
            <FooterLinkWrapper>
              <FooterLinkItem style={{ margin: 0, padding: '40px 0', fontSize: '18px' }}>
                <h5>Social</h5>
                <a href="https://www.instagram.com/impaubonilla/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.facebook.com/pxixcv" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.youtube.com/channel/UCOzqf6znGEBswEYLu0exL-A?view_as=subscriber" target="_blank" rel="noopener noreferrer">Youtube</a>
                <a href="https://twitter.com/pxixcv" target="_blank" rel="noopener noreferrer">Twitter</a>
              </FooterLinkItem>
            </FooterLinkWrapper>
          </FooterLinks>
        </AboutWrapper>
      </AbaoutTopHeadline>
    </AboutContainer>
  )
}
