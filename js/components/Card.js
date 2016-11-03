const React = require('react')
const AddCardForm = require('./AddCardForm')

const Card = (props) => (
	//console.log("IN LIST", JSON.stringify(props))||
	<div className='card-list'>
		<h3 className='list-title'>{props.title}</h3>
		<div className='card'>
			<p className='card-text'>{props.cards[0]}</p>
			<img src={props.image} width='150' height='150' />
		</div>
		<AddCardForm onClickLetter={props.onClickLetter} />
	</div>	
)
//Objects are not valid as a React child
module.exports = Card;