import styled from 'styled-components'
import self from '../../../images/self.jpg'

export const AboutContainer = styled.div`
  background-image: url(${self});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #f1f3f8;
`

export const AboutWrapper = styled.div`
  width: 100%;
  max-width: 71vw;
  /* display: flex;
  justify-content: space-between; */
  margin: 0 auto;
  @media (max-width: 480px) {
    max-width: 700px;
    flex-direction: column;
  }
`

export const AbaoutTopHeadline = styled.div`
  padding-top: 27rem;
  font-family: "Overpass Mono", monospace;
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
    font-size: 16px;
    border-radius: 5px;
    background-color: #f1f3f8;
    color: #393b44;
    text-decoration: none;
    margin: 50px 0;
    padding: 18px 20px;
    display: flex;
    justify-content: center;
    transition: all 0.2s ease-out;
    &:hover {
      background-color: #393b44;
      color: #f1f3f8;
      transition: all 0.2s ease-out;
    }
    @media (max-width: 480px) {
      width: 100%;
      border-radius: 0;
      margin: 20px 0 0;
      padding: 20px 0;
    }
  }
`