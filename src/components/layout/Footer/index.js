import styled from 'styled-components'

export const FooterContainer = styled.div`
  /* background: linear-gradient(90deg, rgb(28, 27, 27) 0%, #393b44 100%); */
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FooterLinks = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const FooterLinkWrapper = styled.div`
  display: flex;
`

export const FooterLinkItem = styled.div`
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