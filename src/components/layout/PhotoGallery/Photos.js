import React from 'react'
import family from '../../../images/gallery/family.jpg'
import styled from 'styled-components'

export const GContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  @media (max-width: 480px) {
    width: 100%;
  }
`

export const ImageGalleryStyle = styled.img`
  width: 400px;
  border: 5px solid #393b44;
`

const Photos = () => {
  return (
    <GContainer>
      <ImageGalleryStyle src={family} alt="..." />
      <ImageGalleryStyle src={family} alt="..." />
      <ImageGalleryStyle src={family} alt="..." />
      <ImageGalleryStyle src={family} alt="..." />
      <ImageGalleryStyle src={family} alt="..." />
      <ImageGalleryStyle src={family} alt="..." />
    </GContainer>
  )
}

export default Photos
