import React, { useState } from 'react'
import { NavBar, NavBarContainer, NavItem, NavLogo } from './index'
import { NavLink } from 'react-router-dom'
// import { BsX, BsList } from 'react-icons/bs'
// import { BiX, BiMenu } from 'react-icons/bi'
import { HiPuzzle, HiMenuAlt4, HiX } from 'react-icons/hi'
// import Button from '../Button/Button'
import './Nav.scss'

export default function Nav() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);

  return (
    <>
      <NavBar>
        <NavBarContainer>
          <NavLogo>
            <NavLink to='/' onClick={closeMobileMenu}>
              <HiPuzzle />
            </NavLink>
          </NavLogo>
          <div className='menu-icon' onClick={handleClick}>
            {/* {click ? <BsX /> : <BsList />} */}
            {/* {click ? <BiX /> : <BiMenu />} */}
            {click ? <HiX /> : <HiMenuAlt4 />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <NavItem>
              <NavLink
                exact
                to='/'
                activeClassName="active"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                exact
                to='/projects'
                activeClassName="active"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                exact
                to='/blog'
                activeClassName="active"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                exact
                to='/about'
                activeClassName="active"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink
                to='/contacts'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contacts
              </NavLink>
            </NavItem> */}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>Contacts</Button>} */}
        </NavBarContainer>
      </NavBar>
    </>
  );
}
