import React, { useState } from 'react'

const TroncCalculator = ({ setTroncOutput }) => {
  const [troncPercentage, setTroncPercentage] = useState(null)
  const [serviceCharge, setServiceCharge] = useState(null)
  const [checksPaid, setChecksPaid] = useState(null)

  const doTroncCalculation = () => {
    const sales = checksPaid - serviceCharge
    return sales - (sales / 100) * troncPercentage
  }

  return (
    <form onSubmit={() => setTroncOutput(doTroncCalculation)}>
      <input
        className='tronc-percentage-field'
        onChange={() => setTroncPercentage}
        type='number'
        value={troncPercentage}
      ></input>
      <input
        className='service-charge-field'
        onChange={() => setServiceCharge}
        type='number'
        value={serviceCharge}
      ></input>
      <input
        className='checks-paid-field'
        onChange={() => setChecksPaid}
        type='number'
        value={checksPaid}
      ></input>
      <input
        className='calculate-tronc-btn'
        type='submit'
        value='Calculate!'
      ></input>
    </form>
  )
}

export default TroncCalculator
