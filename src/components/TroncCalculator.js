import React, { useState } from 'react'
import Input from '../styled_components/tronc_calculator_form_input'

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
      <label>Tronc rate</label>
      <Input
        className='tronc-percentage-field'
        onChange={handleTroncPercentage}
        type='number'
        step='any'
        placeholder='3.75'
      />
      <label>Service charge</label>
      <Input
        className='service-charge-field'
        onChange={handleServiceCharge}
        type='number'
        step='any'
        placeholder='76.40'
      />
      <label>Checks paid</label>
      <Input
        className='checks-paid-field'
        onChange={handleChecksPaid}
        type='number'
        step='any'
        placeholder='685.98'
      />
      <label>Cash tips (optional)</label>
      <Input className='cash-tips-field' type='number' placeholder='55.50' />
      <label>Shift start (optional)</label>
      <Input className='start-hours-field' type='number' />
      <Input className='start-minutes-field' type='number' />
      <label>Shift End (optional)</label>
      <Input className='end-hours-field' type='number' />
      <Input className='end-minutes-field' type='number' />
      <Input
        className='calculate-tronc-btn'
        type='submit'
        value='Calculate!'
        step='any'
      />
    </form>
  )
}

export default TroncCalculator
