const React = require('react')

const Card = (props) => (
	<div className='card'>
		<p className='card-text'>{props.text}</p>
	</div>
)

module.exports = Card