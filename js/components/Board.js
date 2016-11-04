const React = require('react')
const Block = require('./Block')

let colors = ["blue", "red", "green", "yellow"];

const Board = (props) => (
	//console.log("IN BOARD", JSON.stringify(props))||

	<div className='board'>
		<h3 className='board-title'>{props.title}</h3>
		{props.lists.map((block, index) => <Block key={index} title={block.title} 
			word={block.word} image={block.image} flipped={block.flipped} color={colors[index % colors.length]}
			onClickLetter={props.onClickLetter.bind(null, index)} /> 
		)}
	</div>

)

module.exports = Board;