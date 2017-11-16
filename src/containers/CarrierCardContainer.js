import React, { Component } from 'react'

import CarrierCard from '../components/CarrierCard/CarrierCard'

// Sperated the state logic from the view with a container component for the carrier
//  card

class CarrierCardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false
    }
  }

  expandComponent() {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  render() {
    const { name, tagline, impression_html, type, features_html, features, detail_body, action} = this.props.card
    return(
        <CarrierCard
					expandComponent={ this.expandComponent.bind(this)}
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
