import styled from 'styled-components'
import self from '../../../images/user-profile/self-dark.jpg'

export const AboutContainer = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${self});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #f1f3f8;
  margin-top: -4em;
  padding-top: 27em;
  /* font-family: "Overpass Mono", monospace; */
  font-family: 'Overpass', sans-serif;
  @media (max-width: 480px) {
    padding: 0;
  }
`

export const AboutWrapper = styled.div`
  width: 80%;
  position: relative;
  /* max-width: 71vw; */
  /* display: flex; */
  /* justify-content: space-between; */
  margin: 0 auto;
  @media (max-width: 480px) {
    width: 100%;
  }
`

export const AbaoutTopHeadline = styled.div`
  @media (max-width: 480px) {
    padding-top: 27rem;
  }
  
`

export const Form = styled.div`
  > h5 {
    @media (max-width: 480px) {
      padding-top: 10px;
    }
    font-size: 18px;
    font-weight: 100;
  }
  > a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    border-radius: 5px;
    margin: 50px 0;
    color: #393b44;
    padding: 18px 20px;
    background-color: #f1f3f8;
    transition: all 0.2s ease-out;
    &:hover {
      color: #f1f3f8;
      background-color: #393b44;
      transition: all 0.2s ease-out;
    }
    @media (max-width: 480px) {
      width: 100%;
      padding: 20px 0;
      margin: 20px 0 0;
      border-radius: 0;
    }
  }
`

/* ----------------- AboutFooter Styles ----------------- */

export const AboutFooterContainer = styled.div`
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const AboutFooterLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const AboutFooterLinkWrapper = styled.div`
  display: flex;
`

export const AboutFooterLinkItem = styled.div`
  font-size: 16px;
  color: #f1f3f8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;

  .copyright {
  }
  > h5 {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #8d93ab;
    margin-bottom: 10px;
  }

  a {
    color: #f1f3f8;
    text-decoration: none;
    margin-bottom: 3px;
    transition: 0.6s ease-out;
    &:hover {
      color: #8d93ab;
      transition: 0.3s ease-out;
    }
  }
`