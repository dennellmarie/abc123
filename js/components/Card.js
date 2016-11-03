const React = require('react')
const AddCardForm = require('./AddCardForm')

const Card = (props) => (
	//console.log("IN LIST", JSON.stringify(props))||

	<div className='card-list' style={{borderColor: props.color}}>
		{props.flipped ? <img src={props.image} height='122' /> : 
			<h3 className='list-title' style={{color: props.color}}>{props.title}</h3>
		}
		<div className='word'>
			<p className='card-text'>{props.word}</p>
			<AddCardForm onClickLetter={props.onClickLetter} />
		</div>
	</div>	
)
//Objects are not valid as a React child
module.exports = Card;