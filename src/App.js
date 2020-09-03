import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/layout/Nav/Nav';
import Footer from './components/layout/Footer/Footer';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
