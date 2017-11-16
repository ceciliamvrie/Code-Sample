import React from 'react'

import CarrierCardContainer from '../../containers/CarrierCardContainer/CarrierCardContainer'

const App = ({ carrierCards }) => (
    <div>
      {
        carrierCards.map((card, key) => <CarrierCardContainer key={key} card={card}/>)
      }
    </div>
)
export default App
