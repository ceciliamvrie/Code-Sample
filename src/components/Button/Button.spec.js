import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai'

import Button from './Button'

describe('<Button />', () => {
  it('contains "get quote" as text for the link', function () {
    const wrapper = shallow(<Button />)
    expect(wrapper.text()).to.equal('Get Quote')
  });

  it('opens up a new tab whenever a button is clicked', function () {
    const wrapper = shallow(<Button/>)
    expect(wrapper.htmlProp('target')).toEqual('_blank')
  });

  it('should be orange if the carrier card type is 3', function () {
    const wrapper = shallow(<Button typeNumber='3' />)
    expect(wrapper.props().typeNumber).to.equal('3')

    expect(wrapper.find('button').hasClass('orange')).to.equal(true)
  });

  it('should be orange if the carrier card type is 0', function () {
    const wrapper = shallow(<Button typeNumber='0'/>)
    expect(wrapper.props().typeNumber).to.equal('0')

    expect(wrapper.find('button').hasClass('blue')).to.equal(true)
  });

  it('should be blue if the carrier card type is 1', function () {
    const wrapper = shallow(<Button typeNumber='1'/>)
    expect(wrapper.props().typeNumber).to.equal('1')

    expect(wrapper.find('button').hasClass('blue')).to.equal(true)
  });

  it('should not render if the carrier card type is 2 the button', function () {
    const wrapper = shallow(<Button typeNumber='2'/>)
    expect(wrapper.props().typeNumber).to.equal('2')

    expect(wrapper).to.have.length(0)
  });
});
