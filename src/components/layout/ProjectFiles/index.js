import styled from 'styled-components'

export const ProjectContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 15rem;
  font-family: 'Overpass', sans-serif;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const Image = styled.img`
  width: 100%;
`