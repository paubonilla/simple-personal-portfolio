import React from 'react'
import img1 from '../../../images/img-1.jpg'
import { ProjectDataItems } from './ProjectDataItems'

export const ProjectFiles = () => {
  return (
    <div>
      <ProjectDataItems
        img={img1}
        title='Project'
        desc='this app was built with React'
      />
    </div>
  )
}
