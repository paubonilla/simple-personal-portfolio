import React from 'react'
import ppw1 from '../../../images/projects/landing-page.jpg'
import jawvwarp from '../../../images/projects/jawvwarp.jpg'
import movie from '../../../images/projects/movie-watchlist.jpg'
import hangman from '../../../images/projects/hangman.jpg'
import dmv from '../../../images/projects/dmv-test.jpg'
import pokedex from '../../../images/projects/pokedex.jpg'
import ttt from '../../../images/projects/the-office-tic-tac-toe.jpg'
import { ProjectDataItems } from './ProjectDataItems'
import { ProjectContainer } from './index'

export const ProjectFiles = () => {
  return (
    <ProjectContainer>
      <ProjectDataItems
        src="https://paubonilla.github.io/tic-tac-toe/"
        codeSRC="https://github.com/paubonilla/tic-tac-toe"
        img={ttt}
        title='Tic Tac Toe'
        desc={`A The Office Theme TicTacToe game built with React in Hooks, and styled using Styled Components`}
        comment='&#47;&#47; it is responsive'
        primaryBTN="Play Game"
      />
      <ProjectDataItems
        src="https://pokedex027.netlify.app/"
        codeSRC="https://github.com/paubonilla/pokedex"
        img={pokedex}
        title='Pokédex'
        desc='I made a Pokédex app built with React Hooks and designed using Material UI and Styled Components.'
        comment='&#47;&#47; search your favorite Pokémon'
        primaryBTN="Go to Pokédex"
      />
      <ProjectDataItems
        src="https://paubonilla.github.io/hangman-react/"
        codeSRC="https://github.com/paubonilla/hangman-react"
        img={hangman}
        title='Hangman'
        desc='This hangman game is built with React with a simple structure of HTML, Styled Components, and Javascript.'
        comment='&#47;&#47; temporary works on desktop only'
        primaryBTN="Play Game"
      />
      <ProjectDataItems
        src="https://paubonilla.github.io/dmv-permit-practice-test/"
        codeSRC="https://github.com/paubonilla/dmv-permit-practice-test"
        img={dmv}
        title='DMV Permit Practice Test'
        desc='This test is built with React, HTML5, CSS3, Styled Components, and Javascript.'
        comment='&#47;&#47; this is a work in progess project'
        primaryBTN="Take Practice Test"
      />
      <ProjectDataItems
        src="https://paubonilla.github.io/movie-watchlist/"
        codeSRC="https://github.com/paubonilla/movie-watchlist"
        img={movie}
        title='Movie Watchlist'
        desc='This movie watchlist library is built with React Hooks with Styled Components, and Javascript.'
        comment='&#47;&#47; the mobile view is ugly'
        primaryBTN="Make a movie list"
      />
      <ProjectDataItems
        src="https://jawvwarp.netlify.app/"
        codeSRC="https://github.com/paubonilla/jawvwarp.io"
        img={jawvwarp}
        title='JAWVWARP Website'
        desc='I made a responsive website/blog about my friends in how we start building our brotherhood. It built with React Hooks.'
        comment="&#47;&#47; it's cool"
        primaryBTN="Check it out"
      />
      <ProjectDataItems
        src="https://paubonilla.netlify.app/"
        codeSRC="https://github.com/paubonilla/paubonilla.github.io"
        img={ppw1}
        title='First Website'
        desc='My very first personal portfolio, built with React, Javascrpit,HMTL, SCSS, Styled Components'
        comment='&#47;&#47; '
        primaryBTN="Take a peek"
      />
    </ProjectContainer>
  )
}
