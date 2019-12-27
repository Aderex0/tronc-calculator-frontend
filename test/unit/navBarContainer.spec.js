import React from 'react'
import { mount, shallow } from 'enzyme'

import NavBar from '../../src/containers/NavBar'

describe('renders navigation bar with correct buttons', () => {
  it('renders navigation bar', () => {
    shallow(<NavBar />)
  })
})
