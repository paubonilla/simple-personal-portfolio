import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom'
import Nav from './components/layout/Nav/Nav';
// import Footer from './components/layout/Footer/Footer';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Projects from './components/pages/Projects';
import Blog from './components/pages/Blog';
import About from './components/pages/About/About';

import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100vw;
`

function App() {
  return (
    <AppContainer>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/projects' component={Projects} />
        <Route path='/blog' component={Blog} />
        <Route path='/about' component={About} />
      </Switch>
      {/* <Footer /> */}
    </AppContainer>
  );
}

export default App;
