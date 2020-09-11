import styled from 'styled-components'
import self from '../../../images/self.jpg'

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