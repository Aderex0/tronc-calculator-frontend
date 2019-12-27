import React from 'react'
import '../css/TroncCalculatorContainer.css'

import TroncOutput from '../components/TroncOutput'
import TroncCalculator from '../components/TroncCalculator'

import useTroncCalculatorStore from '../store/TroncCalculatorStore'

const TroncCalculatorContainer = () => {
  const displayCalculator = useTroncCalculatorStore(
    state => state.displayCalculator
  )

  return <>{displayCalculator ? <TroncCalculator /> : <TroncOutput />}</>
}

export default TroncCalculatorContainer
