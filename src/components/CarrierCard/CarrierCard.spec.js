import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import CarrierCard from './CarrierCard'

describe('Behavior of Carrier Card when clicked', function() {

    it('should be able to expand and contract on click', function() {
        const wrapper = shallow(CarrierCard)
        wrapper.simulate('click')
        expect(wrapper).to.have.style('max-height','500px')
        wrapper.simulate('click')
        expect(wrapper).to.have.style('max-height', '130px')
    });
});

describe('Behavior of Carrier Cards features when Carrier Card is clicked', function() {

    it('should be able to appear on click', function() {
        const wrapper = shallow(CarrierCard)
        wrapper.simulate('click')
        expect(wrapper).to.have.style('max-height','500px')
        wrapper.simulate('click')
        expect(wrapper).to.have.style('max-height', '130px')
    });

    it('should be able to disappear when clicked twice', function() {
        const wrapper = shallow(CarrierCard)
        const features = wrapper.find('.features-and-details')
        wrapper.simulate('click')
        expect(features).to.have.style('opacity','1')
        wrapper.simulate('click')
        expect(features).to.have.style('opacity', '0')
    });
});
