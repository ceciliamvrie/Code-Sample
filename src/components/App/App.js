import React from 'react'

import CarrierCardContainer from '../../containers/CarrierCardContainer'

const App = ({ carrierCards }) => (
    <div>
      {
        carrierCards.map((card, key) => <CarrierCardContainer key={key} card={card}/>)
      }
    </div>
)
export default App
