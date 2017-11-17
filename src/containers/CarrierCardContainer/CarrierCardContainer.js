import React, { Component } from 'react'

import CarrierCard from '../../components/CarrierCard/CarrierCard'

// the state logic is seperated from the view with a container component for the carrier card
class CarrierCardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false
    }
  }
  
  // expandComponent gets passed to carrier card which changes the state isClicked on click
  expandComponent() {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }
  
  // the smaller details of the card data get passed into the carrier card as props
  render() {
    const { name, tagline, impression_html, type, features_html, features, detail_body, action} = this.props.card
    return(
        <CarrierCard
	  expandComponent={ this.expandComponent.bind(this) }
          typeNumber={ type }
          isClicked={ this.state.isClicked }
          features_icons={ features }
          name={ name }
          tagline={ tagline }
          action={ action }
          features_html={ features_html }
          detailBody={ detail_body }
          impression_html={ impression_html } />
    )
  }
}

export default CarrierCardContainer
