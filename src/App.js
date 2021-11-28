import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './components/dashboard'


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Router basename="/">
          <Route path='/' component={Dashboard} />
        </Router>
        
      </div>
      
    )
  }
}

export default App