import React from 'react';
import {
  FooterContainer,
  FooterInput,
  FooterLinkItem,
  FooterLinks,
  FooterLinkWrapper,
  FooterSubscription
} from '../Footer/index'
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillYoutube,
  AiFillTwitterSquare,
  AiFillLinkedin
} from 'react-icons/ai'
import '../Footer/Footer.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <p className='footer-subscription-heading'>
          This is a footer
        </p>
        <p className='footer-subscription-text'>
          idk what to put here yet
        </p>
        <div className='input-areas'>
          <form>
            <FooterInput
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </FooterSubscription>
      <FooterLinks>
        <FooterLinkWrapper>
          <FooterLinkItem>
            <h2>Contact Me</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
          </FooterLinkItem>
        </FooterLinkWrapper>
        <FooterLinkWrapper>
          <FooterLinkItem>
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/impaubonilla/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/pxixcv" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.youtube.com/channel/UCOzqf6znGEBswEYLu0exL-A?view_as=subscriber" target="_blank" rel="noopener noreferrer">Youtube</a>
            <a href="https://twitter.com/pxixcv" target="_blank" rel="noopener noreferrer">Twitter</a>
          </FooterLinkItem>
        </FooterLinkWrapper>
      </FooterLinks>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Pau
            </Link>
          </div>
          <small class='website-rights'>PFB © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <AiFillFacebook />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <AiOutlineInstagram />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <AiFillYoutube />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <AiFillTwitterSquare />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <AiFillLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </FooterContainer>
  );
}

export default Footer;