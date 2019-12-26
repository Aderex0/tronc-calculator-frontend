import React, { useState, useEffect } from 'react'
import TroncOutput from '../components/TroncOutput'
import TroncCalculator from '../components/TroncCalculator'

const TroncCalculatorContainer = () => {
  const [receivedServiceCharge, setReceivedServiceCharge] = useState(0)
  const [displayCalculator, setDisplayCalculator] = useState(false)

  useEffect(() => {
    setDisplayCalculator(!displayCalculator)
  }, [receivedServiceCharge])

  return (
    <div>
      {displayCalculator ? (
        <TroncCalculator setReceivedServiceCharge={setReceivedServiceCharge} />
      ) : (
        <TroncOutput receivedServiceCharge={receivedServiceCharge} />
      )}
    </div>
  )
}

export default TroncCalculatorContainer
