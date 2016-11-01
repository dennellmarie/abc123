const React = require('react')
const List = require('./List')

const Board = (props) => (
	<div className='board'>
		<h3 className='board-title'>{props.title}</h3>
		{/* <List title='List title' cards={["Card 1", "Card 2", "muahhh"]}/> */}

		{props.lists.map(list => <List title={list} cards={["Card 1", "Card 2", "muahhh"]} /> )}
	</div>
)

module.exports = Board