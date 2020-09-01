import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/layout/Nav/Nav';

function App() {
  return (
    <Router>
      <Nav />
    </Router>
  );
}

export default App;
