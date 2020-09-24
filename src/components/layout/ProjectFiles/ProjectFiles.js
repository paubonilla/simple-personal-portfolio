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
        desc={`A The Office Theme TicTacToe game built with React in Hooks, and styled using Styled Components`}
        comment='&#47;&#47; it is responsive'
      />
      <ProjectDataItems
        src="https://pokedex027.netlify.app/"
        img={pokedex}
        title='Pokédex'
        desc='I made a Pokédex app built with React Hooks and designed using Material UI and Styled Components.'
        comment='&#47;&#47; search your favorite Pokémon'
      />
      <ProjectDataItems
        src="https://paubonilla.github.io/hangman-react/"
        img={hangman}
        title='Hangman'
        desc='This hangman game is built with React with a simple structure of HTML, Styled Components, and Javascript.'
        comment='&#47;&#47; temporary works on desktop only'
      />
      <ProjectDataItems
        src="https://paubonilla.github.io/dmv-permit-practice-test/"
        img={dmv}
        title='DMV Permit Practice Test'
        desc='This test is built with React, HTML5, CSS3, Styled Components, and Javascript.'
        comment='&#47;&#47; this is a work in progess project'
      />
      <ProjectDataItems
        src="https://paubonilla.github.io/movie-watchlist/"
        img={movie}
        title='Movie Watchlist'
        desc='This movie watchlist library is built with React Hooks with Styled Components, and Javascript.'
        comment='&#47;&#47; the mobile view is ugly'
      />
      <ProjectDataItems
        src="https://jawvwarp.netlify.app/"
        img={jawvwarp}
        title='JAWVWARP Website'
        desc='I made a responsive website/blog about my friends in how we start building our brotherhood. It built with React Hooks.'
        comment="&#47;&#47; it's cool"
      />
      <ProjectDataItems
        src="https://paubonilla.netlify.app/"
        img={img1}
        title='First Website'
        desc='My very first personal portfolio, built with React, Javascrpit,HMTL, SCSS, Styled Components'
        comment='&#47;&#47; '
      />
    </ProjectContainer>
  )
}
