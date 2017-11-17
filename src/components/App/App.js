import React from 'react'

import CarrierCardContainer from '../../containers/CarrierCardContainer/CarrierCardContainer'

// App maps through the carrier card data props and passes each card into a carrier card container component
const App = ({ carrierCards }) => (
    <div>
      {
        carrierCards.map((card, key) => <CarrierCardContainer key={key} card={card}/>)
      }
    </div>
)
export default App
