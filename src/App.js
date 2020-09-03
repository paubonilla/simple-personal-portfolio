import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/layout/Nav/Nav';
import Footer from './components/layout/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Footer />
      </Router>
    </>
  );
}

export default App;
