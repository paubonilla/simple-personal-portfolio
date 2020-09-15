import React from 'react'
import styled from 'styled-components'

export const Image = styled.img`
  width: 300px;
  height: 300px;
`

export const ProjectDataItems = ({
  title,
  img,
  desc
}) => {
  return (
    <>
      <div>
        <Image
          src={img}
        />
        {title}
        {desc}
      </div>
    </>
  )
}
