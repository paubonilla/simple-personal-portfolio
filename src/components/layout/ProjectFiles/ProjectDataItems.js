import React from 'react'
import { Image } from './index'
import styled from 'styled-components'

export const PDContainer = styled.div`
  padding: 1rem;
  width: 500px;
  @media (max-width: 480px) {
    width: 100%;
  }
`

export const PDInner = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`

export const BTNS = styled.div`
  button {
    width: 100px;
    padding: 8px 20px;
    margin: 24px;
    background-color: red;
    outline: none;
    border-radius: 5px;
    border: none;
  }
  a {
    color: #f1f3f8;
    text-decoration: none;
  }
  display: flex;
`

export const PDInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
  font-size: 14px;
  padding: 30px 30px;
`

export const ProjectDataItems = ({
  src,
  title,
  img,
  desc
}) => {
  return (
    <PDContainer>
      <div>
        <PDInner>
          <Image src={img} />
          <PDInfo>
            <p>{title}</p>
            <p>{desc}</p>
          </PDInfo>
          <BTNS>
            <button><a href={src} target="_blank" rel="noopener noreferrer">Click</a></button>
            <button><a href={src} target="_blank" rel="noopener noreferrer">View Code</a></button>
          </BTNS>
        </PDInner>
      </div>
    </PDContainer>
  )
}
