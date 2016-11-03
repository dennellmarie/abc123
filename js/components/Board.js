const React = require('react')
const Card = require('./Card')

const Board = (props) => (
	//console.log("IN BOARD", JSON.stringify(props))||

	<div className='board'>
		<h3 className='board-title'>{props.title}</h3>
		{props.lists.map((list, index) => <Card key={index} title={list.title} 
			cards={list.cards} image={list.image} flipped={list.flipped}
			onClickLetter={props.onClickLetter.bind(null, index)} /> 
		)}
	</div>

)

module.exports = Board