import React from 'react'
import { mount } from 'enzyme'
import TroncCalculator from '../../src/components/TroncCalculator'

describe('Tron Calculator Form', () => {
  it('Calculates the tronc onSubmit', () => {
    let handleSubmit = jest.fn()

    const wrapper = mount(
      <TroncCalculator setReceivedServiceCharge={handleSubmit} />
    )

    wrapper
      .find('.tronc-percentage-field')
      .simulate('change', { target: { value: 3.75 } })

    wrapper
      .find('.service-charge-field')
      .simulate('change', { target: { value: 123.0 } })

    wrapper
      .find('.checks-paid-field')
      .simulate('change', { target: { value: 1230.0 } })

    wrapper.find('.calculate-tronc-btn').simulate('submit')

    expect(handleSubmit).toHaveBeenCalledWith(
      parseFloat((123.0 - ((1230.0 - 123.0) / 100) * 3.75).toFixed(2))
    )
  })
})
