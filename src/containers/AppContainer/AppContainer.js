import React, { Component } from 'react'
import App from '../../components/App/App'
import { carrier_cards } from '../../../carrier_cards.json'

// fakeFetch simulates a fake request to the carrier_cards API
const fakeFetch = () => (
  new Promise((resolve, reject) => {
    const id = setTimeout(() => {
      clearTimeout(id)
      if (carrier_cards) { resolve(carrier_cards) }
      reject(carrier_cards)
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
  // fakeFetch gets called on initial load and populates the state
    fakeFetch().then(carrierCards => {
      this.setState({ carrierCards })
    })
  }

  // app container then passes the carrier card data from the state into the app component
  render() {
    return (
      <div>
        <App carrierCards={this.state.carrierCards}/>
      </div>
    );
  }
}

export default AppContainer;
