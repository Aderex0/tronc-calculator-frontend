import React from 'react'
import { mount } from 'enzyme'
import App from '../../src/App'

describe('App', () => {
  it('renders hi', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find('.hi').text()).toContain('Hi')
  })
})
