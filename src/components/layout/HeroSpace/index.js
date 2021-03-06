import styled from 'styled-components'

export const HeroContainer = styled.div`
  /* background: url("images/img-home.jpg") center center/cover no-repeat; */
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  object-fit: contain;
  
  > h1 {
    padding: 30px;
    color: #f1f3f8;
    font-size: 100px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.2);
    font-family: 'Anonymous Pro', monospace;
    @media (max-width: 480px) {
      font-size: 80px;
      padding: 20px;
    }
  }
  
  > p {
    margin-top: 8px;
    color: #f1f3f8;
    font-size: 18px;
    opacity: 0.7;
    @media (max-width: 480px) {
      font-size: 14px;
    }
    font-family: "Source Code Pro", monospace;
  }
`

export const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  margin-top: -5rem;
  z-index: -1;
`

export const ButtonsContainer = styled.div`
  margin-top: 32px;
`