import React from 'react';
import { useState, useEffect } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/layout/Nav/Nav';
// import Footer from './components/layout/Footer/Footer';
import Home from './components/pages/Home/Home';
import Portfolio from './components/pages/Portfolio';
import Projects from './components/pages/Projects/Projects';
import Blog from './components/pages/Blog';
import About from './components/pages/About/About';
import Gallery from './components/pages/Gallery/Gallery';
import { CubeGrid } from 'styled-loaders-react';
import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100vw;
`

export const Inner = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => { setLoading(false); }, 1000) //make it 3000 pag natapos mo na lahat, tapusin mo na kasi
  }, [])
  return (
    <>
      {loading ?
        <Inner>
          <CubeGrid color="#f1f3f8" size="70px" />
        </Inner>
        :
        <AppContainer>
          <Nav />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='/gallery' element={<Gallery />} />
          </Routes>
          {/* <Footer /> */}
        </AppContainer>}
    </>
  );
}

export default App;
