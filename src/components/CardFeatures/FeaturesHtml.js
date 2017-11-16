import React from 'react'

import FeaturesList from './FeaturesList'

import './styles.sass'

// the features section will either have a features list or the features html
//  using dangerouslySetInnerHTML was the only method I found that can cleanely
//    embed the features_html

const FeaturesHtml = ({ features_html, features_icons }) =>  (
      <div className="featureslist">

        <h4 className="featureslisttitle">Features</h4>
				<hr/>
				<FeaturesList list={ features_icons } noFeatures={ features_html === undefined }/>
				<div dangerouslySetInnerHTML={{ __html: features_html }} />

			</div>
)

export default FeaturesHtml
