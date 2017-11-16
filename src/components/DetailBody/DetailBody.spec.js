import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import DetailBody from './DetailBody'

describe('<DetailBody />', () => {
  it('should render successfully if detailBody props are not provided', () => {
    const wrapper = shallow(<DetailBody name="Allstate" detailBody=""/>)
    expect(wrapper).to.be.a('object')
  });

  it('should read "No description provided" if no detail body props are provided', () => {
    const wrapper = shallow(<DetailBody name="Elephant" detailBody=""/>)
    expect(wrapper).find('p').text().to.equal('No description provided')
  });
})
