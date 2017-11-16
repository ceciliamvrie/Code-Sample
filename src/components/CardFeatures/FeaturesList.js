import React from 'react'

// the features list used to come with a noFeatures option stated so that if there were no features passed,
//  it would render a default 'No features listed' but it lead to some bugs and couldn't get resolved in time

const FeaturesList = ({ list = [], noFeatures }) => {
  return (
    <div>
      <ul>
        {
         list.map(({ name }, key) => {
            return <li>{name}</li>
          })
        }
      </ul>
    </div>
  )
}

export default FeaturesList
