import React from 'react'
import img1 from '../../../images/img-1.jpg'
import { ProjectDataItems } from './ProjectDataItems'
import { ProjectContainer } from './index'

export const ProjectFiles = () => {
  return (
    <ProjectContainer>
      <ProjectDataItems
        src="https://paubonilla.github.io/tic-tac-toe/"
        img={img1}
        title='Tic Tac Toe'
        desc='this app was built with React'
      />
      <ProjectDataItems
        src="https://pokedex027.netlify.app/"
        img={img1}
        title='Pokédex'
        desc='this app was built with React'
      />
      <ProjectDataItems
        src="https://paubonilla.github.io/hangman-react/"
        img={img1}
        title='Hangman'
        desc='this app was built with React'
      />
      <ProjectDataItems
        src="https://paubonilla.github.io/dmv-permit-practice-test/"
        img={img1}
        title='DMV Permit Practice Test'
        desc='this app was built with React'
      />
      <ProjectDataItems
        src="https://paubonilla.github.io/movie-watchlist/"
        img={img1}
        title='Movie Watchlist'
        desc='this app was built with React'
      />
      <ProjectDataItems
        src="https://jawvwarp.netlify.app/"
        img={img1}
        title='JAWVWARP Website'
        desc='this app was built with React'
      />
      <ProjectDataItems
        src="https://paubonilla.netlify.app/"
        img={img1}
        title='First Website'
        desc='this app was built with React'
      />
    </ProjectContainer>
  )
}
