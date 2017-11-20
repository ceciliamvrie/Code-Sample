import React from 'react'

import './styles.sass'

// the featureslist component renders the names of every feature item in a list that goes under the
//   carrier card's icons

const FeaturesList = ({ list = [] }) => {
  return (
    <div className="featureslist">
      <ul>
        {
         list.map(({ name }) => {
            return <li key={name}>{name}</li>
          })
        }
      </ul>
    </div>
  )
}

export default FeaturesList
