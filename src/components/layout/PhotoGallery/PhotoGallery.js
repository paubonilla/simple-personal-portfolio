import React from 'react'
import Photos from './Photos'
import styled from 'styled-components'

export const PhotoGalleryContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  color: #fff;
`

const PhotoGallery = () => {
  return (
    <div>
      <PhotoGalleryContainer>
        <p>these are some of my favorite pictures that I took</p>
      </PhotoGalleryContainer>
      <Photos />
    </div>
  )
}

export default PhotoGallery
