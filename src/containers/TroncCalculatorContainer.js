import React from 'react'
import TroncOutput from '../components/TroncOutput'
import TroncCalculator from '../components/TroncCalculator'

import useTroncCalculatorStore from '../store/TroncCalculatorStore'

const TroncCalculatorContainer = () => {
  const displayCalculator = useTroncCalculatorStore(
    state => state.displayCalculator
  )

  return <div>{displayCalculator ? <TroncCalculator /> : <TroncOutput />}</div>
}

export default TroncCalculatorContainer
