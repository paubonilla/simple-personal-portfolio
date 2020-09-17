import React from 'react'
import img1 from '../../../images/img-1.jpg'
import jawvwarp from '../../../images/projects/jawvwarp.png'
import movie from '../../../images/projects/movie-watchlist.png'
import hangman from '../../../images/projects/hangman.png'
import dmv from '../../../images/projects/dmv-test.png'
import pokedex from '../../../images/projects/pokedex.png'
import ttt from '../../../images/projects/the-office-tic-tac-toe.png'
import { ProjectDataItems } from './ProjectDataItems'
import { ProjectContainer } from './index'

export const ProjectFiles = () => {
  return (
    <ProjectContainer>
      <ProjectDataItems
        src="https://paubonilla.github.io/tic-tac-toe/"
        img={ttt}
        title='Tic Tac Toe'
        desc='this app was built with React'
      />
      <ProjectDataItems
        src="https://pokedex027.netlify.app/"
        img={pokedex}
        title='Pokédex'
        desc='this app was built with React'
      />
      <ProjectDataItems
        src="https://paubonilla.github.io/hangman-react/"
        img={hangman}
        title='Hangman'
        desc='this app was built with React'
      />
      <ProjectDataItems
        src="https://paubonilla.github.io/dmv-permit-practice-test/"
        img={dmv}
        title='DMV Permit Practice Test'
        desc='this app was built with React'
      />
      <ProjectDataItems
        src="https://paubonilla.github.io/movie-watchlist/"
        img={movie}
        title='Movie Watchlist'
        desc='this app was built with React'
      />
      <ProjectDataItems
        src="https://jawvwarp.netlify.app/"
        img={jawvwarp}
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
