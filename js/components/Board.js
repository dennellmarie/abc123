const React = require('react')
const Card = require('./Card')

let colors = ["blue", "red", "green", "yellow"];

const Board = (props) => (
	//console.log("IN BOARD", JSON.stringify(props))||

	<div className='board'>
		<h3 className='board-title'>{props.title}</h3>
		{props.lists.map((list, index) => <Card key={index} title={list.title} 
			word={list.word} image={list.image} flipped={list.flipped} color={colors[index % colors.length]}
			onClickLetter={props.onClickLetter.bind(null, index)} /> 
		)}
	</div>

)

module.exports = Board