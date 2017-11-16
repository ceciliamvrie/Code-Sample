import React, { Component } from 'react'
import App from '../components/App/App'
import { carrier_cards } from '../../carrier_cards.json'

// fakeFetch simulates a fake request to the carrier_cards API
const fakeFetch = (file) => (
  new Promise((resolve, reject) => {
    const id = setTimeout(() => {
      clearTimeout(id)
      resolve(carrier_cards)
    }, 500)
  })
)

class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      carrierCards: []
    }
  }

  componentDidMount() {
		// fakeFetch gets called on initial load
    fakeFetch().then(carrierCards => {
      this.setState({ carrierCards })
    })
  }

  render() {
    return (
      <div>
        <App carrierCards={this.state.carrierCards}/>
      </div>
    );
  }
}

export default AppContainer;
