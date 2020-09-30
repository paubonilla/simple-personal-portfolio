import styled, { css } from 'styled-components'

export const ProjectContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 15rem;
  font-family: 'Overpass', sans-serif;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 255px;
  border-radius: 10px 10px 0 0;
  opacity: 0;
  pointer-events: none;
  @media (max-width: 480px) {
    height: 100%;
  }
`

export const PDContainer = styled.div`
  width: 500px;
  @media (max-width: 480px) {
    width: 100%;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 5px;
    padding: 1.75rem;
  }
`

export const PDInner = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  opacity: 0;
  padding-bottom: 20px;
  @media (max-width: 480px) {
    padding-bottom: 10px;
  }
  box-shadow: 
  0 2.8px 2.2px rgb(23, 24, 28, 0.034), 
  0 6.7px 5.3px rgb(23, 24, 28, 0.048), 
  0 12.5px 10px rgb(23, 24, 28, 0.06), 
  0 22.3px 17.9px rgb(23, 24, 28, 0.072), 
  0 41.8px 33.4px rgb(23, 24, 28, 0.086), 
  0 100px 80px rgb(23, 24, 28, 0.12), 
  inset 0 0 100px 100px rgb(23, 24, 28, 0.12);
`

export const BTNSContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media (max-width: 480px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .primary-button {
      width: 90%;
      margin: 5px 0;
      text-align: center;
      font-size: 14px;
    }
  }
`

export const BTNS = styled.a`
  font-size: 16px;
  margin-left: 20px;
  ${({ primary }) => primary ?
    css`
      padding: 8px 24px;
      border-radius: 7px;
      background-color: #393b44;
      border: none;
      color: #f1f3f8;
      border: 1px solid #f1f3f8;
      text-decoration: none;
      &:hover {
        color: #393b44;
        border: 1px solid #393b44;
        background-color: #f1f3f8;
      }
    ` :
    css`
      color: #393b44;
      text-decoration: none;
      border-bottom: 1px solid #393b44;
      @media (max-width: 480px) {
        padding: 8px 24px;
        border-radius: 7px;
        border: 1px solid #393b44;
      }
    `
  }
  @media (max-width: 480px) {
    width: 90%;
    margin: 5px 0;
    text-align: center;
    font-size: 12px;
  }
`

export const PDInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #393b44;
  font-size: 14px;
  padding: 20px 30px 0 30px;
  .title {
    font-size: 24px;
    opacity: 0;
    margin-top: 20px;
    @media (max-width: 480px) {
      font-size: 20px;
    }
  }
  @media (max-width: 480px) {
    text-align: center;
  }
  .desc {
    font-size: 14px;
    opacity: 0;
    @media (max-width: 480px) {
      font-size: 12px;
      text-align: left;
    }
  }
  .comment {
    color: rgb(0, 118, 0);
    font-size: 12px;
    font-family: "Source Code Pro", monospace;
    margin-bottom: 20px;
    opacity: 0;
    @media (max-width: 480px) {
      text-align: left;
      margin-bottom: 15px;
    }
  }
`