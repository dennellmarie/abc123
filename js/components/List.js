const React = require('react')
const Card = require('./Card')
const AddCardForm = require('./AddCardForm')

const List = (props) => (
	//console.log("IN LIST", JSON.stringify(props))||
	<div className='card-list'>
		<h3 className='list-title'>{props.title}</h3>
		{props.cards.map((card, index) => <Card key={index} text={card} /> )}
		<AddCardForm onAddSubmit={props.onAddSubmit} />
	</div>	
)
//Objects are not valid as a React child
module.exports = List