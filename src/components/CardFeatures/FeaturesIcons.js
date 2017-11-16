import React from 'react'

// React unfortunately cannot import svgs from their paths like pngs or jpgs, so I had to import them as components instead
// I used an svg-loader for webpack and react to be able to import all svgs as urls

const FeaturesIcons = ({ features_icons = [], noFeatures }) => {
  return (
    <div>
        {
         features_icons.map(({ icon, name }, key) => {
            const Icon = require(`../../assets/${icon}.svg`)
            return <Icon />
          })
        }
    </div>
  )
}

export default FeaturesIcons
