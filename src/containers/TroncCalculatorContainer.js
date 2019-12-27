import React, { useEffect } from 'react'
import TroncOutput from '../components/TroncOutput'
import TroncCalculator from '../components/TroncCalculator'

import useTroncCalculatorStore from '../store/TroncCalculatorStore'

const TroncCalculatorContainer = () => {
  const displayCalculator = useTroncCalculatorStore(
    state => state.displayCalculator
  )

  useEffect(() => {})

  return <div>{displayCalculator ? <TroncCalculator /> : <TroncOutput />}</div>
}

export default TroncCalculatorContainer
