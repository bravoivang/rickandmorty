import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from '../src/pages/Home';

import './App.css';

export default () => {
  return(
    <Router >
      <Route path="/" component={Home}/>
    </Router>
  )
}
