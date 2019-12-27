import React from 'react'
import { mount, shallow } from 'enzyme'
import TroncCalculator from '../../src/components/TroncCalculator'
import TroncOutput from '../../src/components/TroncOutput'

describe('Tron Calculator Form', () => {
  it('tronc calculator renders', () => {
    shallow(<TroncCalculator />)
  })

  it('Calculates the tronc onSubmit', () => {
    const wrapper = mount(<TroncCalculator />)
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
  })

  it('renders service output', () => {
    shallow(<TroncOutput />)
  })

  it('displays the correct service charge', () => {
    const wrapper = mount(<TroncOutput />)
    expect(wrapper.text()).toEqual(
      (123.0 - ((1230.0 - 123.0) / 100) * 3.75).toFixed(2)
    )
  })
})
