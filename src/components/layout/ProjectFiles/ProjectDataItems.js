import React, { useRef, useEffect } from 'react'
import { BTNS, BTNSContainer, Image, PDContainer, PDInfo, PDInner } from './index'
import { TweenMax, Power3 } from 'gsap'

export const ProjectDataItems = ({
  src,
  codeSRC,
  title,
  img,
  desc,
  comment,
  primaryBTN
}) => {
  let imgItem = useRef(null)
  let infoItem = useRef(null)
  let titleText = useRef(null)
  let descText = useRef(null)
  let commentText = useRef(null)

  useEffect(() => {
    // imgItem.style.display = 'none'
    TweenMax.to(imgItem, .4, { opacity: 1, y: -20, ease: Power3.easeOut })
    TweenMax.to(infoItem, .4, { opacity: 1, y: -20, ease: Power3.easeOut })
    TweenMax.to(titleText, .4, { opacity: 1, y: -20, ease: Power3.easeOut, delay: .2 })
    TweenMax.to(descText, .4, { opacity: 1, y: -10, ease: Power3.easeOut, delay: .4 })
    TweenMax.to(commentText, .4, { opacity: 1, ease: Power3.easeOut, delay: .9 })
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
              <span ref={el => { commentText = el }} className="comment">{comment}</span>
            </PDInfo>
            <BTNSContainer>
              <BTNS primary href={src} target="_blank" rel="noopener noreferrer">{primaryBTN}</BTNS>
              <BTNS href={codeSRC} target="_blank" rel="noopener noreferrer">View Code</BTNS>
            </BTNSContainer>
          </PDInner>
        </div>
      </PDContainer>
    </>
  )
}
