import React from 'react'
import { mount } from 'enzyme'
import TroncCalculatorContainer from '../../src/components/TroncCalculator'

describe('Tron Calculator Form', () => {
  it('Calculates the tronc onSubmit', () => {
    const wrapper = mount(<TroncCalculatorContainer />)
  })
})
