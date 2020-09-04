import styled from 'styled-components'

export const FooterContainer = styled.div`
  background-color: #242424;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin-bottom: 24px;
  padding: 24px;
  color: #f1f3f8;
  > p {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  }
  .footer-subscription-heading {
    margin-bottom: 24px;
    font-size: 24px;
  }

  .footer-subscription-text {
    margin-bottom: 24px;
    font-size: 20px;
  }
`

export const FooterInput = styled.input`
  padding: 8px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 18px;
  margin-bottom: 16px;
  border: 1px solid #fff;
`

export const FooterLinks = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const FooterLinkWrapper = styled.div`
  display: flex;
`

export const FooterLinkItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;

  h2 {
    margin-bottom: 16px;
  }

  > h2 {
    color: #f1f3f8;
  }

  a {
    color: #f1f3f8;
    text-decoration: none;
    margin-bottom: 0.5rem;
    &:hover {
      color: #8d93ab;
      transition: 0.3s ease-out;
    }
  }
`