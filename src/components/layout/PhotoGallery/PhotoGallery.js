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
  a {
    color: #8d93ab;
    text-decoration: none;
    transition: 0.6s ease-out;
    &:hover {
      color: #f1f3f8;
      transition: 0.3s ease-out;
    }
  }
`

const PhotoGallery = () => {
  return (
    <div>
      <PhotoGalleryContainer>
        <p>these are some of my favorite pictures that I took <br />
          or check my <a href="https://www.instagram.com/paulobonilla/" target="_blank" rel="noopener noreferrer">Instagram</a> I got more content over there.</p>
      </PhotoGalleryContainer>
      <Photos />
    </div>
  )
}

export default PhotoGallery
