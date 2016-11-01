const React = require('react')
const Card = require('./Card')

const List = (props) => (
	<div className='card-list'>
		<h3 className='list-title'>{props.title}</h3>
		{props.cards.map(card => <Card text={card} /> )}
	</div>	
)

module.exports = List