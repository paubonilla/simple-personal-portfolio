import React from 'react'
import '../../../App.scss'
import { ProjectFiles } from '../../layout/ProjectFiles/ProjectFiles'

export default function Projects() {
  return (
    <>
      <h1 className="projects">
        <ProjectFiles />
      </h1>
    </>
  )
}