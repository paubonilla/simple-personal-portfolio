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
    padding: 1rem;
  }
`

export const PDInner = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  opacity: 0;
`

export const BTNS = styled.div`
  button {
    width: 100px;
    padding: 8px 20px;
    margin: 24px;
    background-color: red;
    outline: none;
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
  color: #393b44;
  font-size: 14px;
  padding: 30px 30px 0 30px;
  .title {
    font-size: 24px;
    opacity: 0;
    margin-top: 20px;
  }
  .desc {
    font-size: 14px;
    opacity: 0;
  }
  .comment {
    color: rgb(0, 118, 0);
    font-size: 12px;
    font-family: "Source Code Pro", monospace;
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
              <button><a href={src} target="_blank" rel="noopener noreferrer">Click</a></button>
              <button><a href={src} target="_blank" rel="noopener noreferrer">View Code</a></button>
            </BTNS>
          </PDInner>
        </div>
      </PDContainer>
    </>
  )
}
