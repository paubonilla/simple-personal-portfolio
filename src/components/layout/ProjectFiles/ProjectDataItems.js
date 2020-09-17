import React from 'react'
import { Image } from './index'
import styled from 'styled-components'

export const PDContainer = styled.div`
  padding: 2rem;
  width: 400px;
  a {
    color: #f1f3f8;
    text-decoration: none;
  }
  p {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    padding: 2rem;
    width: 100%;
  }
`

export const ProjectDataItems = ({
  src,
  title,
  img,
  desc
}) => {
  return (
    <PDContainer>
      <a href={src} target="_blank" rel="noopener noreferrer">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Image src={img} />
          <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fff', color: '#000' }}>
            <p>{title}</p>
            <p>{desc}</p>
          </div>
        </div>
      </a>
    </PDContainer>
  )
}
