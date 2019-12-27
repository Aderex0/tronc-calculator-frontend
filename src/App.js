import React from 'react'
import './css/App.css'
import TroncCalculatorContainer from './containers/TroncCalculatorContainer'
import NavBar from './containers/NavBar'

class App extends React.Component {
  render () {
    return (
      <div className='main-container'>
        <NavBar />
        <TroncCalculatorContainer />
      </div>
    )
  }
}

export default App
