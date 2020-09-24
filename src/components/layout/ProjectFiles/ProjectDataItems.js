import React, { useRef, useEffect } from 'react'
import { Image } from './index'
import styled from 'styled-components'
import { TweenMax, Power3 } from 'gsap'

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
  box-shadow: 0 2.8px 2.2px rgb(23, 24, 28, 0.034), 0 6.7px 5.3px rgb(23, 24, 28, 0.048), 0 12.5px 10px rgb(23, 24, 28, 0.06), 0 22.3px 17.9px rgb(23, 24, 28, 0.072), 0 41.8px 33.4px rgb(23, 24, 28, 0.086), 0 100px 80px rgb(23, 24, 28, 0.12), inset 0 0 100px 100px rgb(23, 24, 28, 0.12);
`

export const BTNS = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  .button {
    margin-left: 20px;
    font-size: 16px;
    padding: 8px 24px;
    border-radius: 7px;
    background-color: #393b44;
    border: none;
    color: #f1f3f8;
    text-decoration: none;
    &:hover {
      color: #393b44;
      background-color: #f1f3f8;
    }
  }
  @media (max-width: 480px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .button {
      width: 90%;
      margin: 5px 0;
      text-align: center;
      font-size: 14px;
    }
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
    @media (max-width: 480px) {
      text-align: left;
      margin-bottom: 15px;
    }
  }
`

export const ProjectDataItems = ({
  src,
  title,
  img,
  desc,
  comment
}) => {
  let imgItem = useRef(null)
  let infoItem = useRef(null)
  let titleText = useRef(null)
  let descText = useRef(null)

  useEffect(() => {
    // imgItem.style.display = 'none'
    TweenMax.to(imgItem, .4, { opacity: 1, y: -20, ease: Power3.easeOut })
    TweenMax.to(infoItem, .4, { opacity: 1, y: -20, ease: Power3.easeOut })
    TweenMax.to(titleText, .4, { opacity: 1, y: -20, ease: Power3.easeOut, delay: .2 })
    TweenMax.to(descText, .4, { opacity: 1, y: -10, ease: Power3.easeOut, delay: .4 })
  }, [])

  return (
    <>
      <PDContainer>
        <div>
          <Image ref={el => { imgItem = el }} src={img} />
          <PDInner ref={el => { infoItem = el }}>
            <PDInfo>
              <p ref={el => { titleText = el }} className="title">{title}</p>
              <p ref={el => { descText = el }} className="desc">{desc}</p>
              <span className="comment">{comment}</span>
            </PDInfo>
            <BTNS>
              <a className="button" href={src} target="_blank" rel="noopener noreferrer">Click</a>
              <a className="button" href={src} target="_blank" rel="noopener noreferrer">View Code</a>
            </BTNS>
          </PDInner>
        </div>
      </PDContainer>
    </>
  )
}
