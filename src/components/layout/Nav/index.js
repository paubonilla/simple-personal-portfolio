import styled from 'styled-components'

export const NavBar = styled.nav`
  /* background: linear-gradient(90deg, rgb(28, 27, 27, 0.2) 0%, #393b44 100%); */
  /* background-color: rgba(193, 193, 193, 0.056); */
  height: 80px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  max-width: 1500px;
`

export const NavLogo = styled.div`
  a {
    color: #f1f3f8;
    /* color: #174C4B; */
    justify-self: start;
    margin-left: 20px;
    @media (max-width: 480px) {
      margin-left: 20px;
    }
    cursor: pointer;
    text-decoration: none;
    text-transform: lowercase;
    letter-spacing: 8px;
    font-family: 'Questrial', sans-serif;
    /* font-family: "Overpass Mono", monospace; */
    font-size: 2rem;
    display: flex;
    align-items: center;
  }
`

export const NavItem = styled.li`
  height: 80px;
  text-transform: lowercase;
  .nav-links {
    display: flex;
    align-items: center;
    text-decoration: none;
    letter-spacing: 1.7px;
    font-size: 16px;
    height: 100%;
    transition: all 0.5s ease-out;
    color: #f1f3f8;
    mix-blend-mode: color-burn;
    &:hover {
      color: #8d93ab;
      transition: all 0.2s ease-out;
    }
    @media (max-width: 768px) {
      padding: 2rem;
      width: 100%;
      text-align: center;
      display: table;
      &:hover {
        background-color: #f1f3f8;
        color: #242424;
        border-radius: 0;
      }
    }
  }
  .active {
    color: #8d93ab;
  }
`