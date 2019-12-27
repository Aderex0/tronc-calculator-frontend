import React, { useState } from 'react'

import useTroncCalculatorStore from '../store/TroncCalculatorStore'

const TroncCalculator = () => {
  //Controlled Form >> start
  const [troncPercent, setTroncPercent] = useState(0.0)
  const handleTroncPercentage = e => setTroncPercent(parseFloat(e.target.value))

  const [serviceCharge, setServiceCharge] = useState(0.0)
  const handleServiceCharge = e => setServiceCharge(parseFloat(e.target.value))

  const [checksPaid, setChecksPaid] = useState(0.0)
  const handleChecksPaid = e => setChecksPaid(parseFloat(e.target.value))
  // Controlled Form >> end

  // State Store
  const setReceivedServiceCharge = useTroncCalculatorStore(
    state => state.setReceivedServiceCharge
  )

  const handleTroncCalculation = event => {
    event.preventDefault()

    const sales = checksPaid - serviceCharge
    const receivedServiceCharge = serviceCharge - (sales / 100) * troncPercent
    setTroncPercent(3.75)
    setServiceCharge(0.0)
    setChecksPaid(0.0)

    setReceivedServiceCharge(parseFloat(receivedServiceCharge.toFixed(2)))
  }

  return (
    <form onSubmit={handleTroncCalculation}>
      <input
        className='tronc-percentage-field'
        onChange={handleTroncPercentage}
        type='number'
        step='any'
        placeholder='3.75'
      ></input>
      <input
        className='service-charge-field'
        onChange={handleServiceCharge}
        type='number'
        step='any'
        placeholder='0.00'
      ></input>
      <input
        className='checks-paid-field'
        onChange={handleChecksPaid}
        type='number'
        step='any'
        placeholder='0.00'
      ></input>
      <input
        className='calculate-tronc-btn'
        type='submit'
        value='Calculate!'
        step='any'
      ></input>
    </form>
  )
}

export default TroncCalculator
