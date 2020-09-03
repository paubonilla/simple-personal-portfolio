import React, { useState, useEffect } from 'react'
import { NavBar, NavBarContainer, NavItem, NavLogo } from './index'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import './Nav.scss'

export default function Nav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <NavBar>
        <NavBarContainer>
          <NavLogo>
            <NavLink to='/' onClick={closeMobileMenu}>
              Pau
          </NavLink>
          </NavLogo>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <NavItem>
              <NavLink
                to='/portfolio'
                activeClassName="active"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
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
                to='/about'
                activeClassName="active"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to='/contacts'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contacts
              </NavLink>
            </NavItem>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Contacts</Button>}
        </NavBarContainer>
      </NavBar>
    </>
  );
}
