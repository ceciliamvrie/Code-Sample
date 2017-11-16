import React from 'react'

// components for the card features
import FeaturesHtml from '../CardFeatures/FeaturesHtml'
import FeaturesIcons from '../CardFeatures/FeaturesIcons'
// component for the detail body
import DetailBody from '../DetailBody/DetailBody'
// button component
import Button from '../Button/Button'
// styles
import './styles.sass'

const styles = {
	expansion: {
		'max-height': '500px',
		'overflowY': 'hidden',
		'transition': 'max-height 0.3s ease-in'
	},
	contraction: {
		'max-height': '130px',
		'overflowY': 'hidden',
		'transition': 'max-height 0.3s ease-out'
	},
	show: {
		opacity: '1',
		'transition': 'opacity 0.1s ease-out'
	},
	hide: {
    'opacity': '0',
		'transition': 'opacity 0.05s ease-out'
	}
}

const CarrierCard = ({ expandComponent, features_icons, features_html, impression_html, name, tagline, typeNumber, action, detailBody, isClicked }) => (
		<div className="carrier-card" onClick={ expandComponent }>
			<div style={ isClicked ? styles.expansion : styles.contraction }>
				<h2>{ name }</h2>
				<FeaturesIcons features_icons={ features_icons } />

				<div  className="carrier-card-top-container">
					<div className="tagline">{ tagline }</div>
					<Button typeNumber={ typeNumber } action={ action }/>
				</div>

       <div className="features-and-details" style={ isClicked ? styles.show : styles.hide }>
				 <FeaturesHtml features_icons={ features_icons } features_html={ features_html }/>
 				 <DetailBody name={ name } detailBody={ detailBody }/>
			 </div>
			</div>
		</div>
)

export default CarrierCard
