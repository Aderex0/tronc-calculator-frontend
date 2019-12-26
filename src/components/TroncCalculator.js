import React, { useState } from 'react'

const TroncCalculator = ({ setReceivedServiceCharge }) => {
  const [troncPercentage, setTroncPercentage] = useState(3.75)
  const [serviceCharge, setServiceCharge] = useState(0.0)
  const [checksPaid, setChecksPaid] = useState(0.0)

  const handleTroncPercentage = event => {
    const percentage = event.target.value
    setTroncPercentage(parseFloat(percentage))
  }

  const handleServiceCharge = event => {
    const service = event.target.value
    setServiceCharge(parseFloat(service))
  }

  const handleChecksPaid = event => {
    const checks = event.target.value
    setChecksPaid(parseFloat(checks))
  }

  const handleTroncCalculation = event => {
    event.preventDefault()

    const sales = checksPaid - serviceCharge
    const receivedServiceCharge =
      serviceCharge - (sales / 100) * troncPercentage

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
