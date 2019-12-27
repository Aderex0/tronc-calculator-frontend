import React from 'react'
import useTroncCalculatorStore from '../store/TroncCalculatorStore'

const TroncOutput = () => {
  const receivedServiceCharge = useTroncCalculatorStore(
    state => state.receivedServiceCharge
  )

  return <div className='received-service-charge'>{receivedServiceCharge}</div>
}

export default TroncOutput
