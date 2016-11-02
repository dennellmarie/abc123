const React = require('react')
const List = require('./List')

const Board = (props) => (
	//console.log("IN BOARD", JSON.stringify(props))||

	<div className='board'>
		<h3 className='board-title'>{props.title}</h3>
		{/* <List title='List title' cards={["Card 1", "Card 2", "muahhh"]}/> */}
		{props.lists.map((list, index) => <List key={index} title={list.title} 
			cards={list.cards} 
			onAddSubmit={props.onAddSubmit.bind(null, index)} /> 
		)}
	</div>
)

module.exports = Board