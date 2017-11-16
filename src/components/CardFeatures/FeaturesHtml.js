import React from 'react'

import FeaturesList from './FeaturesList'

// the features section will either have a features list or the features html
//  using dangerouslySetInnerHTML was the only method I found that would cleanely embed the features_html

const FeaturesHtml = ({ features_html, features_icons }) =>  (
      <div>
        <h4>Features</h4>
				<FeaturesList list={ features_icons } noFeatures={ features_html === undefined }/>
				<div dangerouslySetInnerHTML={{ __html: features_html }} />
			</div>
)

export default FeaturesHtml
