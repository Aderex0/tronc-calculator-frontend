import React from 'react'
import TroncCalculator from './components/TroncCalculator'
import TroncOutput from './components/TroncOutput'

class App extends React.Component {
  state = {
    troncOutput: null,
    displayCalculator: true
  }

  setTroncOutput = troncOutput => {
    this.setState({
      troncOutput: troncOutput,
      displayCalculator: false
    })
  }

  render () {
    const { troncOutput, displayCalculator } = this.state

    return (
      <div>
        {displayCalculator ? (
          <TroncCalculator setTroncOutput={this.setTroncOutput} />
        ) : (
          <TroncOutput troncOutput={troncOutput} />
        )}
      </div>
    )
  }
}

export default App
