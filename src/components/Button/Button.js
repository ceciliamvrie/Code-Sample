import React from 'react'

import './styles.sass'

// the button gets passed in the type number from the carrier card, which then determines the class name of the button
//   inside each button is going to be a link that clicks to a new tab

const Button = ({ typeNumber, action }) => (
  <div>
    {
        typeNumber === 2 ? null : <button className={ typeNumber <= 1 ? 'blue': 'orange' }><a target="_blank" href={ action.link }>{ action.link_text || 'Get Quote' }</a></button>
    }
  </div>
)

export default Button
