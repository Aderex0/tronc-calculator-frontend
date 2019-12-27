import React from 'react'
import useTroncCalculatorStore from '../store/TroncCalculatorStore'

const TroncOutput = () => {
  const receivedServiceCharge = useTroncCalculatorStore(
    state => state.receivedServiceCharge
  )

  return <div>{receivedServiceCharge}</div>
}

export default TroncOutput
