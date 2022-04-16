import React from 'react'
import {
  AboutFooterLinkItem,
  AboutFooterLinks,
  AboutFooterLinkWrapper
} from './index'

export const AboutFooter = ({
  copyright
}) => {
  return (
    <>
      <AboutFooterLinks>
        <AboutFooterLinkWrapper>
          <AboutFooterLinkItem style={{ margin: 0, padding: '40px 0', fontSize: '18px' }}>
            <span className="copyright">{copyright}</span>
          </AboutFooterLinkItem>
        </AboutFooterLinkWrapper>
        <AboutFooterLinkWrapper>
          <AboutFooterLinkItem style={{ margin: 0, padding: '40px 0', fontSize: '18px' }}>
            <h5>Email</h5>
            <a href="mailto:impaubonilla@gmail.com" target="_blank" rel="noopener noreferrer">impaubonilla@gmail.com</a>
          </AboutFooterLinkItem>
        </AboutFooterLinkWrapper>
        <AboutFooterLinkWrapper>
          <AboutFooterLinkItem style={{ margin: 0, padding: '40px 0', fontSize: '18px' }}>
            <h5>Location</h5>
            <p>Los Angeles, CA</p>
          </AboutFooterLinkItem>
        </AboutFooterLinkWrapper>
        <AboutFooterLinkWrapper>
          <AboutFooterLinkItem style={{ margin: 0, padding: '40px 0', fontSize: '18px' }}>
            <h5>Social</h5>
            <a href="https://www.instagram.com/paulobonilla/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/pxixcv" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.youtube.com/channel/UCOzqf6znGEBswEYLu0exL-A?view_as=subscriber" target="_blank" rel="noopener noreferrer">Youtube</a>
            <a href="https://twitter.com/pxixcv" target="_blank" rel="noopener noreferrer">Twitter</a>
          </AboutFooterLinkItem>
        </AboutFooterLinkWrapper>
      </AboutFooterLinks>
    </>
  )
}
