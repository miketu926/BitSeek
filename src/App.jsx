import React from 'react'
import './styles/App.css'
import Nav from './frontend/components/nav/nav'
// import Main from './frontend/components/main/main'
import { Route, Switch } from 'react-router-dom'

// holds all components

const App = () => {
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
