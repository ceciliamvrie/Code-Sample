import React from 'react'

import FeaturesHtml from '../CardFeatures/FeaturesHtml'
import FeaturesIcons from '../CardFeatures/FeaturesIcons'

import DetailBody from '../DetailBody/DetailBody'
import Button from '../Button/Button'

const styles = {
	expansion: {
		'height': '250px',
		'overflowY': 'hidden',
		'transition': 'height 0.3s ease-in'
	},
	contraction: {
		'height': '100px',
		'overflowY': 'hidden',
		'transition': 'height 0.3s ease-out'
	}
}

const CarrierCard = ({ expandComponent, features_icons, features_html, impression_html, name, tagline, typeNumber, action, detailBody, isClicked }) => {
	console.log(features_icons)
	return (
		<div onClick={ expandComponent }>
			<div style={ isClicked ? styles.expansion : styles.contraction }>
				<h3>{ name }</h3>
				<FeaturesIcons features_icons={ features_icons } />
				<div>{ tagline }</div>
				<Button typeNumber={ typeNumber } action={ action }/>
				<FeaturesHtml features_icons={ features_icons } features_html={ features_html }/>
				<DetailBody name={ name } detailBody={ detailBody }/>
			</div>
		</div>
	)
}

export default CarrierCard
